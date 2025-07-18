// src/components/HeroSection.jsx
import React from 'react';
import '../App.css'; // For custom CSS
import { Link } from 'react-scroll';
const HeroSection = () => {
  return (
    <div id='home' className="hero-container">

  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="#" class="logo d-flex align-items-center me-auto me-xl-0">
        <h1 class="sitename">MY PortFolio</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
    <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
    <li><Link to="portfolio" smooth={true} duration={500}>Projects</Link></li>
    <li><Link to="FAQs" smooth={true} duration={500}>FAQs</Link></li>
    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li></ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <div class="header-social-links">
        <a target='_blank' href="https://wa.me/923353683239?text=" class="twitter"><i class="bi bi-whatsapp"></i></a>
        <a target='_blank' href="https://github.com/wasikaran/" class="facebook"><i class="bi bi-github"></i></a>
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=wasik5738@gmail.com&su=Let's%20work%20together&body=Hi%20Wasi,%20I%20want%20to%20discuss%20a%20project%20with%20you."
  target="_blank"
  rel="noopener noreferrer"
  className="email-link"
>
  <i className="bi bi-envelope-at"></i> 
</a>      <a href="" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>

    </div>
  </header>


    <section id="hero" class="hero section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row align-items-center content">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h2>Crafting Digital Experiences with Passion</h2>
            <p class="lead">Transforming ideas into elegant solutions through creative design and innovative development</p>
            <div class="cta-buttons" data-aos="fade-up" data-aos-delay="300">
              <a href="#portfolio" class="btn btn-primary">View My Work</a>
              <a href="#contact" class="btn btn-outline">Let's Connect</a>
            </div>
            <div class="hero-stats" data-aos="fade-up" data-aos-delay="400">
              <div class="stat-item">
                <span class="stat-number">6+</span>
                <span class="stat-label">Months Experience</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">10+</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">10+</span>
                <span class="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image">
              <img src={'images/profile-1.jpg'} alt="Portfolio Hero Image" class="img-fluid" data-aos="zoom-out" data-aos-delay="300"/>
              <div class="shape-1"></div>
              <div class="shape-2"></div>
            </div>
          </div>
        </div>

      </div>

    </section>
    </div>
  );
};

export default HeroSection;

