import React from 'react'
import './Contact.css'

function Contact(){


  return (
    <>
  <div className='whole-contact' id='contact'>
    <h1 className='contact-heading'>Contact Us</h1>

    <div className='design-underline'>
      <div className='underline '><span className='span'></span></div>
    </div>
    <div className='contact-page'>
      <section className='main-contact'>
          <div className='contact-box'>
            <div className='contact-img'>
              <img src='punlic/location.png'></img>
            </div>
          
            <h1>Address</h1>
            <p>Pune, Maharshtra</p>
          </div>

          <div className='contact-box'>
            <div className='contact-img'>
              <img src='public/contact.png'></img>
            </div>
            
            <h1>Phone No.</h1>
            <p> 91+ 7518273057</p>
          </div>

          <div className='contact-box'>
            <div className='contact-img'>
              <img src='public/email.png'></img>
            </div>
            
            <h1>Email</h1>
            <p>priyankamishra22@navgurukul.org</p>
          </div>
          
        </section>
{ /* contact form */}
      <div className='contact-form-container'>
        <div className='contact-form'>
          <div className='contact-form-page'>

            <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
              <input type="hidden" name="access_key" value="7d3eb425-04f4-4833-a462-4667c66b133d" />
              <input type="hidden" name="recipient_email" value="p3355051@gmail.com" />

              <div className="form-box-information">
                <p className="p">Name:</p>
                <input type="text" name="name" placeholder="Your Name.." required style={{ marginTop: "10px" }} />
              </div>

              <div className="form-box-information">
                <p className="p">Email: </p>
                <input type="email" name="email" placeholder="Your Email.." required style={{ marginTop: "10px" }} />
              </div>

              <div className="form-box-information">
                <p className="p">Message:</p>
                <textarea name="message" placeholder="Type Your Message..." required style={{ marginTop: "10px" }}></textarea>
              </div>

              <div className="form-box-information">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>

          <div className="contact-form-img">
            <img src='public/contact us.avif'></img>
          </div>
          
        </div>
    </div>
    </div>
  </div>
    </>
  )

}
 
 
export default Contact