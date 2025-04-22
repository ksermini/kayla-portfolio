import { motion } from 'framer-motion';
import '../App.css';
import kayla from '../assets/kayla.png';

export default function Hero() {
  return (
    <motion.header
      className="hero"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img src={kayla} alt="Kayla Sermini" className="profile-pic" />
      <h1>Building clean, scalable data systems</h1>
      <p className="tagline">
        Modular ETL. Dynamic CI/CD. Obsessed with SDLC excellence.
      </p>
      <a href="/projects" className="btn">View Projects</a>
    </motion.header>
  );
}
