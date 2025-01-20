import React from 'react'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='home' id='home'>
        <section className='homepage' >
          <div className='content'>
            <div className='text'>
              <h1>My Portfolio</h1>
              <p>Full of all the things I've done, <br /> Enjoy.</p>
            </div>
            
            <Link to={"/project"}>My Projects</Link>
          </div>
        </section>
    </div>
  )
}

export default Hero