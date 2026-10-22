# Order-Level Discount Allocation & Line-Discount Shape

How Saleor allocates order-level discounts across lines and what the GraphQL API does (and doesn't) expose. Companion to `discount-precedence.md` — that rule covers *which* discount wins; this rule covers *how* the winners are calculated, distributed, and surfaced via the API.

> **Source**: `saleor/order/base_calculations.py`, `saleor/discount/utils/promotion.py`, `saleor/graphql/order/types.py`, `saleor/graphql/discount/types/discounts.py`

## TL;DR

1. **Order-level discounts are calculated and stored as a single combined effect per line, not per record.** Saleor uses a two-pass collapse: Pass A folds all `OrderDiscount` records into one `subtotal_discount`, Pass B distributes that single number across lines proportionally. The result is baked into `OrderLine.total_price` as one number.
2. **The API exposes per-line totals and per-record-at-order totals — but no per-record-per-line decomposition.** Anything that looks like "voucher contributed $X to line L" is reconstructed by the consumer; the backend never computed it.
3. **Gift lines violate the apparent invariant of `OrderLine.discounts[]`.** A free-gift line carries an `OrderLineDiscount` with `type = ORDER_PROMOTION`, even though `ORDER_PROMOTION` is otherwise an order-level kind. Switches over `OrderLineDiscount.type` must handle this case explicitly.

---

## Pass A: Collapse all order-level records into one number

`saleor/order/base_calculations.py` — `propagate_order_discount_on_order_prices`:

```python
def propagate_order_discount_on_order_prices(order, lines):
    base_subtotal = base_order_subtotal(order, lines)
    subtotal = base_subtotal
    shipping_price = order.base_shipping_price

    for order_discount in order.discounts.all():
        subtotal_before_discount = subtotal
        shipping_price_before_discount = shipping_price

        if order_discount.type == DiscountType.VOUCHER:
            # apply against running subtotal (entire-order vouchers only)
            ...
        elif order_discount.type == DiscountType.ORDER_PROMOTION:
            ...
        elif order_discount.type == DiscountType.MANUAL:
            ...

        # Persist the per-record amount (mutates `OrderDiscount.amount`)
        total_discount_amount = (
            (shipping_price_before_discount - shipping_price)
            + (subtotal_before_discount - subtotal)
        )
        if order_discount.amount != total_discount_amount:
            order_discount.amount = total_discount_amount
            order_discounts_to_update.append(order_discount)

    return subtotal, shipping_price
```

Key facts:

- Walks `order.discounts.all()` in DB order, mutating each record's `amount` against the running subtotal.
- Combined effect on the subtotal: `subtotal_discount = base_subtotal - subtotal`. **One number, regardless of how many records contributed.**
- Per-record amounts are persisted at the order level (each `OrderDiscount.amount`), not per line.

## Pass B: Distribute the combined `subtotal_discount` across lines

`saleor/order/base_calculations.py` — `propagate_order_discount_on_order_lines_prices`:

```python
def propagate_order_discount_on_order_lines_prices(lines, base_subtotal, subtotal_discount):
    lines = list(lines)
    lines_count = len(lines)
    if lines_count == 1:
        line = lines[0]
        yield line, _get_total_price_with_subtotal_discount_for_order_line(
            line, subtotal_discount
        )

    elif lines_count > 1:
        remaining_discount = subtotal_discount
        for idx, line in enumerate(lines):
            if idx < lines_count - 1:
                share = (
                    line.base_unit_price_amount * line.quantity / base_subtotal.amount
                )
                discount = quantize_price(
                    min(share * subtotal_discount, base_subtotal),
                    base_subtotal.currency,
                )
                yield line, _get_total_price_with_subtotal_discount_for_order_line(
                    line, discount
                )
                remaining_discount -= discount
            else:
                # Last line absorbs rounding remainder so the sum reconciles.
                yield line, _get_total_price_with_subtotal_discount_for_order_line(
                    line, remaining_discount
                )
```

Key facts:

- For 1 line: the full slice goes to that line.
- For N lines: proportional split using **post-line-discount** subtotal share (`line.base_unit_price_amount * line.quantity / base_subtotal.amount`).
- Each share is `quantize_price`'d to currency precision.
- The **last line absorbs the rounding remainder** so the sum across lines exactly equals `subtotal_discount`.
- Result is folded into `OrderLine.total_price_net` via `assign_order_line_prices`. **No per-record decomposition is stored.**

## What the API exposes (and doesn't)

`saleor/graphql/order/types.py` and `saleor/graphql/discount/types/discounts.py`:

| Field | Granularity | What it represents |
|------|-------------|-------------------|
| `OrderLine.totalPrice` | Per line | Final post-everything total (single number, taxes included) |
| `OrderLine.discounts[]` (`OrderLineDiscount.total`) | Per line, per line-level record | Catalogue, line voucher, manual line — and **`ORDER_PROMOTION` for gift lines** (see below) |
| `Order.discounts[]` (`OrderDiscount.total`) | Per order, per record | The amounts mutated in Pass A (per-record at the order level) |

**There is no field exposing per-record-per-line attribution.** That decomposition isn't even computed — Pass A produces a single combined number, Pass B distributes that combined number, and only the line total is persisted.

## Reconstructing the per-line order-level slice (for consumers)

If you need to show "how much of line L's price reduction came from order-level discounts," you can recover the slice exactly:

```
propagated = start - sum(line.discounts[].total) - end
```

Where:
- `start = line.undiscountedUnitPrice.gross.amount * line.quantity`
- `end = line.totalPrice.gross.amount`

This equals what Pass B computed for that line (modulo gross/net tax-pass rounding noise of at most a cent). It is **exact** as a per-line total.

What is **not** recoverable: which `Order.discounts[]` record contributed how much to this line. Splitting `propagated` across records by their `total` weights (or any other proxy) is an attribution, not data — the backend never produced one.

## Special case: gift lines

Saleor's free-gift promotions (`RewardType.GIFT`) add the gifted product as a regular `OrderLine` with:

- `is_gift = True`
- `undiscounted_unit_price_amount = listing.price_amount` (catalog price)
- `unit_price_*` and `total_price_*` set to `0`

The gift's value is recorded as a single `OrderLineDiscount` **on the gift line itself**, with `type = ORDER_PROMOTION`. From `saleor/discount/utils/promotion.py`:

```python
line = create_gift_line(order_or_checkout, gift_listing, line_discount_data)
line_discount, discount_created = discount_model.objects.get_or_create(
    type=DiscountType.ORDER_PROMOTION,
    line=line,
    defaults=asdict(line_discount_data),
)
```

This violates the apparent invariant that `ORDER_PROMOTION` records live only on `Order.discounts[]`. Any code that switches over `OrderLineDiscount.type` and treats `ORDER_PROMOTION` as "skip — order-level" will:

1. Fail to render or attribute the gift's value as a line factor.
2. Still count its `total` if it sums all `line.discounts[].total` blindly — leading to an empty/silent waterfall when the gift's amount equals the catalog price.

Detection: `OrderLine.isGift === true` is the discriminator. The `OrderLineDiscount.name` carries the promotion rule's name.

## Anti-patterns

❌ **Don't assume a per-record-per-line decomposition exists in the API.** It doesn't. Pass A produces a single per-line slice; per-record attribution is reconstruction, not data.

❌ **Don't silently `break` on `OrderDiscountType.ORDER_PROMOTION` when iterating `OrderLine.discounts[]`.** Gift lines carry that exact type. Either handle it explicitly (`isGift`) or fall through to a generic factor — never drop it.

❌ **Don't drop a record from rendering while still summing its `total` into a "line-level total" reduce.** That's how empty waterfalls happen: factor list is empty, residual reconciles to zero, nothing tells the user where the price went.

❌ **Don't display reconstructed per-record-per-line amounts as if they were API truth** when multiple `Order.discounts[]` records apply. Either collapse to a single combined factor (exact slice + named contributors, no per-record amounts) or be explicit that the per-record split is reconstruction.

❌ **Don't hardcode 2 decimal places for currency rounding.** Pass B uses `quantize_price(value, currency)` which respects per-currency precision (JPY: 0, BHD: 3, etc.). Consumers reconstructing slices must match — or they'll diverge from the backend and surface phantom residuals.

## Quick checklist for consumers

When building any tool that displays per-line price attribution on confirmed orders:

- [ ] `OrderLine.totalPrice` is the source of truth for the final per-line number — anchor reconciliation to it.
- [ ] Recover the order-level slice as `start − Σ line.discounts[].total − end`. It's exact.
- [ ] Iterate `OrderLine.discounts[]` with an exhaustive switch over `OrderDiscountType`. Handle `ORDER_PROMOTION` explicitly (gift line) — don't `break` silently.
- [ ] When `Order.discounts[]` has multiple records contributing to a single line, prefer collapsing to one combined display row over fabricating per-record amounts.
- [ ] Use currency-aware rounding (`Intl.NumberFormat` minor-unit precision in JS, `quantize_price` in Python).
