import React from "react";

export default function LandingTopics() {
  const topics = [
    {
      title: "CI/CD: Why consistency beats chaos",
      blurb:
        "From automatic semantic versioning to Azure DevOps, I’ve built pipelines that don’t just deploy code — they build confidence.",
      tags: ["Azure DevOps", "PowerShell", "Python"],
    },
    {
      title: "Low Code / No Code: Scaling without hand-coding",
      blurb:
        "I architected a low-code ETL framework that eliminated repetitive scripting while keeping full flexibility.",
      tags: ["Python", "YAML", "SQLAlchemy"],
    },
    {
      title: "PowerShell: My unlikely favorite tool",
      blurb:
        "It's not flashy, but it gets the job done. PowerShell became my go-to for CI/CD scripting and automation.",
      tags: ["PowerShell", "CI CD"],
    },
    {
      title: "SDLC: The system that runs the system",
      blurb:
        "I live and breathe clean architecture, because clean processes produce clean code.",
      tags: ["Confluence", "Git", "Lucid"],
    },
    {
      title: "Mentorship & Culture: Why I Lead by Example",
      blurb:
        "As a former team captain, I bring competitive energy into every dev room. Culture isn't extra, it's the foundation.",
      tags: ["Leadership", "Culture", "Mentorship"],
    },
    {
      title: "Designing for Tim in Treasury",
      blurb:
        "If you don’t know what Tim waits an hour for every morning, how do you build something useful? I care about real pain points.",
      tags: ["User Empathy", "Systems Thinking", "Business Context"],
    },
  ];

  return (
    <div className="topics-section">
    <h2>What I Talk About</h2>
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
