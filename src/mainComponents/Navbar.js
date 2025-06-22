// src/components/HeroSection.jsx
import React from 'react';
import '../App.css'; // For custom CSS
import HeroImg from '../images/Hero-porfolio-img.jpg'

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">MyPortfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-text d-flex flex-column justify-content-center align-items-center text-white text-center">
        <h1 className="display-4 fw-bold">Hi, I'm Wasi Karan</h1>
        <p className="lead">Frontend Developer | React Enthusiast</p>
        <a href="#projects" className="btn btn-light mt-3 px-4 py-2">View Portfolio</a>
      </div>
    </div>
  );
};

export default HeroSection;
