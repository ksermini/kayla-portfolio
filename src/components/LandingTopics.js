import React from "react";

export default function LandingTopics() {
  const topics = [
    {
      title: "AI Application Blueprint",
      blurb:
        "How I design AI systems end-to-end: from the business problem to domains, data flows, evaluation, and human-in-the-loop guardrails.",
      tags: ["Architecture", "AI Systems", "Human-in-the-Loop"],
    },
    {
      title: "Domain-Driven Architecture",
      blurb:
        "I map real business language into software boundaries. Clear domains and bounded contexts prevent chaotic data and random AI endpoints.",
      tags: ["DDD", "Bounded Contexts", "Ubiquitous Language"],
    },
    {
      title: "Root-Cause First, Not Model First",
      blurb:
        "Most AI issues aren’t model failures — they’re data, workflow, or ownership failures. I fix the foundation before layering AI on top.",
      tags: ["Data Quality", "Process Design", "Observability"],
    },
    {
      title: "DevOps & Standards for AI",
      blurb:
        "Before building AI features, I standardize environments, CI/CD, versioning, and rollouts. Reliable systems beat clever prototypes.",
      tags: ["CI/CD", "Environments", "Governance"],
    },
  ];


  return (
    <div className="topics-section">
    <h2>How I Think</h2>
    <div className="topics-grid">
        {topics.map((topic, idx) => (
        <div className="topic-card" key={idx}>
            <h3>{topic.title}</h3>
            <p>{topic.blurb}</p>
            <div className="tags">
            {topic.tags.map((tag, i) => (
                <span className="tag" key={i}>
                {tag}
                </span>
            ))}
            </div>
            <button
            className="read-btn"
            onClick={() => alert(`Coming soon: ${topic.title}`)}
            >
            Read More
            </button>
        </div>
        ))}
    </div>
    </div>

  );
}
