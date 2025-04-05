import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo1.png';


export default function Navbar2() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img className="logo" src={logo} alt="CareerElevate Logo" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/take-test">Take Test</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/about-us">About Us</Link>
      </div>
    </nav>
  );
}