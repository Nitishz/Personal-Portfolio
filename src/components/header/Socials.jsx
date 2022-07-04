import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

import {SiGmail} from 'react-icons/si'
const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nitish-kumar-6b35431b4/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/Nitishz" target='_blank' rel='noreferrer'><BsGithub /></a>
        <a href="https://gmail.com" target='_blank' rel='noreferrer'><SiGmail /></a>
    </div>
  )
}

export default Socials