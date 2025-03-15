import React from 'react';
import "./About.css";
import about_photo from "../../assets/aboutes.png";

const About = () => {
  return (
    <div className='section' id='about'>
      <h1 className="section-title">About Me</h1>
      <div className="about-container">
        <div className="about-photo">
          <img src={about_photo} alt="about_photo" />
        </div>
        <div className="about-content">
          <p className="about-text">
            I'm a passionate <strong>Graphic & UI/UX </strong>Designer dedicated to creating visually stunning and user-friendly designs.
            With a keen eye for aesthetics and a deep understanding of branding, I specialize in crafting engaging digital experiences
            that leave a lasting impression.
          </p>
          <p className="about-text">
            My expertise includes <strong>branding, logo design, digital illustrations, and UI/UX design</strong>. I thrive on transforming creative ideas
            into compelling visuals, ensuring each design tells a story and connects with its audience.
          </p>
          <p className="about-text">
            Let's collaborate to bring your vision to life through innovative and meaningful designs!
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
