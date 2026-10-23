---
name: storefront-builder
description: >
  Saleor storefront data + UX playbook. Covers GraphQL query design, channel handling, data contracts per surface (PLP/PDP/nav/pricing/availability/media), variant-selection UX, and Saleor-specific correctness rules. Framework-agnostic — agent inspects repo and applies conventions locally.
license: MIT
metadata:
  author: saleor
  version: "2.0.0"
---

# Saleor Storefront Playbook

This skill owns Saleor data contracts and UX/data-layer behaviour. It does **not** own framework scaffolding, CSS setup, or env-loading specifics — the agent discovers those from the local project.

Parse `$ARGUMENTS` to determine which step to run.

## Step routing

Read the first word of `$ARGUMENTS` as the step number and jump to that section. **Execute only that step, then stop and wait for the user to ask for the next one. Never chain steps automatically.**

- `1` → [Step 1: Project Bootstrap](#step-1-project-bootstrap)
- `2` → [Step 2: Design & Aesthetic](#step-2-design--aesthetic)
- `3` → [Step 3: Catalog — Product List + PDP](#step-3-catalog--product-list--pdp)

If no step is provided or the step is unrecognized, print:

```
Saleor Storefront Builder

Usage: /storefront-builder <step>

Steps:
  1   Bootstrap — wire GraphQL client, codegen, Saleor API connection
  2   Design & aesthetic — color palette, typography, accent color
  3   Catalog — product list page + product detail page with variant selection

Example: /storefront-builder 1
```

---

## Step 1: Project Bootstrap

Connect an existing project to Saleor's GraphQL API with correct client separation and codegen.

### 0. Saleor instance check

Ask the user:

> "Do you have a Saleor instance ready?
> - **No** — create one at https://cloud.saleor.io/ (free tier available), then come back with the API URL.
> - **Yes** — paste your storefront/API URL and we'll get started."

Wait for the user's response before continuing. If they don't have an instance yet, stop here and let them set one up. If they provide a URL, note it for use in step 6.

### 1. Inspect the project

Read `package.json` and any framework config files present (`nuxt.config.ts`, `next.config.*`, `svelte.config.js`, `remix.config.js`, `vite.config.*`, etc.) to understand:

- Framework and version
- Package manager in use (check for lockfiles: `pnpm-lock.yaml`, `yarn.lock`, `package-lock.json`)
- Existing GraphQL setup (if any)
- Import alias conventions (e.g. `@/`, `~/`, `#`)
- Source directory layout (`src/`, `app/`, flat root)

Do not ask about any of the above — derive it from the project. Only ask if something cannot be determined and is needed to proceed.

### 2. Create AGENTS.md

If `AGENTS.md` does not already exist at the repo root, create it now. This wires Saleor-specific rules into the AI harness for all future interactions in this repo.

Check for installed skills:

```bash
ls .agent-skills/saleor-storefront/AGENTS.md 2>/dev/null && echo "STOREFRONT" || echo ""
ls .agent-skills/saleor-configurator/AGENTS.md 2>/dev/null && echo "CONFIGURATOR" || echo ""
```

Write `AGENTS.md`, including only the `@` references for skills that are present:

```markdown
# Saleor Storefront

This is a Saleor-powered storefront.

## Workflow

When running `/storefront-builder`, execute only the requested step, then stop and wait for the user to ask for the next one. Never chain steps automatically.

## Saleor rules

<!-- include if .agent-skills/saleor-storefront/ exists -->
@.agent-skills/saleor-storefront/AGENTS.md

<!-- include if .agent-skills/saleor-configurator/ exists -->
@.agent-skills/saleor-configurator/AGENTS.md
```

If `AGENTS.md` already exists, skip this step entirely — do not overwrite it.

### 3. Install GraphQL dependencies

Using the package manager detected in step 1:

```
graphql-request graphql
@graphql-codegen/cli @graphql-codegen/client-preset  (dev)
```

### 4. Create codegen config

Write a codegen config file at the project root (filename: `codegen.ts` or `codegen.js` based on project conventions). Key values to set:

- **schema**: Saleor GraphQL API URL, read from the env variable the project uses (or `SALEOR_API_URL` if none is established)
- **documents**: glob pointing to the project's GraphQL files directory, following local conventions
- **generates**: use the `client` preset with `gqlTagName: "graphql"`

Add a `codegen` script to `package.json`.

### 5. Create Saleor API clients

**Two-client pattern — this is a Saleor correctness rule, not optional:**

Write a client module in the location that matches the project's library/util conventions. Export two clients:

```
saleorClient      — anonymous, no auth headers — safe for RSC, SSG, public product queries
saleorAuthClient  — server-only, reads app token from env — NEVER use in browser bundles
```

**Why two clients matter:** passing an app token on public/cached queries leaks privileged access and can expose customer data. Anonymous queries must stay anonymous.

The auth client should only include the `Authorization` header when the token env var is set (guard with a conditional so the module doesn't throw on front-end environments where the var is absent).

### 6. Configure environment

Determine the env variable naming convention from the project (e.g. Next.js uses `NEXT_PUBLIC_*` for browser-accessible vars, Nuxt uses `NUXT_PUBLIC_*`, etc.).

Required variables:
- `[PUBLIC_PREFIX]_SALEOR_API_URL` — Saleor GraphQL endpoint
- `[PUBLIC_PREFIX]_SALEOR_CHANNEL` — default channel slug
- `SALEOR_APP_TOKEN` (no public prefix — server-side only)

Write or update the project's env file (`.env.local`, `.env`, etc.) with placeholder values and comments. Ask the user if they have a Saleor API URL and channel slug to fill in.

> **Tip — inspecting an existing store with Configurator**
> If you have access to an existing Saleor instance and are unsure what channels, categories, or products are configured, use the Configurator CLI:
>
> ```bash
> export SALEOR_URL=https://your-store.saleor.cloud/graphql/
> export SALEOR_TOKEN=YOUR_TOKEN
> pnpm dlx @saleor/configurator introspect
> ```
>
> Read the resulting `config.yml` to find exact channel slugs, published products, and category structure — use these values directly in env and queries.

### 7. Verify

If the API URL is configured, run codegen to confirm the schema is reachable:

```bash
[package-manager] codegen 2>&1 | head -20
```

If it fails with a network error, help troubleshoot (wrong URL, missing auth, etc.).

### 8. Summary

```
[✓/–] AGENTS.md: [created / already existed]
✓ Framework: [detected framework]
✓ Package manager: [pm]
✓ Deps: graphql-request, @graphql-codegen/cli, @graphql-codegen/client-preset
✓ Clients: [path] (public + authenticated)
✓ Codegen: codegen.ts
[✓/⚠] API URL: [set / not set]
[✓/⚠] Channel: [slug / placeholder]

Next: /storefront-builder 2
```

**After printing the summary, stop. Do not proceed to Step 2 unless the user explicitly asks.**

---

## Step 2: Design & Aesthetic

Define the visual identity of the storefront before writing any UI code. The output of this step is a theme module and design tokens that all future steps will import. The exact file paths and token format follow the project's existing conventions.

### 1. Inspect the project's styling setup

Read the project to determine:
- CSS framework in use (Tailwind, CSS Modules, styled-components, UnoCSS, vanilla CSS, etc.)
- Existing design token conventions (CSS custom properties, a `theme.*` file, Tailwind config, etc.)
- Where shared styles live

Do not assume Tailwind or any specific CSS approach — derive it from the project.

### 2. Ask about the aesthetic

Ask the user three questions in one message — conversational, not a form:

> "Let's define the look of your storefront. A few quick questions:
>
> 1. Do you have any references? (a brand, a URL, a screenshot — or skip)
> 2. What's the general vibe? Some starting points if helpful: minimalist light, dark luxury, bold & colorful, soft & warm, classic editorial — or describe it in your own words.
> 3. Any accent color in mind? This goes on buttons and links. A hex, a color name, or leave it to me."

If the user gives very little, ask one follow-up before proceeding.

### 3. Decide on tokens

Determine values for: background, surface, border, text primary, text secondary, accent, accent-hover, border radius, heading font, body font.

### 4. Write theme tokens

Write a theme module in a location consistent with the project's conventions. Include a comment block capturing:
- Style preset name
- Reference (if any)
- Accent rationale
- Typography choice

Wire the tokens into the project's styling system following local conventions:
- **Tailwind**: extend `tailwind.config.*` with the token values
- **CSS custom properties**: write to the project's global CSS file
- **Other**: follow what's already in use

Update the global/base CSS to apply background and text defaults.

### 5. Summary

```
✓ Style: [preset name]
✓ Accent: [color]
✓ Typography: [font choice]
✓ Theme tokens: [path]
✓ Styling system updated: [tailwind.config / globals.css / etc.]

Next: /storefront-builder 3
```

**After printing the summary, stop. Do not proceed to Step 3 unless the user explicitly asks.**

---

## Step 3: Catalog — Product List + PDP

Build a product listing page and product detail page with variant selection.

### Prerequisites check

Verify the Saleor client module exists (search for it based on what was set up in Step 1). If missing, tell the user to run `/storefront-builder 1` first.

Check for a channel slug in the project's env file. If missing and not passed as argument, ask:

> "What's your Saleor channel slug? (Saleor Dashboard → Channels, or press Enter for 'default-channel')"

Inspect the framework and routing conventions from the project to determine where to write pages and how data-fetching works (server components, `getStaticProps`, loaders, `load` functions, `asyncData`, etc.).

### 1. GraphQL queries — Saleor data contracts

Write a `products.graphql` file in the project's GraphQL documents directory.

#### ProductCard fragment

Required fields for a product listing surface:

```graphql
fragment ProductCard on Product {
  id
  name
  slug
  thumbnail {
    url
    alt
  }
  pricing {
    priceRange {
      start {
        gross {
          amount
          currency
        }
      }
    }
  }
  category {
    name
    slug
  }
}
```

**Why these fields:**
- `thumbnail` is nullable — always guard with a fallback image or placeholder
- `pricing.priceRange.start` is nullable — guard before rendering price
- `category` is nullable — guard before rendering category label

#### ProductDetails fragment

Required fields for a PDP surface:

```graphql
fragment ProductDetails on Product {
  id
  name
  slug
  description
  thumbnail {
    url
    alt
  }
  media {
    url
    alt
    type
  }
  pricing {
    priceRange {
      start {
        gross {
          amount
          currency
        }
      }
    }
  }
  category {
    name
    slug
  }
  variants {
    id
    name
    sku
    pricing {
      price {
        gross {
          amount
          currency
        }
      }
      priceUndiscounted {
        gross {
          amount
          currency
        }
      }
    }
    selectionAttributes: attributes(variantSelection: VARIANT_SELECTION) {
      attribute {
        name
        slug
      }
      values {
        name
        slug
      }
    }
    quantityAvailable
  }
}
```

**Why these fields:**
- `media` array preferred over `thumbnail` on PDP — use `thumbnail` as fallback when `media` is empty
- `variants.pricing` is nullable — guard before accessing `amount`
- `quantityAvailable` is nullable for anonymous users — treat `null` as in-stock (behave as if 1 available)
- `selectionAttributes` uses `variantSelection: VARIANT_SELECTION` filter — returns only variant-differentiating attributes (size, color, etc.), not product-level attributes

#### Queries

```graphql
query ProductList($channel: String!, $first: Int = 20, $after: String) {
  products(channel: $channel, first: $first, after: $after) {
    edges {
      node {
        ...ProductCard
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

query ProductBySlug($slug: String!, $channel: String!) {
  product(slug: $slug, channel: $channel) {
    ...ProductDetails
  }
}
```

**Channel is always required** — queries without `channel` return no pricing or availability data.

Run codegen after writing the queries.

### 2. Saleor data handling rules

Apply these rules when implementing the pages and components:

#### Description parsing

Saleor stores `description` as EditorJS JSON. Never render it raw. Parse safely:

```typescript
function extractDescriptionText(description: unknown): string {
  try {
    const parsed = typeof description === "string" ? JSON.parse(description) : description;
    return parsed?.blocks
      ?.map((b: { data?: { text?: string } }) => b.data?.text ?? "")
      .filter(Boolean)
      .join(" ") ?? "";
  } catch {
    return "";
  }
}
```

#### Price formatting

Always use `Intl.NumberFormat` with the currency from the response — never hardcode currency symbols:

```typescript
function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency }).format(amount);
}
```

Use `undefined` locale to respect the user's browser locale (or pass a locale if the project has a locale system).

#### Image handling

- On PDP: prefer `product.media[0]` over `thumbnail`; fall back to `thumbnail` if `media` is empty
- Always guard for missing images — render a neutral placeholder, not a broken `<img>` tag
- Use `alt ?? product.name` as the alt text fallback

#### Inventory / availability semantics

- `quantityAvailable === null` → treat as available (anonymous users don't see inventory)
- `quantityAvailable === 0` → out of stock — disable selection and show visual indicator (strikethrough or muted)
- `quantityAvailable > 0` → in stock

#### Variant selection UX

- Show all variants; disable (not hide) out-of-stock ones — visibility helps users understand what exists
- Use `selectionAttributes` to label variants (e.g. "Size: M", "Color: Red") when attributes are present
- If a product has only one variant and no selection attributes, skip the selector and go straight to Add to Cart
- The selected variant's `pricing.price` overrides the product-level `pricing.priceRange` — update the displayed price on selection

#### Empty / error states

- Product list with no results: show a clear message with troubleshooting hint (wrong channel slug or products not published)
- Product not found (null from `ProductBySlug`): use the framework's not-found/404 mechanism
- Pricing missing: omit price entirely rather than showing $0 or NaN

### 3. Write shared navigation

Write a nav/header component in the project's component directory following local naming conventions. The nav should use the theme tokens established in Step 2 (or sensible neutral defaults if Step 2 was skipped).

Wire the nav into the root layout / app shell following framework conventions detected from the project.

### 4. Write product list page

Write the product list page at the path that fits the project's routing conventions (e.g. `app/page.tsx`, `pages/index.tsx`, `pages/index.vue`, `src/routes/+page.svelte`, `app/routes/_index.tsx`).

Data-fetching pattern: use whatever the framework provides (async server component, `getStaticProps`/ISR, `load` function, `asyncData`, Remix loader). For SSG-capable frameworks, set a reasonable revalidation interval (e.g. 60s).

Apply all data handling rules from section 2: guard nullables, format prices correctly, show empty state.

### 5. Write PDP

Write the PDP at the path that fits routing conventions (e.g. `app/p/[slug]/page.tsx`, `pages/p/[slug].tsx`, `pages/p/[slug].vue`, `src/routes/p/[slug]/+page.svelte`).

Apply all data handling rules from section 2.

### 6. Write VariantSelector component

Write a `VariantSelector` component in the project's component directory. It must be client-interactive (use whatever interactivity primitive the framework provides — React state, Vue `ref`, Svelte store, etc.).

Behaviour:
- Shows all variants; disables out-of-stock ones (do not hide them)
- Highlights selected variant
- Updates displayed price when a variant is selected (variant `pricing.price` takes precedence)
- Add to Cart button is disabled until a variant is selected (when selection is required)
- Single-variant / no-attribute products: skip selector, show Add to Cart directly
- Add to Cart is non-functional at this step — placeholder only, note this clearly in a comment

### 7. Run and verify

Start the dev server using the project's dev command. Direct the user to the product list and a PDP URL to confirm data loads correctly.

Common issues:
- **Empty list**: wrong channel slug or products not published in that channel — suggest running `configurator introspect` to inspect the store
- **Codegen errors**: API URL not set or unreachable
- **Product not found on every slug**: channel mismatch or product unpublished in that channel

### Summary

```
✓ GraphQL queries: [path]/products.graphql
✓ Types generated
✓ Navigation: [path] (wired into root layout)
✓ Product list: [route]
✓ Product detail: [route]
✓ VariantSelector: [path]

Note: "Add to Cart" is present but non-functional — checkout is not covered by this skill

This is the last step currently available in this skill.
```

**After printing the summary, stop.**

---

## Saleor correctness rules (always apply)

These rules apply across all steps and any future storefront work:

1. **Always pass `channel`** — every product/pricing/availability query requires it; omitting it returns no data
2. **Parse `description` safely** — it is EditorJS JSON, not plain text or HTML
3. **Never expose `SALEOR_APP_TOKEN` to the browser** — use the two-client pattern; the auth client is server-side only
4. **`quantityAvailable` null = available** — anonymous users don't receive inventory counts; null means "don't block purchase"
5. **`pricing` is nullable at every level** — guard `pricing`, `pricing.price`, `pricing.priceRange`, and `gross` before accessing `amount`
6. **Use `Intl.NumberFormat` for prices** — never hardcode currency symbols or assume locale
7. **PDP media priority**: `media[0]` → `thumbnail` → placeholder
8. **Disable, don't hide, out-of-stock variants** — hiding them confuses users about what the product offers
