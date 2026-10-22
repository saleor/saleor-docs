# saleor-core

Backend behavior reference for the [Saleor](https://saleor.io) e-commerce platform. Covers internal mechanics derived from reading the core source code — discount precedence, stock availability modes, denormalized fields, and known Dashboard gotchas.

## Installation

```shell
npx skills add . --skill saleor-core
```

## What's Included

### Rules (progressively disclosed)

| Rule | Topic |
|------|-------|
| `discount-precedence` | Full precedence hierarchy, manual vs voucher vs promotion interactions, denormalized field semantics, known Dashboard bug |
| `order-discount-allocation` | Two-pass calculation of order-level discounts, what the API exposes vs reconstructs, gift-line shape gotcha (`ORDER_PROMOTION` on `OrderLine.discounts[]`), guidance for price-explanation tooling |
| `stock-availability-modes` | `Shop.useLegacyShippingZoneStockAvailability` (3.23+), purchasability vs shippability, server queryset dispatch, mode-conditional webhooks, Dashboard UI / copy / severity rules, migration footguns, test fixtures |

## Structure

```
saleor-core/
├── SKILL.md              # Overview and quick reference (agents read this first)
├── README.md             # This file (for humans)
└── rules/                # Individual rule files
    ├── discount-precedence.md
    ├── order-discount-allocation.md
    └── stock-availability-modes.md
```

## What's NOT Included

- Storefront API patterns — see `saleor-storefront`
- App development patterns — see `saleor-app`
- Exhaustive Saleor source walkthrough — rules focus on behavior that matters for building integrations
