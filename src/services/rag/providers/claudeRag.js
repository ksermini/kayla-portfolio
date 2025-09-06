/** @returns {import('../RagService').RagService} */
export default function claudeRag({ fetchClient, baseUrl }) {
  return {
    name: () => "claude",
    async ask(q, opts = {}) {
      return await fetchClient(`${baseUrl}/claude/rag`, {
        method: "POST",
        body: { q, ...opts },
      });
    },
  };
}
