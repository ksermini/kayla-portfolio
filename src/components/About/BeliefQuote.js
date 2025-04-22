import React from 'react';
import './About.css';

const BeliefQuote = ({ quote }) => (
  <blockquote className="belief-quote reveal">
    {quote}
  </blockquote>
);

export default BeliefQuote;
