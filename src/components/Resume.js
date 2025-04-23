import './Resume.css';

export default function Resume() {
  return (
    <section className="resume container">
      <div className="resume-content">
        <h2 className="resume-title">📄 Resume</h2>
        <p className="resume-description">
          Curious about my background? Here's a quick overview.
        </p>
        <a
          href="/assets/Data_Engineer_Sermini_Kayla.pdf"
          download
          className="resume-button"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
}
