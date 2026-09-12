import React from 'react';
export default function ProgressSaveStatus({ status, error, retry }) {
  return <div className="my-3 text-xs" role="status" aria-live="polite">
    {status === 'saving' && <span className="text-muted-foreground">Saving progress…</span>}
    {status === 'saved' && <span className="text-muted-foreground">Progress saved · You can leave and resume later.</span>}
    {error && <span className="text-destructive">{error} <button type="button" onClick={retry} className="ml-2 underline">Retry save</button></span>}
  </div>;
}