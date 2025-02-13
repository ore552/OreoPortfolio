import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>

        <div className='row'>
        <h2>Contact Me</h2>
          <div className='col'>
            <div className='col form'>
              <form >
                <p>Message me if you want to talk!</p>
                <input type="text" placeholder='Name*' required/>
                <input type="email"placeholder='Email*' required />
                <textarea placeholder='Message*' required></textarea>
                <button id='submit' type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Contact