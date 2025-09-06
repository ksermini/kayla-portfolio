const toJson = async (resp) => {
  if (!resp.ok) {
    const txt = await resp.text().catch(() => "");
    throw new Error(`HTTP ${resp.status} ${resp.statusText} ${txt}`);
  }
  return resp.json();
};

const fetchClient = {
  async get(url) {
    return toJson(await fetch(url, { credentials: "omit" }));
  },
  async post(url, body) {
    return toJson(
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body ?? {}),
        credentials: "omit",
      })
    );
  },
};

export default fetchClient;
