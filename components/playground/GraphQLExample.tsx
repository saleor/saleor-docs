import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { examples } from "./examples.mjs";
import { emptySettings, executeRequest, getSandboxStore, operationType, prepareRequest } from "./model.mjs";
import { emptyProgress, emptyStep, getWalkthroughStore, walkthroughInputs } from "./walkthrough.mjs";
import SandboxControl from "./SandboxControl";
import CodeEditor from "./CodeEditor";
import "./playground.css";

const subscribe = (listener: () => void) => getSandboxStore().subscribe(listener);
const snapshot = () => getSandboxStore().getSettingsSnapshot();
const serverSnapshot = () => emptySettings;
type Result = { text: string; status: number; hasErrors: boolean; endpoint: string; data?: Record<string, unknown> };
const subscribeEmpty = () => () => {};
const emptyProgressSnapshot = () => emptyProgress;

export default function GraphQLExample({ exampleId, walkthrough }: { exampleId: keyof typeof examples; walkthrough?: string }) {
  const example = examples[exampleId];
  if (!example) throw new Error(`Unknown GraphQL example: ${exampleId}`);
  const id = useId();
  const { endpoint } = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const walkthroughStore = getWalkthroughStore(walkthrough);
  const progress = useSyncExternalStore(walkthroughStore?.subscribe || subscribeEmpty, walkthroughStore?.getSnapshot || emptyProgressSnapshot, emptyProgressSnapshot);
  const step = progress[exampleId] || emptyStep;
  const inputs = walkthroughStore ? walkthroughInputs(exampleId, progress) : { variables: example.variables, blocked: "" };
  const defaultVariables = JSON.stringify(inputs.variables, null, 2);
  const [query, setQuery] = useState(example.query);
  const [variables, setVariables] = useState(JSON.stringify(example.variables, null, 2));
  const [tab, setTab] = useState("Query");
  const [busy, setBusy] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [copied, setCopied] = useState(false);
  const request = useRef<AbortController | null>(null);
  const generation = useRef(0);
  const editorRows = Math.min(16, Math.max(query.split("\n").length, variables.split("\n").length));
  let operation = "query";
  try { operation = operationType(query); } catch { /* Explain syntax errors when Run is pressed. */ }

  const disabledReason = busy ? "Wait for this request to finish." : inputs.blocked;

  useEffect(() => walkthroughStore?.attach(), [walkthroughStore]);
  useEffect(() => {
    // A newly visible island initially hydrates with the empty server snapshot.
    // Read the live settings so it cannot reset an already running walkthrough.
    walkthroughStore?.setEndpoint(getSandboxStore().getSettingsSnapshot().endpoint);
  }, [walkthroughStore, endpoint]);

  useEffect(() => {
    generation.current++;
    request.current?.abort();
    setResult(null); setError(""); setBusy(false);
    if (walkthroughStore) { setQuery(example.query); setVariables(defaultVariables); }
    return () => { generation.current++; request.current?.abort(); };
  }, [endpoint, walkthroughStore, step.version, defaultVariables]);

  async function run() {
    if (inputs.blocked || busy) return;
    setError(""); setResult(null);
    let prepared;
    try { prepared = prepareRequest({ endpoint, query, variables }); }
    catch (error) { setError(error instanceof Error ? error.message : "Check the example."); return; }
    const ticket = walkthroughStore?.begin(exampleId);
    const controller = new AbortController();
    request.current = controller;
    const current = ++generation.current;
    setBusy(true);
    const timeout = setTimeout(() => controller.abort(new Error("Request timed out after 20 seconds. Try again or check your sandbox.")), 20_000);
    try {
      const response = await executeRequest(prepared, controller.signal);
      if (current === generation.current) {
        setResult({ ...response, endpoint: prepared.endpoint });
        if (walkthroughStore) setError(walkthroughStore.complete(exampleId, ticket, response, prepared.variables) || "");
      }
    } catch (error) {
      if (current !== generation.current) return;
      setError(controller.signal.aborted ? controller.signal.reason?.message || "Request canceled." :
        error instanceof TypeError ? "Could not reach your sandbox. Check the URL, your connection, and whether the API allows requests from this docs site (CORS)." :
        error instanceof Error ? error.message : "The request failed. Try again.");
    } finally {
      clearTimeout(timeout);
      if (current === generation.current) setBusy(false);
    }
  }

  return <section className="graphql-example not-prose" aria-labelledby={`${id}-title`}>
    <div className="example-intro">
      <div className="example-intro-copy">
        <div className="example-heading"><p id={`${id}-title`} className="example-title">{example.title}</p></div>
        <p>{example.description}</p>
      </div>
      <div className="example-actions">
        {endpoint && <span className="example-run-control" tabIndex={disabledReason ? 0 : undefined}
          role={disabledReason ? "group" : undefined} aria-label={disabledReason ? "Run unavailable" : undefined}
          aria-describedby={disabledReason ? `${id}-run-tooltip` : undefined}
          onMouseEnter={() => setTooltipDismissed(false)} onFocus={() => setTooltipDismissed(false)}
          onKeyDown={event => { if (event.key === "Escape") setTooltipDismissed(true); }}>
          <button type="button" className="example-primary example-run-button" aria-busy={busy}
            aria-describedby={disabledReason ? `${id}-run-tooltip` : undefined}
            disabled={Boolean(disabledReason)} onClick={run}>{busy ? "Running…" : "Run"}</button>
          {disabledReason && <span id={`${id}-run-tooltip`} role="tooltip" className="example-run-tooltip" data-dismissed={tooltipDismissed}>{disabledReason}</span>}
        </span>}
        <SandboxControl endpoint={endpoint} />
      </div>
    </div>
    {endpoint && inputs.blocked && <p id={`${id}-prerequisite`} className="example-hint example-prerequisite" role="status">{inputs.blocked}</p>}
    <div className="example-editor">
      <div className="example-toolbar">
        <div role="tablist" aria-label="Request editor">
          {["Query", "Variables"].map((name, index) => <button key={name} type="button" role="tab" id={`${id}-${name}-tab`}
            aria-selected={tab === name} aria-controls={`${id}-${name}-panel`} tabIndex={tab === name ? 0 : -1}
            onClick={() => { setTab(name); setCopied(false); }} onKeyDown={event => {
              if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
                event.preventDefault(); const next = event.key === "Home" ? "Query" : event.key === "End" ? "Variables" : index ? "Query" : "Variables";
                setTab(next); setCopied(false); document.getElementById(`${id}-${next}-tab`)?.focus();
              }
            }}>{name}</button>)}
        </div>
        {(query !== example.query || variables !== defaultVariables) && <button type="button" disabled={busy} title="Restore the query and current inferred variables" onClick={() => { walkthroughStore?.invalidate(exampleId); setQuery(example.query); setVariables(defaultVariables); setResult(null); setError(""); setCopied(false); }}>Reset example</button>}
      </div>
      <div className="example-code">
        <button type="button" className="example-copy" title={copied ? "Copied" : `Copy ${tab.toLowerCase()}`} aria-label={copied ? "Copied" : `Copy ${tab.toLowerCase()}`} onClick={async () => {
          try { await navigator.clipboard.writeText(tab === "Query" ? query : variables); setCopied(true); }
          catch { setError("Could not copy. Select and copy the text in the editor."); }
        }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{copied ? <path d="m5 12 4 4L19 6" /> : <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4" /></>}</svg><span className="example-sr-only" role="status">{copied ? "Copied" : "Copy"}</span></button>
      <div id={`${id}-Query-panel`} role="tabpanel" aria-labelledby={`${id}-Query-tab`} hidden={tab !== "Query"}>
        <CodeEditor label="GraphQL query" language="graphql" value={query} rows={editorRows} disabled={busy}
          onChange={value => { walkthroughStore?.invalidate(exampleId); setQuery(value); setCopied(false); }} />
      </div>
      <div id={`${id}-Variables-panel`} role="tabpanel" aria-labelledby={`${id}-Variables-tab`} hidden={tab !== "Variables"}>
        <CodeEditor label="GraphQL variables" language="json" value={variables} rows={editorRows} disabled={busy}
          onChange={value => { walkthroughStore?.invalidate(exampleId); setVariables(value); setCopied(false); }} />
      </div>
      </div>
    </div>
    {(endpoint && operation === "mutation" || error) && <div className="example-run">
      {error && <p role="alert" className="example-error">{error}</p>}
    </div>}
    {result && <div className="example-response">
      <p className="example-label example-response-status" role="status">
        <span>Response · HTTP {result.status}{result.hasErrors ? " · GraphQL request failed" : ""}</span>
        <a className="example-response-endpoint" href={result.endpoint} target="_blank" rel="noopener noreferrer">{result.endpoint}</a>
      </p>
      <pre tabIndex={0} aria-label="GraphQL response"><code>{result.text}</code></pre>
    </div>}
    <noscript>JavaScript is needed to run examples here. Copy the query into the GraphQL playground of your sandbox instead.</noscript>
  </section>;
}
