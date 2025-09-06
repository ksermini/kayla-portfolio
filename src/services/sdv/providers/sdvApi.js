/** @returns {import('../SdvService').SdvService} */
export default function sdvApi({ fetchClient, baseUrl }) {
  return {
    name: () => "sdv-api",
    async synthesize(schemaName, rows, opts = {}) {
      return await fetchClient(`${baseUrl}/sdv/synthesize`, {
        method: "POST",
        body: { schema: schemaName, rows, ...opts },
      });
    },
  };
}
