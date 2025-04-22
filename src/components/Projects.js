import '../App.css';

export default function Projects() {
  const projects = [
    {
      title: "Monte Carlo Option Pricing Engine",
      description: "High-performance C++ simulation engine using design patterns and threading.",
      link: "https://github.com/ksermini/MonteCarlo"
    },
    {
      title: "Crypto Trade Alerts",
      description: "Real-time crypto strategy monitor using Python, SQLite, and sentiment analysis.",
      link: "https://github.com/ksermini/crypto_trade_alerts"
    },
    {
      title: "Budget Management App",
      description: "Flask-based dashboard with real-time Socket IO, personal budgeting tracker.",
      link: "https://github.com/ksermini/Budget-management-"
    }
  ];

  return (
    <section className="projects container">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project, i) => (
          <div className="card" key={i}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
