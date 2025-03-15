import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div  className='section' id='contact'>
      <h1>Contact me</h1>
      <div className="my-info">
        <div className="my-name">
          <h1>Fariha Jameel</h1>
          <div className="my-boi"><i>Completed ICS and graffic desinger</i></div>
          </div>
          <div className="info-content">
            <p><span>Age:</span> 19</p>
            <p><span>Phone:</span> +92 346 4445008</p>
            <p><span>Education:</span> Intermediate</p>
            <p><span>Email:</span> farihajameel@gmail.com</p>
            <p><span>Residence:</span> Lahore </p>
            <p><span>Address:</span> Un_know</p>

          </div>     
      </div>
    </div>
  )
}

export default Contact
