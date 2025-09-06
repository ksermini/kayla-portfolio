export const INSIGHTS = [
  {
    title: "Model Context Protocol (MCP)",
    summary:
      "Open standard for connecting AI models to tools, data, and systems via a consistent protocol. Useful for secure, uniform agent-to-app integrations.",
    citations: [
      {
        title: "Anthropic: Model Context Protocol (announcement)",
        publisher: "Anthropic",
        url: "https://www.anthropic.com/news/model-context-protocol",
      },
      {
        title: "Model Context Protocol (overview)",
        publisher: "GitHub / community resources",
        url: "https://github.com/modelcontextprotocol",
      },
    ],
    applications: [
      "Run FinRAG as an MCP server to expose retrieval and governance to any MCP-aware client.",
      "Layer RBAC, logging, and rate-limiting on the server for enterprise controls.",
    ],
  },
  {
    title: "Retrieval-Augmented Generation (RAG)",
    summary:
      "Grounds LLM outputs in retrieved domain knowledge, improving factuality and control. Foundation for FinRAG’s architecture.",
    citations: [
      {
        title: "RAG: Retrieval-Augmented Generation",
        publisher: "Lewis et al., 2020",
        url: "https://arxiv.org/abs/2005.11401",
      },
    ],
    applications: [
      "Group-aware prompts + caching for lower token spend and faster responses.",
      "Admin observability panel to monitor latency, cache hits, and usage.",
    ],
  },
  {
    title: "Synthetic Data (Gaussian Copula)",
    summary:
      "Statistical synthesis preserves joint distributions for realistic, privacy-protecting datasets—ideal for UAT in regulated environments.",
    citations: [
      {
        title: "The Synthetic Data Vault",
        publisher: "Patki et al., 2016",
        url: "https://dai.lids.mit.edu/wp-content/uploads/2018/03/SDV.pdf",
      },
    ],
    applications: [
      "Automate test-data generation for new sources via config presets.",
      "Reduce reliance on masked production data; accelerate QA.",
    ],
  },
];
