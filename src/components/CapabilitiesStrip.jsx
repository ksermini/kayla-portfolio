export default function CapabilitiesStrip() {
  const caps = [
    "RAG",
    "LangGraph-style flows",
    "Prompt/RBAC",
    "Vector Stores",
    "LLM Ops",
    "Synthetic Data (SDV)",
    "CI/CD (Azure DevOps)",
    "Observability & Audit",
    "FastAPI",
    "React/Tailwind",
    "Postgres",
  ];
  return (
    <div className="mt-10 flex flex-wrap gap-2">
      {caps.map((c) => (
        <span key={c} className="rounded-full border px-3 py-1 text-xs md:text-sm">
          {c}
        </span>
      ))}
    </div>
  );
}
