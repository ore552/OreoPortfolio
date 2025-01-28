import React from 'react'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='home' id='home'>
        {/* <section className='homepage' >
          <div className='content'>
            <div className='text'>
              <h1>My Portfolio</h1>
              <p>Full of all the things I've done, <br /> Enjoy.</p>
            </div>
            
            <Link to={"/project"}>My Projects</Link>
          </div>
        </section> */}
        <section className='homepage'>
          <div className='right-column'>
            <img src="src/assets/strategy.jpg" alt="img-bg" />
          </div>
          <div className='left-column'>
              <div className='content'>
                <div className='text'>
                  <h1>Oreofe Olufiranye</h1>
                  <h3>My Portfolio</h3>
                  <p>Full of all my creations and why I've made them. <br /> Please expect very fun and interesting creations.</p>
                </div>
              </div>
          </div>
        </section>
    </div>
  )
}

export default Hero