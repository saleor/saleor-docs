# Saleor Discount Precedence & Behavior

How Saleor resolves competing discounts at the order level and line level, derived from reading the backend source code.

> **Source**: `saleor/order/utils.py`, `saleor/discount/utils/order.py`, `saleor/discount/utils/voucher.py`, `saleor/checkout/complete_checkout.py`

## Precedence Hierarchy

```
ORDER LEVEL:
  Manual discount  >  Voucher  >  Order promotion
  (each suppresses/deletes lower-priority ones)

LINE LEVEL:
  Manual line discount  >  Catalogue promotion / Voucher line discount
  (manual deletes all others; catalogue promo skips lines with manual)

STACKING:
  - Nothing stacks at the same level
  - Order-level voucher + catalogue line promotions CAN coexist
  - Manual at either level is exclusive within that level
```

---

## Order-Level Discounts

### Manual order discount erases all others

`saleor/order/utils.py` — `create_manual_order_discount`:

```python
def create_manual_order_discount(order, reason, value_type, value, ...):
    with transaction.atomic():
        order.discounts.exclude(voucher__type=VoucherType.SHIPPING).delete()
        # then creates a single MANUAL OrderDiscount
```

Deletes all existing `OrderDiscount` records (voucher discounts, promotion discounts) except shipping voucher discounts. Only one manual order-level discount is allowed (validated in mutation).

### Removing manual order discount restores voucher

`saleor/order/utils.py` — `remove_order_discount_from_order`:

```python
def remove_order_discount_from_order(order, order_discount):
    order_discount.delete()
    if order.voucher:
        create_or_update_discount_object_from_order_level_voucher(order)
```

The voucher stays on `order.voucher` even when suppressed. Removal triggers re-evaluation.

### Order promotions are skipped when manual or voucher exists

`saleor/discount/utils/order.py` — `create_order_discount_objects_for_order_promotions`:

```python
def create_order_discount_objects_for_order_promotions(order, lines_info, ...):
    if order.voucher_code or order.discounts.filter(type=DiscountType.MANUAL):
        _clear_order_discount(order, lines_info)
        return
```

`_clear_order_discount` removes any existing `ORDER_PROMOTION` discount and gift lines:

```python
def _clear_order_discount(order_or_checkout, lines_info):
    with transaction.atomic():
        delete_gift_line(order_or_checkout, lines_info)
        order_or_checkout.discounts.filter(type=DiscountType.ORDER_PROMOTION).delete()
```

### Voucher order-level discount is suppressed when manual exists

`saleor/discount/utils/voucher.py` — `create_or_update_discount_object_from_order_level_voucher`:

```python
def create_or_update_discount_object_from_order_level_voucher(order, ...):
    is_manual_discount = order.discounts.filter(type=DiscountType.MANUAL).exists()
    is_order_voucher = is_order_level_voucher(voucher)
    should_delete_order_level_voucher_discount = (
        not order.voucher_id
        or (is_order_voucher and is_manual_discount)
        or is_line_level_voucher
    )
    if should_delete_order_level_voucher_discount:
        order.discounts.filter(type=DiscountType.VOUCHER).delete()
        return
```

---

## Line-Level Discounts

### Manual line discount erases line promotions/voucher discounts

`saleor/order/utils.py` — `_remove_invalid_discounts_for_adding_manual`:

```python
def _remove_invalid_discounts_for_adding_manual(order_line_discounts):
    discount_to_delete = []
    current_manual_discount = None
    for discount in order_line_discounts:
        if discount.type == DiscountType.MANUAL and not current_manual_discount:
            current_manual_discount = discount
        else:
            discount_to_delete.append(discount)

    if discount_to_delete:
        for discount in discount_to_delete:
            order_line_discounts.remove(discount)
        OrderLineDiscount.objects.filter(
            id__in=[discount.id for discount in discount_to_delete]
        ).delete()
```

Called from `update_discount_for_order_line` (the `orderLineDiscountUpdate` mutation handler).

### Catalogue promotions skip lines with manual discounts

`saleor/discount/utils/order.py`:

```python
        if [
            discount
            for discount in line_info.discounts
            if discount.type == DiscountType.MANUAL
        ]:
            line_discounts_to_remove.extend(discounts_to_update)
            continue
```

### Removing manual line discount restores voucher

`saleor/order/utils.py` — `remove_discount_from_order_line`:

```python
def remove_discount_from_order_line(order_line, order):
    order_line.discounts.all().delete()
    update_unit_discount_data_on_order_line(order_line, [])

    voucher = order.voucher
    if (
        voucher
        and not is_order_level_voucher(voucher)
        and not is_shipping_voucher(voucher)
    ):
        lines_info = fetch_draft_order_lines_info(order)
        create_or_update_line_discount_objects_from_voucher(lines_info)
        lines = [line_info.line for line_info in lines_info]
        OrderLine.objects.bulk_update(lines, ["base_unit_price_amount"])
```

---

## Denormalized `unit_discount_value` on OrderLine

### At checkout completion — always set to fixed money amount

`saleor/checkout/complete_checkout.py`:

```python
    discount_amount = _get_unit_discount(...)

    line = OrderLine(
        ...
        unit_discount=discount_amount,
        unit_discount_value=discount_amount.amount,
        unit_discount_type=DiscountValueType.FIXED,
        ...
    )
```

### Central sync function: `update_unit_discount_data_on_order_line`

`saleor/discount/utils/order.py`:

```python
def update_unit_discount_data_on_order_line(line, discounts):
    unit_discount_amount = Decimal("0.0")
    unit_discount_type = None
    unit_discount_value = Decimal("0.0")
    if discounts:
        discount_amount = sum(
            [discount.amount_value for discount in discounts], Decimal("0.0")
        )
        unit_discount_amount = quantize_price(
            discount_amount / line.quantity, line.currency
        )

        more_than_one_discount = len(discounts) > 1
        if more_than_one_discount:
            unit_discount_type = DiscountValueType.FIXED
            unit_discount_value = unit_discount_amount
        else:
            discount = discounts[0]
            unit_discount_type = discount.value_type
            unit_discount_value = discount.value

    line.unit_discount_amount = unit_discount_amount
    line.unit_discount_reason = unit_discount_reason
    line.unit_discount_type = unit_discount_type
    line.unit_discount_value = unit_discount_value
```

When multiple discounts exist, the type collapses to `FIXED` and the value becomes the summed per-unit amount. When a single discount exists, its original type and value are preserved.

### `OrderLineDiscount` objects carry the type

```python
OrderLineDiscount(type=DiscountType.VOUCHER, unique_type=DiscountType.VOUCHER, ...)
OrderLineDiscount(type=DiscountType.PROMOTION, unique_type=DiscountType.PROMOTION, ...)
```

---

## Anti-patterns

❌ **Don't assume `unit_discount_value > 0` means manual discount** — It means any discount exists  
❌ **Don't expect discounts to stack at the same level** — Manual suppresses everything at its level  
❌ **Don't forget voucher survives manual suppression** — It's re-evaluated on manual removal  
❌ **Don't rely on `OrderLine` fields to determine discount type** — Check `OrderLineDiscount.type`
