/** @returns {import('../RagService').RagService} */
export default function openaiRag({ fetchClient, baseUrl }) {
  return {
    name: () => "openai",
    async ask(q, opts = {}) {
      // Example endpoint; adjust to your backend
      return await fetchClient(`${baseUrl}/openai/rag`, {
        method: "POST",
        body: { q, ...opts },
      });
    },
  };
}
