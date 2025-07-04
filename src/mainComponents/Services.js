import React from 'react'

const Services = () => {
  return (
    <div>

      <section id="services" class="services section">

        <div class="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <div class="title-shape">
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-width="2"></path>
            </svg>
          </div>
          <p>Discover the range of web solutions I offer, tailored to bring your ideas to life.

</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">

          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="row g-4">

                <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div class="service-item">
                    <i class="fab fa-react"></i>
                    <h3><a href="service-details.html">Custom React Web App Development</a></h3>
                    <p>Build fast, dynamic, and scalable web apps using React.js tailored to client needs.

                    </p>
                  </div>
                </div>

                <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div class="service-item">
                    <i class="fas fa-mobile-alt"></i>
                    <h3><a href="service-details.html">Responsive UI/UX Design Implementation</a></h3>
                    <p>Transform your Figma/Adobe designs into pixel-perfect, mobile-friendly web interfaces.

                    </p>
                  </div>
                </div>

                <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div class="service-item">
                    <i class="fas fa-sync-alt"></i>
                    <h3><a href="service-details.html">Single Page Applications (SPA)
                    </a></h3>
                    <p>Modern, smooth navigation without page reloads — just like mobile apps!

                      .</p>
                  </div>
                </div>

                <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                  <div class="service-item">
                    <i class="fas fa-plug"></i>
                    <h3><a href="service-details.html">API Integration & Frontend Logic Handling
                    </a></h3>
                    <p>Connect backend data smartly with beautifully presented interfaces using REST or GraphQL APIs.

                    </p>
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

export default Services
