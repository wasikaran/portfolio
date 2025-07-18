import React, { useEffect } from 'react';
import Isotope from 'isotope-layout';
import textutils from '../images/textutils.jpg'
import cvbuilder from '../images/cv-builder.jpg'
import newsMonkey from '../images/newssMonkey.jpg'
import notepad from '../images/notepad.jpg'
import quizapp from '../images/quiz-app.jpg'
import multiTools from '../images/multiTools.jpg'
import snakegame from '../images/snake-game.jpg'
import datafinder from '../images/data-finder.jpg'
import abgk from '../images/abgk-welfare.png'
import safarizoo from '../images/safari-zoo.png'
import onlineStore from '../images/online-store.png'
// import hawaan from '../images/textutils.jpg'

const Portfolio = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const iso = new Isotope('.isotope-container', {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
      });

      const filters = document.querySelectorAll('.portfolio-filters li');
      filters.forEach((filter) => {
        filter.addEventListener('click', function () {
          filters.forEach((el) => el.classList.remove('filter-active'));
          this.classList.add('filter-active');
          const filterValue = this.getAttribute('data-filter');
          iso.arrange({ filter: filterValue });
        });
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
        <p>Explore the projects I've crafted using modern web technologies.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          {/* Filters */}
          <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
            <ul className="portfolio-filters isotope-filters">
              <li data-filter="*" className="filter-active">All Work</li>
              <li data-filter=".filter-react">REACT</li>
              <li data-filter=".filter-html">HTML / CSS</li>
              <li data-filter=".filter-js">JS / API</li>
              <li data-filter=".filter-php">Full Stack PHP</li>
            </ul>
          </div>

          {/* Cards */}
       <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">
  {[
    ['Quiz App', `${quizapp}`,'https://wasikaran.github.io/quiz-app/', 'MCQs with timer, subject & difficulty levels'],
    ['TextUtils', `${textutils}`,'https://wasikaran.github.io/First-React-Web/', 'Text formatting tool with dark mode & summary'],
    ['Notepad', `${notepad}`,'https://wasikaran.github.io/notepad/', 'CRUD-based notes app using localStorage'],
    ['NewsMonkey',` ${newsMonkey}`,'https://wasikaran.github.io/newsMonkey/', 'Live news fetching via News API with infinite scroll'],
    ['CV Builder', `${cvbuilder}`,'https://wasikaran.github.io/cv-builder/', 'CV form with multiple templates and download'],
    ['Multi Tool Dashboard', `${multiTools}`, 'https://wasikaran.github.io/tools-app/', 'Tools like mechanical watch, stop watch and calculator']
  ].map(([title, img, link, desc], i) => (
    <div key={i} className="col-lg-6 col-md-6 portfolio-item isotope-item filter-react">
      <div className="portfolio-card">
        <div className="portfolio-image">
          <img src={img} className="img-fluid" alt={title} />
          <div className="portfolio-overlay">
            <div className="portfolio-actions">
              <a target='_blank' href={link} className="glightbox preview-link"><i className="bi bi-eye"></i></a>
            </div>
          </div>
        </div>
        <div className="portfolio-content">
          <span className="category">REACT</span>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  ))}


            {/* ==== HTML / CSS - 2 Cards ==== */}
            {[
              ['Central safari Zoo', `${safarizoo}`, 'https://hamdev22445.github.io/Central-Zoo/', 'Built with modern CSS grid/flex'],
              ['online store', `${onlineStore}`,'www.shopsnexuspk.com', 'Responsive layout with fully connected to database for manage records'],
                            ['A.B.G.K Welfare Register® ',`${abgk}`, 'www.abgkwelfare.com',  'A single-page responsive website with professional style and structure .'],

            ].map(([title, img, url, desc], i) => (
              <div key={i} className="col-lg-6 col-md-6 portfolio-item isotope-item filter-html">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={`${img}`} className="img-fluid" alt="" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a href={`${url}`} className="glightbox preview-link"><i className="bi bi-eye"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="category">HTML / CSS</span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* ==== JS / API - 2 Cards ==== */}
            {[
              ['CNIC Data Finder', `${datafinder}`, 'https://wasikaran.github.io/data-finder/', 'Search any individual’s biodata using CNIC — just like NADRA'],
              ['MINI Games', `${snakegame}`, 'https://wasikaran.github.io/js-games/', 'Created MINI JS Games with only HTML CSS & JS without exerternal libraries ']
            ].map(([title, img, url, desc], i) => (
              <div key={i} className="col-lg-6 col-md-6 portfolio-item isotope-item filter-js">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={`${img}`} className="img-fluid" alt="" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a href={url} className="glightbox preview-link"><i className="bi bi-eye"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="category">JS / API</span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* ==== PHP - 2 Cards ==== */}
            {[
              ['Hawaan', '', '', 'Full Stack E-commerce with  admin dashboard']
            ].map(([title, img, url, desc], i) => (
              <div key={i} className="col-lg-6 col-md-6 portfolio-item isotope-item filter-php">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={`${img}`} className="img-fluid" alt="" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a href={`${url}`} className="glightbox preview-link"><i className="bi bi-eye"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Full Stack PHP</span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
