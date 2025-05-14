import React from 'react'
import Button from '../components/Button'
import { useState } from "react"
import DonateCard from "./DonateCard"
import '../components/Button.css'

const Things = ({item}) => {
    const [donation, setDonation] = useState(false)

  return (
    <div className='donate-item'>
              {donation && <DonateCard
      name = {item.title}
      close = {() => setDonation(false)}
      />}

        
        <img src={item.img} height="80px" width="80px" alt="" className='object-contain' />
        <div>
            <h1>{item.title}</h1>
            <button onClick={() => setDonation(true)} className='action-btn'>Add to Donation</button>
            </div>  
    </div>
    
  )
}

export default Things
