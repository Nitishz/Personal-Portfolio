import React from 'react'
import './footer.css'
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>NK</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__copyright">
        <small>Copyright &copy; 2022 NK</small>
      </div>
      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/nitish-kumar-6b35431b4/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href='https://www.instagram.com/nitishk1933/' target='_blank' rel='noreferrer'><BsInstagram /></a>
        <a href='https://www.github.com/Nitishz/' target='_blank' rel='noreferrer'><BsGithub /></a>
      </div>
    </footer>
  )
}

export default Footer