export function pageMetadata(data) {
  const title = `${data.seo?.title ?? data.title} | Saleor Commerce Documentation`;
  const description = data.seo?.description ?? data.description ?? "";
  return { browserTitle: title, description, openGraphTitle: title, openGraphDescription: description, heading: data.title };
}
