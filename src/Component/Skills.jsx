import React from 'react'
import './Skills.css'

function Skills () {
  return (
    <div className='skills-container' id='skills'>
        <h1 >My SKills</h1>
        <div className='design-underline'>
            <div className='underline '><span className='span'></span></div>
        </div>

        <div className='skills-main'>
            <div className='skills-boxe'>
                <img src='/html-logo.png' ></img>
                <h1>HTML</h1>
            </div>

            <div className='skills-boxe'>
                <img src='/CSS_logo.png' ></img>
                <h1>CSS</h1>
            </div>

            <div className='skills-boxe'>
                <img src='/javascript.png'></img>
                <h1>JavaScript</h1>
            </div>

            <div className='skills-boxe'>
                <img src='/react.svg'></img>
                <h1>Basic React</h1>
            </div>
            <div className='skills-boxe'>
                <img src='/python.png'></img>
                <h1>Basic Python</h1>
            </div>
    
            <div className='skills-boxe'>
                <img src='/Github.png'></img>
                <h1>Github</h1>
            </div>
            <div className='skills-boxe'>
                <img src='/vercel .png'></img>
                <h1>Vercel</h1>
            </div>
        </div>
    </div>
  )
}

export default Skills
