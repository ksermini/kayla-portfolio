/** @returns {import('../SdvService').SdvService} */
export default function sdvLocal() {
  return {
    name: () => "sdv-local",
    async synthesize(schemaName, rows, opts = {}) {
      // Fake sample; replace with real local call
      const preview = Array.from({ length: Math.min(rows, 5) }).map((_, i) => ({
        id: i + 1,
        amount: Math.round((Math.random() * 1000 + 50) * 100) / 100,
        label: `${schemaName}-sample`,
      }));
      return { preview, meta: { rowsRequested: rows, options: opts } };
    },
  };
}
