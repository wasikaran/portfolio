import React from 'react'

const About = () => {
  return (
    <div>
      
    <section id="about mt-5" class="about section light-background">

      <div class="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <div class="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-width="2"></path>
          </svg>
        </div>
        <p>Learn more about my journey, skills, and the passion that drives my work.

</p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row align-items-center">
          <div class="col-lg-6 position-relative" data-aos="fade-right" data-aos-delay="200">
            <div class="about-image">
              <img src="" alt="Profile Image" class="img-fluid rounded-4"/>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div class="about-content">
              <span class="subtitle">About Me</span>

              <h2>UI/UX Designer &amp; Web Developer</h2>

              <p class="lead mb-4">I’m a passionate Frontend Developer specializing in modern JavaScript frameworks like React.js. With a strong foundation in responsive design, component-based architecture, and web performance optimization, I transform ideas into functional and elegant user interfaces. I enjoy building fast, accessible, and pixel-perfect web experiences. Let’s build something exceptional together.</p>

              <div class="personal-info">
                <div class="row g-4">
                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">Name</span>
                      <span class="value">Abdul Wasi</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">Phone</span>
                      <span class="value">03353683239</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">Age</span>
                      <span class="value">18 Years</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">Email</span>
                      <span class="value">wasik5738@gmail.com</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">Occupation</span>
                      <span class="value">Web Developer</span>
                    </div>
                  </div>

                  <div class="col-6">
                    <div class="info-item">
                      <span class="label">Nationality</span>
                      <span class="value">Pakistan</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="signature mt-4">
                <div class="signature-image">
                  <img src="assets/img/misc/signature-1.webp" alt="" class="img-fluid"/>
                </div>
                <div class="signature-info">
                  <h4>Abdul Wasi</h4>
                  <p>Web developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>


    </div>
  )
}

export default About
