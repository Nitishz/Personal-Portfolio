import React from 'react'
import './about.css'
import PIC from '../../assets/home.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About <strong className='purple'>ME</strong></h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={PIC} alt="About Me" className='about__me-image'/>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Self Employed</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>25+ Completed Projects</small>
            </article>
          </div>

          <p>
            Hi Everyone, This is <span className="purple">Nitish Kumar </span>from <span className="purple"> Bihar, India.</span><br/>I am a Final Year Btech Student at BIT Mesra pursuing CSE.<br/><br/>
            I love programming, turning my thoughts into code and I have at least learnt something, I think...🤷‍♂️<br/><br/>I am fluent in <i><b className="purple">C++, Python and Javascript.</b></i><br/><br/>My field of Interests are building new <i><b className='purple'>Web Technologies and Products</b> and aslo in areas related to <b className='purple'>Blockchain.</b></i><br/><br/>Whenever possible, I apply my passion for developing products with <b className='purple'>Django</b> and <i><b className='purple'>Modern Javascript Library</b></i> like <i><b className='purple'>React.js </b></i>and <i><b className='purple'>Next.js</b></i>
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About