import React from 'react';
import "./Work.css"

const WorkCard = ({ work }) => {
  return (
    <div className='works-container'>
      {work.map((item, index) => (
        <div key={index} className="work-item">
          <img src={item.image} alt={item.title} />
          <p>{item.name} <span>{item.type}</span></p>
        </div>
      ))}
    </div>
  );
};

export default WorkCard;
