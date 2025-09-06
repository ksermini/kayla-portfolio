import { resolve } from "../app/di";
import { useMemo, useState } from "react";

export default function useSdv(provider = "local") {
  const sdv = useMemo(() => resolve(`sdv:${provider}`), [provider]);
  const [state, setState] = useState({ loading: false, preview: null, error: null });

  async function synthesize(schemaName, rows = 100, opts) {
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const { preview, meta } = await sdv.synthesize(schemaName, rows, opts);
      setState({ loading: false, preview: { rows: preview, meta }, error: null });
    } catch (e) {
      setState({ loading: false, preview: null, error: e });
    }
  }

  return { ...state, synthesize, provider: sdv.name() };
}
