import React from 'react'
import './header.css'
import Socials from './Socials'
import Resume from './Resume'
import PIC from '../../assets/home.png'
import Typewriter from 'typewriter-effect'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hi There! <span className="wave" role="img">👋🏻</span></h2>
        <h1>I'm <b className='purple'>Nitish Kumar </b></h1>
        <Typewriter
        options={{
          strings: ['Fullstack Web Developer', 'Blockchain Enthusiast'],
          autoStart: true,
          loop: true,
          delay: 120,
          pauseFor: 10,
          wrapperClassName: 'purple',
          cursor: '_'
          }}
        />
        <Resume />
        <Socials />

        <div className="pic">
          <img src={PIC} alt="pic"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header