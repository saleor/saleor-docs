import { parse, getOperationAST } from "graphql";

export function normalizeEndpoint(value) {
  const input = value.trim();
  if (!input) throw new Error("Enter your sandbox URL.");
  let url;
  try { url = new URL(input.includes("://") ? input : `https://${input}`); }
  catch { throw new Error("Enter a valid sandbox URL."); }
  const local = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
  if (url.protocol !== "https:" && !(local && url.protocol === "http:"))
    throw new Error("Use HTTPS, or HTTP for localhost.");
  if (url.username || url.password || url.search || url.hash)
    throw new Error("Use the sandbox URL without credentials, query parameters, or a fragment.");
  const pathname = url.pathname.replace(/\/+$/, "");
  if (pathname && !pathname.endsWith("/graphql"))
    throw new Error("Paste the sandbox origin or its /graphql/ endpoint, not the Dashboard URL.");
  url.pathname = pathname ? `${pathname}/` : "/graphql/";
  return url.href;
}

export function operationType(query) {
  const document = parse(query);
  const operation = getOperationAST(document);
  if (!operation) throw new Error("Run one named or unnamed operation at a time.");
  if (operation.operation === "subscription") throw new Error("Subscriptions are not supported by this example runner.");
  return operation.operation;
}

export function prepareRequest({ endpoint, query, variables }) {
  const normalized = normalizeEndpoint(endpoint);
  const operation = operationType(query);
  let values;
  try { values = JSON.parse(variables || "{}"); }
  catch { throw new Error("Variables must be valid JSON."); }
  if (!values || typeof values !== "object" || Array.isArray(values))
    throw new Error("Variables must be a JSON object, for example {}.");
  return { endpoint: normalized, query, variables: values, operation };
}

export async function executeRequest(request, signal, fetcher = fetch) {
  const response = await fetcher(request.endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: request.query, variables: request.variables }),
    credentials: "omit",
    referrerPolicy: "no-referrer",
    redirect: "error",
    signal,
  });
  // Keep a mistaken large query from freezing the docs tab.
  const reader = response.body?.getReader();
  const decoder = new TextDecoder();
  let bytes = 0, text = "";
  if (reader) {
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        bytes += value.byteLength;
        if (bytes > 2_000_000) {
          await reader.cancel();
          throw new Error("Response is too large. Request fewer fields or a smaller page of results.");
        }
        text += decoder.decode(value, { stream: true });
      }
      text += decoder.decode();
    } finally { reader.releaseLock(); }
  }
  let data;
  try { data = JSON.parse(text); }
  catch { throw new Error(`The endpoint returned HTTP ${response.status}, but not GraphQL JSON. Check the sandbox URL.`); }
  if (!data || typeof data !== "object" || Array.isArray(data) || !("data" in data || "errors" in data))
    throw new Error("The endpoint did not return a GraphQL response. Check the sandbox URL.");
  return { text: JSON.stringify(data, null, 2), data: data.data, status: response.status,
    hasErrors: !response.ok || Boolean(data.errors?.length) || Object.values(data.data || {}).some(value => value?.errors?.length > 0) };
}

const legacyStorageKey = "saleor-docs:sandbox-endpoint:v1";
const storageKey = "saleor-docs:playground:v2";
export const emptySettings = Object.freeze({ endpoint: "" });
export function createSandboxStore(storage, events) {
  let settings = emptySettings;
  const listeners = new Set();
  function read() {
    let saved;
    try { saved = storage?.getItem(storageKey);
      if (!saved) { const legacy = storage?.getItem(legacyStorageKey); if (legacy) saved = JSON.stringify({ endpoint: legacy }); }
    }
    catch { return; /* Storage can be blocked; the in-memory value still works. */ }
    try {
      const value = saved ? JSON.parse(saved) : null;
      const endpoint = value ? normalizeEndpoint(value.endpoint) : "";
      if (settings.endpoint !== endpoint) settings = { endpoint };
      // Migrate old saved settings without retaining or restoring credentials.
      if (value && "token" in value) {
        try { storage?.setItem(storageKey, JSON.stringify({ endpoint })); }
        catch { try { storage?.removeItem(storageKey); } catch { /* Storage is unavailable. */ } }
      }
    } catch {
      settings = emptySettings;
      try { storage?.removeItem(storageKey); } catch { /* Storage is unavailable. */ }
    }
  }
  read();
  const notify = () => listeners.forEach(listener => listener());
  events?.addEventListener("storage", event => {
    if (event.key === undefined || event.key === null || event.key === storageKey || event.key === legacyStorageKey) { read(); notify(); }
  });
  return {
    getSnapshot: () => settings.endpoint,
    getSettingsSnapshot: () => settings,
    subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); },
    save(value) {
      const endpoint = normalizeEndpoint(value);
      settings = { endpoint };
      let persisted = false;
      try { if (storage) { storage.setItem(storageKey, JSON.stringify(settings)); storage.removeItem(legacyStorageKey); persisted = true; } } catch { /* Tab-only fallback. */ }
      notify();
      return persisted;
    },
    clear() {
      settings = emptySettings;
      try { storage?.removeItem(storageKey); storage?.removeItem(legacyStorageKey); } catch { /* Tab-only fallback. */ }
      notify();
    },
  };
}

let browserStore;
export function getSandboxStore() {
  if (!browserStore) {
    let storage;
    try { storage = window.localStorage; } catch { /* Private browsing policy. */ }
    browserStore = createSandboxStore(storage, window);
  }
  return browserStore;
}
