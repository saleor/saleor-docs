---
api_reference: true
id: taxable-object
title: TaxableObject
---

Taxable object.

```graphql
type TaxableObject {
  sourceObject: TaxSourceObject!
  pricesEnteredWithTax: Boolean!
  currency: String!
  shippingPrice: Money!
  address: Address
  discounts: [TaxableObjectDiscount!]!
  lines: [TaxableObjectLine!]!
  channel: Channel!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObject</code>.<code class="gqlmd-mdx-entity-name">sourceObject</code></span>](#source-object)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxSourceObject!</code></span>](/api-reference/miscellaneous/unions/tax-source-object) \{#source-object\}

The source object related to this tax object.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObject</code>.<code class="gqlmd-mdx-entity-name">pricesEnteredWithTax</code></span>](#prices-entered-with-tax)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#prices-entered-with-tax\}

Determines if prices contain entered tax..

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObject</code>.<code class="gqlmd-mdx-entity-name">currency</code></span>](#currency)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#currency\}

The currency of the object.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObject</code>.<code class="gqlmd-mdx-entity-name">shippingPrice</code></span>](#shipping-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#shipping-price\}

The price of shipping method, includes shipping voucher discount if applied.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObject</code>.<code class="gqlmd-mdx-entity-name">address</code></span>](#address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Address</code></span>](/api-reference/users/objects/address) \{#address\}

The address data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObject</code>.<code class="gqlmd-mdx-entity-name">discounts</code></span>](#discounts)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TaxableObjectDiscount!]!</code></span>](/api-reference/taxes/objects/taxable-object-discount) \{#discounts\}

List of discounts.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObject</code>.<code class="gqlmd-mdx-entity-name">lines</code></span>](#lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TaxableObjectLine!]!</code></span>](/api-reference/taxes/objects/taxable-object-line) \{#lines\}

List of lines assigned to the object.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxableObject</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Channel!</code></span>](/api-reference/channels/objects/channel) \{#channel\}

### Member Of

[`CalculateTaxes`](/api-reference/taxes/objects/calculate-taxes) <mark class="gqlmd-mdx-badge">object</mark>
