---
api_reference: true
id: circuit-breaker-state-enum
title: CircuitBreakerStateEnum
---

Enum determining the state of a circuit breaker.

```graphql
enum CircuitBreakerStateEnum {
  CLOSED
  HALF_OPEN
  OPEN
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CircuitBreakerStateEnum</code>.<code class="gqlmd-mdx-entity-name">CLOSED</code></span>](#closed) \{#closed\}

The breaker is conducting (requests are passing through).

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CircuitBreakerStateEnum</code>.<code class="gqlmd-mdx-entity-name">HALF_OPEN</code></span>](#half-open) \{#half-open\}

The breaker is in a trial period (to close or open). Note that unlike classic breaker patterns, this is not a state where we are throttling the number of requests, it's a state similar to CLOSED but with different thresholds.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CircuitBreakerStateEnum</code>.<code class="gqlmd-mdx-entity-name">OPEN</code></span>](#open) \{#open\}

The breaker is tripped (no requests are passing). Breaker will enter half-open state after cooldown period.

### Member Of

[`App`](/api-reference/apps/objects/app) <mark class="gqlmd-mdx-badge">object</mark>
