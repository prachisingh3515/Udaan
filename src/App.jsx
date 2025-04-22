import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Navbar'
import Hero from "./Hero/Hero"
import Donate from "./Donate/Donate.jsx"
import Events from "./Events/Events.jsx"
import Feedback from "./Feedback/Feedback.jsx"
import UserFeedback from "./Feedback/UserFeedback.jsx"
import Opportunities from "./Opportunities/Opportunities.jsx"
import OpportunityDetail from "./Opportunities/OpportunityDetail.jsx"
import Login from "./Login/Login.jsx"
import Register from "./Register/Register.jsx"

import './index.css'
import Cart from "./cart/Cart.jsx";
import EventDetails from "./Events/EventDetails.jsx";



function App() {

  return (
    <Router>
      <ScrollToTop />
      <main>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/opportunities' element={<Opportunities/>}/>
        <Route path="/opportunity/:id" element={<OpportunityDetail />} />
        <Route path='/donate' element={<Donate/>} />
        <Route path='/events' element={<Events/>} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/your-feedback' element={<UserFeedback/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<Register/>}/>
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </main>
      
      
    </Router>
  )
}

export default App
