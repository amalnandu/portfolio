import React from 'react';
import '../styles/timeline.css';

const TimelineItem = ({ year, title, description, gpa }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag">{year}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      { gpa
       && <p className="gpa">
         <span style={{color:"#555",fontWeight:"400"}}>GPA:</span> {gpa}</p>}
      <span className="circle" />
    </div>
  </div>
);

const Timeline = ({ items }) => (
  <div className="timeline-container">
    {items.map((item, index) => (
      <TimelineItem 
        key={index} 
        year={item.year} 
        title={item.title} 
        description={item.description} 
        gpa={item.gpa} 
      />
    ))}
  </div>
);

export default Timeline;
