import React from 'react';
import "./HeroSection.css";
import Dp from "../../assets/images3.jpeg"
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div className='section hero-section' id='home'>
      <div className="container">
        <div className="content">
          <i className='boi'>Graphic Designer</i>
          <h1 className='name'>Fariha Jameel</h1>
          <h2 className='passion'>
            I'm a &nbsp;
            <span style={{ color: "rgb(216 74 197 / 67%)" }}>
              <Typewriter
                words={[
                  "Graphic Designer.",
                  "UI/UX Designer.",
                  "Brand Identity Creator.",
                  "Creative Illustrator.",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <p>Creative graphic and UI/UX designer skilled in crafting stunning visuals, branding, and digital illustrations that captivate and inspire.</p>

        </div>
        <div className="img-box">
          <img src={Dp} alt="profile_photo" />
        </div>
      </div>

    </div>
  );
}

export default HeroSection;

