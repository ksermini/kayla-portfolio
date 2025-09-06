import { useState } from "react";
import useRag from "../hooks/useRag";

export default function RagAskBox({ provider = "openai" }) {
  const [q, setQ] = useState("");
  const { loading, data, error, ask } = useRag(provider);

  return (
    <div className="space-y-3">
      <input
        className="border px-3 py-2 w-full"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={`Ask (${provider})…`}
      />
      <button className="border px-3 py-2" onClick={() => ask(q)} disabled={loading || !q}>
        {loading ? "Thinking…" : "Ask"}
      </button>
      {error && <div className="text-red-600 text-sm">{String(error.message || error)}</div>}
      {data && (
        <div className="mt-2">
          <div className="font-medium">Answer</div>
          <p className="mt-1">{data.answer}</p>
          {Array.isArray(data.citations) && data.citations.length ? (
            <ul className="mt-2 text-xs list-disc pl-5">
              {data.citations.map((c, i) => (
                <li key={i}>{typeof c === "string" ? c : JSON.stringify(c)}</li>
              ))}
            </ul>
          ) : null}
        </div>
      )}
    </div>
  );
}
