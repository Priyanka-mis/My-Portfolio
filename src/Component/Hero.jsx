import React from 'react';
import './Hero.css'; // CSS file import ki hai

function Hero() {
  return (
    <div>
      <section className="hero-section">
        <div className="main">
          <h2 className='greeting'>Hello, I am</h2>
          <h1 className='name'>Priyanka Mishra</h1>
          <h2 className='role'>I am  <span>Frontend Developer</span> </h2>
          <div className="button-container">
            <button className='resume-see'><a href='https://drive.google.com/file/d/128RecNyOcJxFYc_Dwt94PAfjoiDcbsq4/view?usp=sharing' target='_blank'>Resume 👁️</a></button>
            <button className='resume-download'><a href='https://drive.google.com/uc?export=download&id=128RecNyOcJxFYc_Dwt94PAfjoiDcbsq4' download="Priyanka_Resume.pdf">Resume 🢃</a></button>
          </div>
        </div>
        <div className="image-container">
          <img src="/priyanka photo.jpeg" alt="Priyanka Mishra" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
