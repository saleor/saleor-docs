## Assumptions

1. **Root-level `reasonReference` is required** (for staff) when `refundReasonReferenceType` is configured. "Root-level" means `OrderGrantedRefund.reasonReference` for grant refund mutations, and the global `input.reasonReference` for `orderFulfillmentReturnProducts`.
2. **Per-line `reasonReference` is always optional** — even for staff users when the setting is configured. Lines without a `reasonReference` are stored with `null`. No inheritance from root-level.
3. **Apps can always omit** `reasonReference` at any level, even when the setting is configured.
4. **When provided**, any `reasonReference` (root or per-line) must point to a `Page` of the configured `PageType`. Wrong type → `ValidationError`.
5. **When `reasonReference` is provided but `refundReasonReferenceType` is not configured** → `ValidationError`.

---

## orderGrantRefundCreate — per-line reasonReference

GWT-1.1: Staff user provides per-line reasonReference successfully

GIVEN refundReasonReferenceType is configured with PageType "RefundReasons"
AND a Page "Damaged in transit" exists with type "RefundReasons"
AND the caller is a staff user with MANAGE_ORDERS
WHEN orderGrantRefundCreate is called with lines[].reasonReference = "Damaged in
transit" Page ID
THEN the granted refund is created
AND the OrderGrantedRefundLine.reasonReference resolves to the "Damaged in
transit" Page
AND the OrderGrantedRefundLine.reason contains the free-text value (if provided)

GWT-1.2: Staff user omits order-level reasonReference when configured — error

GIVEN refundReasonReferenceType is configured
AND the caller is a staff user
WHEN orderGrantRefundCreate is called without order-level reasonReference
THEN a ValidationError is returned for the order-level reasonReference field
AND the granted refund is NOT created

GWT-1.2b: Staff user omits per-line reasonReference when configured — allowed

GIVEN refundReasonReferenceType is configured
AND the caller is a staff user
WHEN orderGrantRefundCreate is called with: - order-level reasonReference = valid Page ID - lines without per-line reasonReference
THEN the granted refund is created successfully
AND OrderGrantedRefundLine.reasonReference is null for those lines

GWT-1.3: App omits per-line reasonReference when configured — allowed

GIVEN refundReasonReferenceType is configured
AND the caller is an App with MANAGE_ORDERS
WHEN orderGrantRefundCreate is called with lines that have no reasonReference
THEN the granted refund is created successfully
AND OrderGrantedRefundLine.reasonReference is null

GWT-1.4: Per-line reasonReference Page has wrong PageType — error

GIVEN refundReasonReferenceType is configured with PageType "RefundReasons"
AND a Page "Some blog post" exists with type "BlogPosts" (different PageType)
AND the caller is a staff user
WHEN orderGrantRefundCreate is called with lines[].reasonReference = "Some blog
post" Page ID
THEN a ValidationError is returned indicating the Page does not match the
configured PageType
AND the granted refund is NOT created

GWT-1.5: reasonReference provided when no type is configured — error

GIVEN refundReasonReferenceType is NOT configured (null)
AND the caller is a staff user
WHEN orderGrantRefundCreate is called with lines[].reasonReference set to any Page
ID
THEN a ValidationError is returned indicating reason reference type is not
configured
AND the granted refund is NOT created

GWT-1.6: Mixed lines — some with reasonReference, some without — allowed

GIVEN refundReasonReferenceType is configured
AND the caller is a staff user
WHEN orderGrantRefundCreate is called with: - order-level reasonReference = valid Page ID - line A: reasonReference = valid Page ID - line B: no reasonReference
THEN the granted refund is created
AND line A's OrderGrantedRefundLine.reasonReference = the provided Page
AND line B's OrderGrantedRefundLine.reasonReference is null

GWT-1.7: Order-level and per-line reasonReference coexist — no inheritance

GIVEN refundReasonReferenceType is configured
AND Page "General return" and Page "Damaged item" both exist with the correct PageType
AND the caller is a staff user
WHEN orderGrantRefundCreate is called with: - order-level reasonReference = "General return" - line A: reasonReference = "Damaged item" - line B: no line-level reasonReference
THEN the granted refund is created
AND line A's OrderGrantedRefundLine.reasonReference = "Damaged item"
AND line B's OrderGrantedRefundLine.reasonReference is null (no inheritance from order-level)
AND the OrderGrantedRefund.reasonReference = "General return"

---

orderGrantRefundUpdate — per-line reasonReference on addLines

GWT-2.1: Staff adds lines with valid reasonReference

GIVEN refundReasonReferenceType is configured
AND an existing OrderGrantedRefund with status NONE
AND the caller is a staff user
WHEN orderGrantRefundUpdate is called with addLines[].reasonReference = valid Page
ID
THEN the new lines are added
AND each new OrderGrantedRefundLine.reasonReference resolves to the provided
Page

GWT-2.2: Staff adds lines without per-line reasonReference when configured — allowed

GIVEN refundReasonReferenceType is configured
AND an existing OrderGrantedRefund with status NONE and a valid order-level reasonReference
AND the caller is a staff user
WHEN orderGrantRefundUpdate is called with addLines that have no per-line reasonReference
THEN the lines are added successfully
AND each new OrderGrantedRefundLine.reasonReference is null

GWT-2.3: App adds lines without reasonReference when configured — allowed

GIVEN refundReasonReferenceType is configured
AND the caller is an App
WHEN orderGrantRefundUpdate is called with addLines that have no reasonReference
THEN the lines are added successfully
AND OrderGrantedRefundLine.reasonReference is null

GWT-2.4: Update with status SUCCESS — only reason updatable

GIVEN an existing OrderGrantedRefund with status SUCCESS
AND the caller is a staff user
WHEN orderGrantRefundUpdate is called with addLines containing reasonReference
THEN an error is returned (cannot modify lines when status is SUCCESS or PENDING)

GWT-2.5: addLines Page has wrong PageType — error

GIVEN refundReasonReferenceType is configured with PageType "RefundReasons"
AND a Page exists with a different PageType
AND the caller is a staff user
WHEN orderGrantRefundUpdate is called with addLines[].reasonReference = that Page
ID
THEN a ValidationError is returned indicating PageType mismatch
AND no lines are added

---

orderFulfillmentReturnProducts — return/replace reasons

GWT-3.1: Return with global reason and per-line reasons

GIVEN refundReasonReferenceType is configured
AND a fulfilled order with 2 fulfillment lines
AND the caller is a staff user
WHEN orderFulfillmentReturnProducts is called with: - global reason = "Customer return request" - global reasonReference = valid Page ID - fulfillmentLines[0]: reason = "Damaged", reasonReference = valid Page ID
(different) - fulfillmentLines[1]: reason = "Wrong size", reasonReference = valid Page ID
(different) - refund = false
THEN the return fulfillment is created
AND Fulfillment.reason = "Customer return request"
AND Fulfillment.reasonReference = the global Page
AND FulfillmentLine[0].reason = "Damaged"
AND FulfillmentLine[0].reasonReference = the line-specific Page
AND FulfillmentLine[1].reason = "Wrong size"
AND FulfillmentLine[1].reasonReference = the line-specific Page

GWT-3.2: Staff omits global reasonReference when configured and refund=false — error

GIVEN refundReasonReferenceType is configured
AND the caller is a staff user
WHEN orderFulfillmentReturnProducts is called with: - no global reasonReference - refund = false
THEN a ValidationError is returned for the global reasonReference field
AND no fulfillment is created

GWT-3.2b: Staff provides global but omits per-line reasonReference — allowed

GIVEN refundReasonReferenceType is configured
AND the caller is a staff user
WHEN orderFulfillmentReturnProducts is called with: - global reasonReference = valid Page ID - fulfillmentLines with no per-line reasonReference - refund = false
THEN the return fulfillment is created
AND Fulfillment.reasonReference = the global Page
AND FulfillmentLine[].reasonReference is null for each line

GWT-3.3: Staff omits global reasonReference when refund=true — same validation as refund=false

GIVEN refundReasonReferenceType is configured
AND the caller is a staff user
WHEN orderFulfillmentReturnProducts is called with: - no global reasonReference - refund = true
THEN a ValidationError is returned for the global reasonReference field
AND no fulfillment is created

GWT-3.3b: Staff provides reasonReference when refund=true — stored on fulfillment

GIVEN refundReasonReferenceType is configured
AND the caller is a staff user
WHEN orderFulfillmentReturnProducts is called with: - global reasonReference = valid Page ID - refund = true
THEN the return is processed and refund is triggered
AND the Fulfillment.reasonReference is stored (same as refund=false)
AND the refund reason is tracked independently on the OrderGrantedRefund

GWT-3.4: App omits reasonReference when configured and refund=false — allowed

GIVEN refundReasonReferenceType is configured
AND the caller is an App
WHEN orderFulfillmentReturnProducts is called with: - no reasonReference - refund = false
THEN the return fulfillment is created
AND Fulfillment.reasonReference is null
AND FulfillmentLine.reasonReference is null

GWT-3.5: Per-line reasonReference with wrong PageType — error

GIVEN refundReasonReferenceType is configured with PageType "ReturnReasons"
AND a Page exists with type "BlogPosts"
AND the caller is a staff user
WHEN orderFulfillmentReturnProducts is called with: - fulfillmentLines[].reasonReference = the BlogPosts Page ID - refund = false
THEN a ValidationError is returned indicating PageType mismatch
AND no fulfillment is created

GWT-3.6: reasonReference provided when type is not configured — error

GIVEN refundReasonReferenceType is NOT configured
AND the caller is a staff user
WHEN orderFulfillmentReturnProducts is called with: - reasonReference = any Page ID - refund = false
THEN a ValidationError is returned indicating reason reference type is not
configured
AND no fulfillment is created

GWT-3.7: Replace flow with per-line reasons

GIVEN refundReasonReferenceType is configured
AND a fulfilled order
AND the caller is a staff user
WHEN orderFulfillmentReturnProducts is called with: - fulfillmentLines[0]: replace = true, reasonReference = valid Page ID - fulfillmentLines[1]: replace = false, reasonReference = valid Page ID - refund = false
THEN a replaceFulfillment is created with status REPLACED
AND a returnFulfillment is created with status RETURNED
AND both fulfillments and their lines have the correct reason/reasonReference
AND a replaceOrder (draft) is created

GWT-3.8: Mixed fulfillment lines — some with per-line reasons, some without

GIVEN refundReasonReferenceType is configured
AND the caller is a staff user
WHEN orderFulfillmentReturnProducts is called with: - global reasonReference = valid Page ID - fulfillmentLines[0]: reasonReference = valid Page ID, reason = "Damaged" - fulfillmentLines[1]: no per-line reasonReference, no per-line reason - refund = false
THEN the return fulfillment is created
AND Fulfillment.reasonReference = the global Page
AND FulfillmentLine[0].reasonReference = the line-specific Page
AND FulfillmentLine[1].reasonReference is null

GWT-3.9: Reason fields stored and queryable after return

GIVEN a return was processed with reasons (GWT-3.1)
WHEN querying the order's fulfillments via GraphQL:
order { fulfillments { reason reasonReference { id title } lines { reason
reasonReference { id title } } } }
THEN the reason and reasonReference fields are populated on both Fulfillment and
FulfillmentLine

---

Resolved decisions

- Per-line reasonReference is always optional. No inheritance from root-level. Lines without it store null.
- Root-level (order-level / global) reasonReference remains required for staff when configured.
