export function createRagService(provider, { fetchClient, baseUrl }) {
  const id = provider;
  const displayName =
    provider === "claude" ? "Anthropic Claude"
    : provider === "openai" ? "OpenAI"
    : "RAG";

  const path = provider === "claude" ? "/claude/rag" : "/openai/rag";

  return {
    id,
    name: () => displayName,           // <-- add this
    provider,
    async ask(q) {
      if (!baseUrl) {
        return { answer: `[mock ${displayName}] ${q}`, citations: [] };
      }
      return fetchClient.post(`${baseUrl}${path}`, { q });
    },
  };
}
