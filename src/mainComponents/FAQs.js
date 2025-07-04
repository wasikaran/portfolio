import React, { useState } from 'react';

const faqData = [
  {
    question: 'What technologies do you use for frontend development?',
    answer: 'I primarily use React.js along with HTML, CSS (SASS/SCSS), Bootstrap, Tailwind, and JavaScript ES6+.',
  },
  {
    question: 'Can you build websites that work on all devices?',
    answer: 'Yes, I focus on responsive design using Flexbox/Grid and media queries to ensure full compatibility across all screen sizes.',
  },
  {
    question: 'Do you connect the frontend with APIs?',
    answer: 'Absolutely! I have experience integrating RESTful APIs and GraphQL into frontend applications for dynamic data rendering.',
  },
  {
    question: 'How fast can you deliver a frontend project?',
    answer: 'Project timelines vary, but I follow an agile and efficient development flow. A basic React site can be delivered within 3–7 days.',
  },
  {
    question: 'Do you offer code optimization and performance improvements?',
    answer: 'Yes! I prioritize code quality, lazy loading, code-splitting, and best practices to ensure high-performance web apps.',
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="FAQs" className="faq section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <p>Find answers to the most common questions about my process, pricing, and how we can work together.</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqData.map((item, index) => (
                <div
                  className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                  key={index}
                >
                  <h3 onClick={() => toggleFAQ(index)}>{item.question}</h3>
                  <div className="faq-content">
                    <p>{item.answer}</p>
                  </div>
                  <i
                    className={`faq-toggle bi ${
                      activeIndex === index ? 'bi-chevron-down' : 'bi-chevron-right'
                    }`}
                    onClick={() => toggleFAQ(index)}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
