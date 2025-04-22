import React from 'react';
import './About.css';

const TimelineBlock = ({ events }) => (
  <div className="timeline">
    {events.map((event, index) => (
      <div className="timeline-event reveal" key={index}>
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default TimelineBlock;
