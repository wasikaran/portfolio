// src/components/ABGKSwiper.jsx
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Autoplay } from "swiper/modules";
import 'swiper/css'; // Make sure to import Swiper's core CSS

const ABGKSwiper = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const images = [
    "/images/food-distribution-ABGK.jpg",
    "/images/poverty-ABGK.jpg",
    "/images/students-ABGK.jpg",
    "/images/water-help-ABGK.jpg",
    "/images/medical-camp-ABGK.jpg",
    "/images/ration-ABGK.jpg"
  ];

  return (
    <div className="Animal-experiences-section" data-aos="fade-up" data-aos-delay="200">
      <Swiper style={{ height: '500px' }}
        modules={[Autoplay]}
        className="mySwiper"
        slidesPerView={6}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={4000}
        allowTouchMove={false}
        freeMode={true}
        freeModeMomentum={false}
        direction="horizontal" // Explicitly set to horizontal
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          400: { slidesPerView: 2 },
          350: { slidesPerView: 2 },
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`Slide ${i}`} style={{ width: '100%', height: '400px' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ABGKSwiper;