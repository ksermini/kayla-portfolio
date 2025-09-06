export function createSdvService(mode, { fetchClient, baseUrl }) {
  const id = mode;
  const displayName = mode === "api" ? "Remote SDV API"
                    : mode === "local" ? "Local SDV"
                    : "SDV";

  const path = "/sdv/synthesize";

  return {
    id,
    name: () => displayName,           // <-- add this
    mode,
    async synthesize({ schema = "demo", rows = 5 }) {
      if (!baseUrl) {
        return {
          preview: Array.from({ length: rows }).map((_, i) => ({
            id: i + 1,
            label: `${schema}-sample-${i + 1}`,
            amount: Math.round(Math.random() * 1000),
          })),
          meta: { rowsRequested: rows, schema },
        };
      }
      return fetchClient.post(`${baseUrl}${path}`, { schema, rows });
    },
  };
}
