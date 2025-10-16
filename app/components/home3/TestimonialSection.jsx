"use client";
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from '../common/Img';

export default function TestimonialSection({ testimonialData }) {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnHover: true,
    infinite: true,
    arrows: false,
    // speed: 500,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  };

  return (
    <section className="testimonial-section-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-2 order-lg-1">
            <div className="short-info">
              <p>{testimonialData.content}</p>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 ms-auto">
            <div className="section-title-block">
              <h3 className="section-title split-text right">{testimonialData.title}</h3>
            </div>
          </div>
        </div>
        <div className="testimonial-main">
          <div className="row">
            <div className="col-lg-9 pe-md-0">
              <div className="testimonial-three-slider position-relative"
                style={{ backgroundImage: testimonialData.img? `url('${testimonialData.img}')` : null, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                <div className="testimonial-three-slider-main">
                  <Slider {...settings}>
                    {testimonialData.slides && testimonialData.slides.map((item, index) => (
                      <div key={index} className="slider-item">
                        <p>{item.content}
                        </p>
                        <div className="customer-info d-flex justify-content-between">
                          <div className="rating d-inline-flex">
                            {item.star && item.star.map((it, idx) => (
                              <Img key={idx} src={it} alt="star" />
                            ))}
                          </div>
                          <div className="user d-flex align-items-center">
                            <div className="img">
                              <Img src={item.img} alt="testmonial-img" />
                            </div>
                            <div className="text">
                              <h4 className="name">{item.author}</h4>
                              <p className="designation">{item.designation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-lg-3 ps-0">
              <div className="testimonial-info">
                <div className="quote text-center">
                  <Img src={testimonialData.quoteImg} alt="quote-2" />
                </div>
                <div className="customer-img d-flex justify-content-center">
                  {testimonialData.customerImg && testimonialData.customerImg.map((item, index) => (
                    <div key={index} className="img">
                      <Img src={item} alt="testmonial-img" />
                    </div>
                  ))}
                  <div className="img position-relative">
                    <Img src={testimonialData.img2} alt="testmonial-img" />
                    <div
                      className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                      <span>{testimonialData.customers}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
