import { resolve } from "../app/di";
import { useMemo, useState } from "react";

export default function useRag(provider = "openai") {
  const rag = useMemo(() => resolve(`rag:${provider}`), [provider]);
  const [state, setState] = useState({ loading: false, data: null, error: null });

  async function ask(q, opts) {
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const data = await rag.ask(q, opts);
      setState({ loading: false, data, error: null });
    } catch (e) {
      setState({ loading: false, data: null, error: e });
    }
  }

  return { ...state, ask, provider: rag.name() };
}
