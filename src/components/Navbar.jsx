import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import "./Navbar.css";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} height="40rem" width="90rem" alt="" />
        </div>
        
        <ul className={`links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/opportunities" onClick={() => setMenuOpen(false)}>Opportunities</Link></li>
          <li><Link to="/donate" onClick={() => setMenuOpen(false)}>Donate</Link></li>
          <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
          <li><Link to="/feedback" onClick={() => setMenuOpen(false)}>Feedback</Link></li>

          <div className="mobile-action-menu">
            <Button to={"/login"} value={"Login"} />
            <Button to={"/sign-up"} value={"Sign up"} />
          </div>
        </ul>
        
        <div className='action-menu'>
          <Button to={'/cart'} value={"Browse Cart"} />
          <Button to={"/login"} value={"Login"} />
          <Button to={"/sign-up"} value={"Sign up"} />
        </div>
        
        <div className="toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose /> : <IoMenu />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
