import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container" id="About">
      <h1>About Us</h1>

      <div className='design-underline'>
      <div className='underline '><span className='span'></span></div>
      </div>
      <p>
        I'm Priyanka Mishra, a frontend developer passionate about building responsive and user-friendly websites.
        I have learned <span className="highlight">HTML, CSS, JavaScript</span> and also I know 
        <span className="highlight"> Basic React.js, Basic Python, and SQL.</span> I studied at Navgurukul Foundation for Social Welfare, 
        where I actively worked on projects that enhanced my web development skills. One of my key projects was building a Trivia Game, 
        where I implemented API integration, dynamic UI updates, and game logic using JavaScript. I focus on creating visually appealing 
        and functional websites that work smoothly across all devices. I enjoy working in a team, collaborating on challenges, and continuously 
        improving my skills. With my <span className="problem-solving">problem-solving mindset</span> and 
        <span className="positive-attitude"> positive attitude,</span> I am confident in my ability to contribute effectively to any team.
      </p>

      <div className="about-box">
        <p >I am Priyanka Mishra, a Front-End Developer learning at the Navgurukul Foundation for Social Welfare. I have skills in HTML, CSS, JavaScript, and ReactJS, and I enjoy building responsive and user-friendly websites. I am a quick learner who adapts easily to new challenges. I work well in a team but can also handle tasks independently. With a passion for learning and problem-solving, I am always looking for ways to improve and grow in the tech field.</p>

        <div className="details-container">
          <div className="details-box">
            <h3>Name</h3>
            <p>Priyanka Mishra</p>
            <h3>Email</h3>
            <p>priyankamishra22@navgurukul.org</p>
            <h3>Phone</h3>
            <p>7518273057</p>
          </div>

          <div className="details-box">
            <h3>Age</h3>
            <p>21</p>
            <h3>Education</h3>
            <p>Bachelor of Arts</p>
            <h3>For Work</h3>
            <p>Available</p>
          </div>

          <div className="profile-image">
            <img src="public/priyanka photo.jpeg" alt="Priyanka Mishra" />
          </div>
        </div>

        <div className="buttons-container">
            <a href="https://www.linkedin.com/in/priyanka-mishra9400/" target="_blank" rel="noopener noreferrer">
                <button className="button-resume">LinkedIn</button>
            </a>

            <a href="https://github.com/Priyanka-mis" target="_blank" rel="noopener noreferrer">
                <button className="button-github">Github</button>
            </a>
        </div>
      </div>
    </div>
  );
}

export default About;

