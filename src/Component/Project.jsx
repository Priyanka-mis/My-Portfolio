import React, { useState } from 'react'
import './Project.css'
function Project() {

  const [showMore, setShowMore] = useState(false)
  return (
    <div className='projects-container' id='projects'>
      <h1>Projacts</h1> 
      <div className='design-underline'>
      <div className='underline '><span className='span'></span></div>
      </div>

      <div className="project-container">
        <div className='project-boxes'>
          <img src='public/tic-tac-toe.png' className='project-img'></img>
          <h1 className='title'>Tic Tac Toe </h1>
          <button className='project-demo-button'> <a href='https://tic-tac-toe-one-vert-35.vercel.app/' target='_blank' rel='noopner noreferrer'>Live Demo</a></button>
        </div>

        <div className='project-boxes'>
          <img src='public/trivia.png' className='project-img'></img>
          <h1 className='title'>Trivia Game</h1>
          <button className='project-demo-button'> <a href='https://trivia-game-aaxx.vercel.app/' target='_blank' rel='noopner noreferrer'>Live Demo</a></button>

        </div>

        <div className='project-boxes'>
          <img src='public/pomodoro.png' className='project-img'></img>
          <h1 className='title'>Pomodoro Timer</h1>
          <button className='project-demo-button'><a href="https://pomodoro-timer-cyan-phi.vercel.app" target="_blank" rel="noopener noreferrer"> Live Demo</a></button>

        </div>
{/* show more */}

          {showMore &&(
            <>
            <div className='project-boxes'>
              <img src='public/netflex.png' className='project-img' alt='project'></img>
              <h1 className='title'>Netflex</h1>
              <button className='project-demo-button'> <a href='https://netflex-clone-iota.vercel.app/' target='_blank' rel="noopener noreferrer">Live Demo </a></button>
            </div>
            <div className='project-boxes'>
              <img src='public/chatbot.png' className='project-img' alt='project'></img>
              <h1 className='title'>Chatbot</h1>
              <button className='project-demo-button'><a href='https://chatbot-gold-xi.vercel.app/' target='_blank' rel="noopener noreferrer"> Live Demo </a></button>
            </div>
            </>
          )}

          <button className='show-more-button' onClick={()=> setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More Projects"} </button> 
      </div>
    </div>
  )
}

export default Project


