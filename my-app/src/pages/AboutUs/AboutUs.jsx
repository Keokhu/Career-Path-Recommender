import React from 'react';
import Navbar from '../../components/Navbar/Navbar1';
import './AboutUs.css';
import thinkingImage from '../../assets/thinking5.jpg';

export default function AboutUs() {
  return (
    <div className="about-us-page">
      <Navbar />
      
      <div className="about-container">
        {/* Header Section */}
        <section className="about-header">
          <h1>Career Elevate</h1>
          <p>Transforming Career Paths Through Personalized Guidance and Innovative Assessment Techniques</p>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div 
            className="mission-image"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${thinkingImage})` }}
          />
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>At Career Elevate, we are passionate about empowering individuals to discover their true professional potential. Our comprehensive approach combines advanced psychological assessments, data-driven insights, and personalized coaching to help you navigate your career journey with confidence.</p>
          </div>
        </section>

        {/* Core Values */}
        <section className="core-values">
          <div className="value-card">
            <i className="fas fa-bullseye"></i>
            <h3>Precision</h3>
            <p>Cutting-edge assessment techniques to match your unique skills and personality</p>
          </div>
          <div className="value-card">
            <i className="fas fa-user-check"></i>
            <h3>Personalization</h3>
            <p>Tailored career recommendations that align with your individual strengths</p>
          </div>
          <div className="value-card">
            <i className="fas fa-hands-helping"></i>
            <h3>Support</h3>
            <p>Continuous guidance and resources throughout your career development</p>
          </div>
        </section>

        {/* Assessment Process */}
        <section className="assessment-process">
          <h2>Our Career Assessment Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <h3>Personality Mapping</h3>
              <p>Deep psychological profile analysis</p>
            </div>
            <div className="process-step">
              <h3>Skills Evaluation</h3>
              <p>Comprehensive aptitude and skill assessment</p>
            </div>
            <div className="process-step">
              <h3>Career Matching</h3>
              <p>Precision-driven career path recommendations</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}