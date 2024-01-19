import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const navItemStyle = {
    color: 'white', // Change color
    fontFamily: 'poppins , sans-serif;', // Change the fontFamily
    fontSize: '32px', 
    // more styles
  };

  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link id='linkId' style={navItemStyle} className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link style={navItemStyle} className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link style={navItemStyle} className="nav-link " to="/projects">
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link style={navItemStyle} className="nav-link" to="/contacts">
          Contacts
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
