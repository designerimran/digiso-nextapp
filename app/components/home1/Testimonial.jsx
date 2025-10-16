"use client";
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { home1Testimonial } from '@/getData/getData';
import Img from '../common/Img';


export default function Testimonial() {
  const [testimonialData, settestimonialData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const testimonial = await home1Testimonial();
      settestimonialData(testimonial);
    }
    fetehData();
  }, []);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  };

  return (
    <section className="testimonial-section position-relative z-1"
      style={{ background: 'url(assets/img/testimonial/testimonial-img.png)' }}>
      <div className="overlay w-100 h-100">
        <div className="container px-0 testimonial-container position-relative">
        <div className="lines position-absolute d-none d-xl-flex justify-content-between w-100 bottom-0 z-n1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
          <div className="row">
            <div className="col-lg-5 col-md-4">
              <div className="testimonial-info">
                <h4 className="title text-uppercase">{testimonialData.title}</h4>
                <div className="image-group">
                  <ul className="list-unstyled d-flex">
                    {testimonialData.imgs && testimonialData.imgs.map((item, index) => (
                      <li key={index} className="overflow-hidden rounded-pill">
                        <Img src={item.img}
                          alt="testmonial-img" className="img-fluid w-100 h-100 object-fit-cover" />
                      </li>
                    ))}
                  </ul>
                  <p>{testimonialData.content}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-8">
              <Slider {...settings} className="testimonial-slider w-100">
                {testimonialData.slide && testimonialData.slide.map((item, index) => (
                  <div key={index} className="slider-item">
                    <div className="user">
                      <h4 className="name">{item.name}</h4>
                      <h4 className="designation">{item.designation}</h4>
                    </div>
                    <p>{item.content}</p>
                  </div>
                ))}
              </Slider>
              <Link className="view-all-btn2" href="#">
                <span className="btn-wrap">
                  <span className="text-one">{testimonialData.btn_name}</span>
                  <span className="text-two">{testimonialData.btn_name}</span>
                </span>
                <Img className="ms-1" src="assets/img/icons/icon-right-white.svg" alt="icon-right-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
