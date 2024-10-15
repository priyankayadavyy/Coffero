import React from "react";
import "./Testimonials.css";
import { testimonials } from "../../Data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import { FaStar } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials container section" id="testimonial">
        <h2 className="section__title" data-title="Testimonials">
          What Client Say's
        </h2>

        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            786: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
        >
          {testimonials.map(({ img, title, service, description }, index) => {
            return (
              <SwiperSlide>
                <div className="testimonials__item" key={index}>
                  <div className="testimonials__qoute">
                    <p className="testimonials__description">{description}</p>
                    <VscTriangleDown className="testimonials__icon" />
                  </div>
                  <div className="testimonials__content">
                    <div className="testimonials__img-wrapper">
                      <img className="testimonials__img" src={img} alt="" />
                    </div>
                    <div>
                      <h3 className="testimonials__title">{title}</h3>
                      <p className="testimonials__service">{service}</p>

                      <div className="testimonials__rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
