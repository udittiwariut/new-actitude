import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './navbar.css'; // You can create a separate CSS file for styling

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
    <button onClick={toggleSidebar}><div className="group-7">
                    <div className="rectangle-3 colord"></div>
                    <div className="rectangle-4 colord"></div>
                    <div className="rectangle-5 colord"></div>
                  </div></button>
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      
      <ul className='d-flex'>
            <li><NavLink to="/">Indivisuals</NavLink> </li>
            <li><NavLink to="/Corporate">Corporate</NavLink></li>
            <li><NavLink to="/Ngo">NGO's</NavLink></li>
            <li><NavLink to="/OurTeam">Our Team</NavLink></li>
            <li><NavLink to="/StepAway">Step Away</NavLink></li>
            {/* <li><NavLink to="/Login">Log In</NavLink></li>
            <li><NavLink to="/Register">Sign Up</NavLink></li> */}
            </ul>
            <button className="close-button" onClick={closeSidebar}>
        X
      </button>
            
    </div>
    </>
  );
};

export default Sidebar;
