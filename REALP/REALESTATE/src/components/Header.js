// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>REALESTATE</h1>
      <nav>
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/properties">Properties</Link></li>
          <li><Link to="/agents">Agents</Link></li> {/* New Agents link */}
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;