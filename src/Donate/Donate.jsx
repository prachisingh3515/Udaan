import React from 'react'
import { donate } from '../constants'
import "./Donate.css"
import { createContext, useState } from 'react'
import {Alert, Slide, Fade, Snackbar} from '@mui/material'
import Things from './Things.jsx'
import {Link} from "react-router-dom"
import Button from '../components/Button'


const SnackContext = createContext()
const DonationContext = createContext()

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}


const Donate = () => {
  const [donationData, setDonData] = useState([])  
  const [state, setState] = useState({
    vertical: 'top',
    horizontal: 'center',
    open: false,
    Transition: Fade
  })

  const { vertical, horizontal, open } = state;


  const handleClick = () => {
    setState({
      ...state,
      open: true,
      SlideTransition,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setState({
      ...state,
      open: false,
    });
  
};


  return (
    <DonationContext.Provider value = {{donationData, setDonData}}>
    <SnackContext.Provider value={{state, handleClick}} >

        <Snackbar open={state.open} anchorOrigin={{ vertical, horizontal }}
         autoHideDuration={3000} onClose={handleClose} key={vertical + horizontal}>
        <Alert
          onClose={handleClose}
          TransitionComponent={state.Transition}
          severity="success"
          sx={{ width: '100%' }}
        >
          Your donation is add to Cart! Kindly checkout it from the cart.
        </Alert>
      </Snackbar>
    <div className='donate'>
      <h1 className='donate-head'>Support a Cause, Make a Difference</h1>
      <p className='donate-para'>Your donations can help underprivileged communities access essential resources.
      <br />Whether it's food, clothes, books, or medical aid, every contribution counts.</p>
      <div className='donate-container'>
      {donate.map((item, index) => (
        <Things key={index} item={item}/>
          ))}
      </div>
    </div>

    </SnackContext.Provider>
    </DonationContext.Provider>

  )
}

export default Donate
export {SnackContext, DonationContext}
