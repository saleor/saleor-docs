export const examples = {
  "products-filtered": {
    title: "Fetch products",
    description: "Filter products by price in your channel. Replace default-channel in Variables with a channel slug from your store.",
    query: `query ProductsByPrice($channel: String!) {
  products(
    first: 10
    channel: $channel
    where: { minimalPrice: { range: { gte: 10, lte: 100 } } }
  ) {
    edges {
      node {
        id
        name
        category { id name }
      }
    }
  }
}`,
    variables: { channel: "default-channel" },
  },
  products: {
    title: "Find products in your sandbox",
    description: "Use your channel slug to fetch products and their variant IDs. No token is needed for a public channel.",
    query: `query Products($channel: String!) {
  products(first: 5, channel: $channel) {
    edges {
      node {
        id
        name
        variants { id name }
      }
    }
  }
}`,
    variables: { channel: "default-channel" },
  },
  shop: {
    title: "Read your shop name",
    description: "A small public query to check your connection. No token is needed.",
    query: `query ShopName {
  shop { name }
}`,
    variables: {},
  },
  "checkout-create": {
    title: "Create a checkout in your sandbox",
    description: "Replace the variant ID with one from your sandbox and use its channel slug. This creates a checkout; it does not place an order or charge a payment.",
    query: `mutation CreateCheckout($input: CheckoutCreateInput!) {
  checkoutCreate(input: $input) {
    checkout { id }
    errors { field code message }
  }
}`,
    variables: { input: { channel: "default-channel", lines: [{ variantId: "REPLACE_WITH_YOUR_VARIANT_ID", quantity: 1 }] } },
  },
  "walkthrough-product": {
    title: "Get specific product",
    description: "Use the first product returned by Fetch products. You can edit its ID and channel in Variables.",
    query: `query ProductDetails($id: ID!, $channel: String!) {
  product(id: $id, channel: $channel) {
    id
    name
    description
    seoTitle
    seoDescription
    media { id alt url }
    variants { id name }
  }
}`,
    variables: { id: "REPLACE_WITH_YOUR_PRODUCT_ID", channel: "default-channel" },
  },
  "walkthrough-checkout": {
    title: "Create a checkout",
    description: "Use the first variant returned by Get specific product. This creates a checkout without placing an order or charging a payment.",
    query: `mutation WalkthroughCreateCheckout($input: CheckoutCreateInput!) {
  checkoutCreate(input: $input) {
    checkout {
      id
      lines { id variant { name } }
    }
    errors { field code message }
  }
}`,
    variables: { input: { channel: "default-channel", lines: [{ variantId: "REPLACE_WITH_YOUR_VARIANT_ID", quantity: 1 }] } },
  },
  "walkthrough-update": {
    title: "Update checkout",
    description: "Add shipping and billing addresses and an email to the created checkout. Edit the sample address and email in Variables for your store.",
    query: `mutation UpdateCheckout($checkoutId: ID!, $address: AddressInput!, $email: String!) {
  checkoutShippingAddressUpdate(checkoutId: $checkoutId, shippingAddress: $address) {
    errors { field code message }
  }
  checkoutBillingAddressUpdate(checkoutId: $checkoutId, billingAddress: $address) {
    errors { field code message }
  }
  checkoutEmailUpdate(checkoutId: $checkoutId, email: $email) {
    checkout { shippingMethods { id name } }
    errors { field code message }
  }
}`,
    variables: {
      checkoutId: "REPLACE_WITH_YOUR_CHECKOUT_ID",
      address: { firstName: "First", lastName: "Last", streetAddress1: "8066 Madison St.", city: "Brooklyn", postalCode: "11237", country: "US", countryArea: "NY" },
      email: "reader@example.com",
    },
  },
  "walkthrough-delivery": {
    title: "Select shipping method",
    description: "Use the first shipping method returned by Update checkout. You can choose a different returned ID in Variables.",
    query: `mutation SelectShippingMethod($checkoutId: ID!, $deliveryMethodId: ID!) {
  checkoutDeliveryMethodUpdate(id: $checkoutId, deliveryMethodId: $deliveryMethodId) {
    checkout { id }
    errors { field code message }
  }
}`,
    variables: { checkoutId: "REPLACE_WITH_YOUR_CHECKOUT_ID", deliveryMethodId: "REPLACE_WITH_YOUR_SHIPPING_METHOD_ID" },
  },
};

export function exampleMarkdown(id) {
  const example = examples[id];
  if (!example) throw new Error(`Unknown GraphQL example: ${id}`);
  return `\n**${example.title}**\n\n${example.description}\n\nSend to your sandbox's /graphql/ endpoint.\n\n\`\`\`graphql\n${example.query}\n\`\`\`\n\n\`\`\`json Variables\n${JSON.stringify(example.variables, null, 2)}\n\`\`\`\n`;
}
