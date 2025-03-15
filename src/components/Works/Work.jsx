import React, { useState } from 'react';
import WorkCard from './WorkCard';
import { btns, data } from './data';

const Work = () => {
  let [work, setWork] = useState(data);
  let [activeBtn, setActiveBtn] = useState("all");

  let handClick = (btnName) => {
    setActiveBtn(btnName);
    if (btnName === "all") {
      setWork(data);
    } else {
      let filterData = data.filter((wor) => wor.type === btnName);
      setWork(filterData);
    }
  };

  return (
    <div className='section' id='works'>
      <h1>My Works</h1>
      <div className="work">
        <div className="btns-box">
          {btns.map((btn, idx) => (
            <button 
              key={idx} 
              className={btn === activeBtn ? "active" : ""}
              onClick={() => handClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="work-container">
          <WorkCard work={work} />
        </div>
      </div>
    </div>
  );
};

export default Work;
