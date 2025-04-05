import React, { useEffect } from 'react';

import './Home.css';
import mainBg from '../../assets/main1.webp';
import Navbar1 from '../../components/Navbar/Navbar1';



export default function Home() {
  return (
    <div className="home-container">
      <Navbar1 />
      
      {/* Main Content Section */}
      <div className="main-content" style={{ backgroundImage: `linear-gradient(to left, #2c2b2b 42%, transparent 40%), url(${mainBg})` }}>
        <div className="text-content">
          <h1 className="main-heading">Unlock the<br />future you</h1>
          <p className="subheading">Say hello to CareerElevate, the world's leading career advancement platform.</p>
          <button className="get-started-btn" onClick={() => window.location.href = "/take-test"}>Get Started</button>
        </div>
      </div>

      {/* Testimonial Section */}
      <p className="testimonial">
        Described as <span className="highlight">"shockingly accurate,"</span> we've helped millions of people find their ideal careers.
      </p>

      {/* Steps Section */}
      <div className="steps-container">
        <div className="step">
          <div className="step-header">
            <p className="step-number">01</p>
            <h2 className="step-title">Assessment</h2>
          </div>
          <p className="step-description">
            Reflect upon your past experiences and future goals, and learn what makes you unique.
          </p>
        </div>

        <div className="step">
          <div className="step-header">
            <p className="step-number">02</p>
            <h2 className="step-title">Matches</h2>
          </div>
          <p className="step-description">
            Find the path that's right for you based on your strengths, interests, and personality.
          </p>
        </div>

        <div className="step">
          <div className="step-header">
            <p className="step-number">03</p>
            <h2 className="step-title">Library</h2>
          </div>
          <p className="step-description">
            Explore over 100 careers and degrees. Learn who thrives in them and why.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="left-section">
          <h1>Go ahead,<br />Explore.</h1>
          <p>Take the free assessment and uncover things you didn't know about yourself.</p>
          <button 
            className="button" 
            onClick={() => window.location.href = "/take-test"}
          >
            Get Started Now
          </button>
        </div>
        <div className="right-section">
          <p className="quote">
            Half our waking lives are spent at work, yet most rely on a combination of emotion, 
            gut instinct and external advice from friends and family to inform their career decisions. 
            But what if there was a better, more scientific way to help guide these crucial decisions?
          </p>
        </div>
      </div>

      <div className="final">
        <h3 className="finaltext">Copyright @ 2025 CareerElevate All Rights Reserved</h3>
      </div>
    </div>
  );
}