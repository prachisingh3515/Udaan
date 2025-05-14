import React from 'react'
import "./Feedback.css"
import { feedback1 } from '../constants'
import { feedback2 } from '../constants'
import Button from "../components/Button.jsx"
const Feedback = () => {
  return (
    <div className='feedback'>
      <h1 className='feedback-para'>"Your voice inspires change- share your journey and make an impact."</h1>
      <h2 className='feedback-head1'>What Our Volunteers Say</h2>
      <div className='feedback1-container'>
      {feedback1.map((item, index) => (
            <div key={index} className='feedback1-item'>
                
                <img src={item.profile} height="50px" width="50px" alt=""/>
                <div className='feedback1-content'>
                  <div>
                  <h1>{item.name}</h1>
                  <h2>{item.username}</h2>
                  </div>
                  <p>{item.review}</p>
                  
                  
                  </div>
            </div>
          ))}
      </div>
      <h2 className='feedback-head1'>What Our Organisations Say</h2>
      <div className='feedback1-container'>
      {feedback2.map((item, index) => (
            <div key={index} className='feedback1-item'>
                
                <div className='feedback1-content'>
                  <div>
                  <h1>{item.name}</h1>
                  <h2>{item.username}</h2>
                  </div>
                  <p>{item.review}</p>
                  
                  
                  </div>
            </div>
          ))}
      </div>
      <div className='feedback-button'>
      <Button to={"/your-feedback"} value={"We would love to hear from you"}/>
      </div>
    </div>
  )
}

export default Feedback
