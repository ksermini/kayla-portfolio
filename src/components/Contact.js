import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import './Contact.css'; // Make sure to style appropriately

export default function Contact() {
  return (
    <section className="contact container">
      <div className="contact-box">
        <h2 className="contact-title">Let’s Connect 🌸</h2>
        <p className="contact-subtitle">
          Want to build something thoughtful together? I’d love to chat.
        </p>
        <ul className="contact-links">
          <li>
            <a href="mailto:kaylasermini@yahoo.com">
              <FaEnvelope /> Email
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/kayla-sermini" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/ksermini" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
