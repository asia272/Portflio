import React from 'react';

const WorkCard = ({ work }) => {
  return (
    <div>
      {work.map((item, index) => (
        <div key={index} className="work-item">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.type}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkCard;
