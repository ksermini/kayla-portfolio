// src/components/SectionCard.js
import React from 'react';
import './About.css';

const SectionCard = ({ title, children }) => (
  <div className="section-card reveal">
    {title && <h2 className="section-title">{title}</h2>}
    <div className="section-content">{children}</div>
  </div>
);

export default SectionCard;
