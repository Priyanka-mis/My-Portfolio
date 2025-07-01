import React from 'react'
import './Education.css'

function Education () {

  return (
    <div className='education-background ' id='education'>
         <h1 className='education-heading'>Education</h1>
         <div className='design-underline'>
                <div className='underline '><span className='span'></span></div>
          </div>
        <div className='education-container'>
           
            <div className='Eduction-boxex'>
                <div className='education-box'>
                    <div className='imge'>
                        <img src='/education.png'></img>
                    </div>
                    <div className='content-education'>
                        <h2>Software Development Course</h2>
                        <p>Navgurukul Foundation Social Welfare: <strong>Pune, Maharshtra</strong></p>
                    </div>
                </div>

                <div className='education-box'>
                <div className='imge'>
                        <img src='/education.png'></img>
                    </div>
                    <div className='content-education'>
                        <h2>Web Development</h2>
                        <p>Navgurukul Foundation Social Welfare: <strong>Banglore</strong></p>
                    </div>
                </div>

                <div className='education-box'>
                <div className='imge'>
                        <img src='/education.png'></img>
                    </div>
                    <div className='content-education'>
                        <h2>Bachelor of Art</h2>
                        <p>Lucknow University: <strong>Lucknow Uttar Pradesh</strong></p>
                    </div>
                </div>

                <div className='education-box'>
                <div className='imge'>
                        <img src='/education.png'></img>
                    </div>
                    <div className='content-education'>
                        <h2>Higher Secondary </h2>
                        <p>Nageshwari Memorial Inter Collage B.K.T Lucknow:<br></br> <strong>Lucknow Uttar Pradesh</strong></p>
                    </div>
                </div>
                
            </div>
         </div>
    </div> 
   )
}


export default Education
