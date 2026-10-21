import { useId, useRef, useState } from "react";
import { getSandboxStore } from "./model.mjs";

export default function SandboxControl({ endpoint }: { endpoint: string }) {
  const id = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  function close() { dialog.current?.close(); }

  return <div className="sandbox-control">
    <button ref={trigger} type="button" className={`sandbox-trigger ${endpoint ? "sandbox-settings-trigger" : "sandbox-run-setup"}`} aria-haspopup="dialog"
      aria-label={endpoint ? "Playground settings" : "Run — configure playground first"}
      title={endpoint ? `Playground settings · ${new URL(endpoint).host}` : "Configure your playground to run this example"} onClick={() => {
      setDraft(endpoint); setError(""); setNotice("");
      dialog.current?.showModal();
      input.current?.focus();
    }}>
      {endpoint ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
        <path d="M4 7h16M4 17h16" /><circle cx="9" cy="7" r="3" fill="var(--blume-background)" /><circle cx="15" cy="17" r="3" fill="var(--blume-background)" />
      </svg> : <><svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="m4 2 9 6-9 6z" /></svg>Run</>}

    </button>
    <dialog ref={dialog} className="playground-settings" aria-labelledby={`${id}-title`} aria-describedby={`${id}-description`}
      onClick={event => { if (event.target === dialog.current) close(); }}
      onClose={() => { trigger.current?.focus(); }}>
      <form onSubmit={event => {
        event.preventDefault();
        try {
          const persisted = getSandboxStore().save(draft);
          setNotice(persisted ? "" : "Browser storage is unavailable. Settings are saved for this tab only.");
          close();
        } catch (error) { setError(error instanceof Error ? error.message : "Check your settings."); }
      }}>
        <div className="playground-settings-heading"><h2 id={`${id}-title`}>Saleor Playground</h2><button type="button" className="playground-settings-close" aria-label="Close playground settings" onClick={close}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
        </button></div>
        <p id={`${id}-description`} className="example-hint">Configure once to run examples throughout the docs.</p>
        <label htmlFor={`${id}-endpoint`}>Saleor API URL</label>
        <input ref={input} id={`${id}-endpoint`} type="text" inputMode="url" autoCapitalize="none" spellCheck={false}
          autoComplete="off" placeholder="your-store.saleor.cloud" value={draft}
          aria-describedby={`${id}-url-hint`} onChange={event => { setDraft(event.target.value); setError(""); }} />
        <p id={`${id}-url-hint`} className="example-hint">Paste your store URL or /graphql/ endpoint. <a href="/quickstart/cloud">Create a sandbox</a></p>
        <p className="example-hint">Only your API URL is saved in this browser. Requests run anonymously, without tokens or cookies.</p>
        {error && <p role="alert" className="example-error">{error}</p>}
        <div className="playground-settings-actions">
          {endpoint && <button type="button" className="playground-settings-clear" onClick={() => { getSandboxStore().clear(); setNotice(""); close(); }}>Clear settings</button>}
          <button type="submit" className="example-primary">Save settings</button>
        </div>
      </form>
    </dialog>
    {notice && <p className="example-hint" role="status">{notice}</p>}
  </div>;
}
