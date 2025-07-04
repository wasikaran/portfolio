import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const text = `*New Portfolio Contact Message*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📝 *Subject:* ${subject}\n💬 *Message:* ${message}`;

    const url = `https://wa.me/923353683239?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="contact section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="content" data-aos="fade-up" data-aos-delay="200">
              <div className="section-category mb-3">Contact</div>
              <h2 className="display-5 mb-4">Ready to start your project?</h2>
              <p className="lead mb-4">Let’s connect and make something amazing.</p>

              <div className="contact-info mt-5">
                <div className="info-item d-flex mb-3">
                  <i className="bi bi-envelope-at me-3"></i>
                  <span>wasik5738@gmail.com</span>
                </div>
                <div className="info-item d-flex mb-3">
                  <i className="bi bi-telephone me-3"></i>
                  <span>+92 3353683239</span>
                </div>
                <div className="info-item d-flex mb-4">
                  <i className="bi bi-geo-alt me-3"></i>
                  <span>new lyari express, taiser town, surjani town, karachi</span>
                </div>

                <a href="https://maps.google.com" target="_blank" className="map-link d-inline-flex align-items-center" rel="noreferrer">
                  Open Map
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-form card" data-aos="fade-up" data-aos-delay="300">
              <div className="card-body p-4 p-lg-5">
                <form onSubmit={handleWhatsAppSubmit}>
                  <div className="row gy-4">
                    <div className="col-12">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required onChange={handleChange} />
                    </div>
                    <div className="col-12">
                      <input type="email" name="email" className="form-control" placeholder="Your Email" required onChange={handleChange} />
                    </div>
                    <div className="col-12">
                      <input type="text" name="subject" className="form-control" placeholder="Subject" required onChange={handleChange} />
                    </div>
                    <div className="col-12">
                      <textarea name="message" rows="6" className="form-control" placeholder="Message" required onChange={handleChange}></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-submit w-100">Send via WhatsApp</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
