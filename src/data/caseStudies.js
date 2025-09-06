export const CASE_STUDIES = [
  {
    slug: "finrag",
    title: "FinRAG Platform",
    tagline: "RAG with admin observability and cost controls",
    problem:
      "Analysts needed compliant, accurate answers across siloed documents while leadership needed clear cost/latency visibility.",
    approach: [
      "Role-aware prompts with group-level templates and RBAC.",
      "Vector retrieval with caching and guardrails; LangGraph-style state flows for traceability.",
      "Admin Portal surfaces latency, cache hit rate, and token spend.",
    ],
    stack: ["FastAPI", "Postgres", "ChromaDB", "React/Tailwind"],
    outcomes: [
      "60–80% faster doc Q&A in internal tests.",
      "Reduced token spend via caching and prompt standardization.",
      "Operational transparency: latency/cost/health surfaced in real time.",
    ],
    links: [{ label: "View Code (FinRAG)", href: "https://github.com/ksermini/finrag_platform" }],
    citations: [
      {
        title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP",
        publisher: "Lewis et al., 2020",
        url: "https://arxiv.org/abs/2005.11401",
      },
      {
        title: "LangGraph (agentic state graphs) – docs",
        publisher: "LangChain/LangGraph",
        url: "https://langchain-ai.github.io/langgraph/",
      },
    ],
    featured: true,
  },
  {
    slug: "etl-rearchitecture",
    title: "ETL Re-Architecture (Low-code/Metadata-driven)",
    tagline: "YAML-driven factories, full auditability, anomaly hooks",
    problem:
      "Legacy SSIS pipelines slowed onboarding and limited auditability across Financial Crimes Compliance workloads.",
    approach: [
      "Replaced SSIS with Python factories generated from YAML configs.",
      "Embedded operational metadata, micro/high-level audit trails, and SLA monitors.",
      "Interfaces to plug in anomaly detection and synthetic data where needed.",
    ],
    stack: ["Python", "YAML", "Azure DevOps", "Postgres"],
    outcomes: [
      "80% faster source onboarding (e.g., Zelle, Venmo, PayPal, 314(a)).",
      "SLA violations down ~30% via automated checks and rollback paths.",
      "Full lineage and compliance traceability for audit.",
    ],
    links: [],
    citations: [
      {
        title: "The Dataflow Model (event-driven data processing)",
        publisher: "Google Cloud (concepts)",
        url: "https://cloud.google.com/dataflow/docs/concepts",
      },
    ],
  },
  {
    slug: "synthetic-data-generator",
    title: "Synthetic Data Generator",
    tagline: "ML-based data synthesis for safe, realistic UAT",
    problem:
      "Lower environments lacked realistic datasets without exposing sensitive information, slowing UAT and QA.",
    approach: [
      "Implemented SDV models (Gaussian Copula) with schema presets.",
      "Wrapped in a Streamlit UI and config-driven CLI.",
      "Integrated directly into the low-code ETL pipeline for automatic test-data provisioning.",
    ],
    stack: ["Python", "SDV", "Streamlit"],
    outcomes: [
      "Eliminated manual test-data bottlenecks.",
      "Accelerated UAT while protecting PII.",
      "Pluggable presets allow quick onboarding of new sources.",
    ],
    links: [],
    citations: [
      {
        title: "The Synthetic Data Vault",
        publisher: "Patki, Wedge, Veeramachaneni (MIT), 2016",
        url: "https://dai.lids.mit.edu/wp-content/uploads/2018/03/SDV.pdf",
      },
    ],
  },
  {
    slug: "momentum-engine",
    title: "Momentum Engine (ML)",
    tagline: "Feature-rich signals + orchestrated training",
    problem:
      "Needed a reproducible environment to explore short-term momentum signals with clear observability.",
    approach: [
      "Feature engineering (EMA, ATR, Bollinger Bands, ADX, ROC) and HGBoost-style classifier.",
      "Airflow DAGs orchestrate data downloads and model training/evaluation.",
      "Experiment logging and dashboards for iteration.",
    ],
    stack: ["Python", "pandas/numpy", "scikit-learn", "Airflow"],
    outcomes: [
      "Reproducible experiments with tracked latency and training cycles.",
      "Feature importance guides iteration and ablation.",
      "Clear path to cost/latency-aware productionization.",
    ],
    links: [],
    citations: [
      {
        title: "Bollinger on Bollinger Bands",
        publisher: "McGraw-Hill, 2001 (conceptual reference)",
        url: "https://www.mheducation.com/",
      },
    ],
  },
];
