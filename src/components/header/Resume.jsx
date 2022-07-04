import React from 'react'
import CV from '../../assets/NitishKumar.pdf'


const Resume = () => {
  return (
    <div className='resume'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Resume