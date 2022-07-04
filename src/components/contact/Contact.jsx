import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import emailjs from 'emailjs-com' 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
    
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact <span className='purple'>ME</span></h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact_option__icon'/>
            <h4>Email</h4>
            <h5>nitishkumarneeraj@gmail.com</h5>
            <a href='mailto:nitishkumarneeraj@gmail.com' target='_blank' rel='noreferrer'>Send Mail</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact_option__icon'/>
            <h4>Linkedin</h4>
            <h5>Nitish Kumar</h5>
            <a href='https://www.linkedin.com/in/nitish-kumar-6b35431b4/' target='_blank' rel='noreferrer'>Connect with me</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact_option__icon'/>
            <h4>Instagram</h4>
            <h5>nitishk1933</h5>
            <a href='https://www.instagram.com/nitishk1933/' target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact