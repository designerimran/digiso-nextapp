"use client";

import React, { useEffect, useState, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { servicePage } from '@/getData/getData';
import SplitText2 from '../common/Split_text2';
import Img from '../common/Img';

export default function TestimonialSection() {
  const [testimonialData, setData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const data = await servicePage("testimonial");
      setData(data);
    }
    fetehData();
  }, []);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
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
  const settings2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    dots: false,
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
    <section className="testimonial-section-four">
      <div className="container px-0">
        <div className="row">
          <div className="col-lg-8 col-xxl-7 mx-auto">
            <div className="section-title-block text-center">
              <h5 className="section-sub-title">
                {testimonialData.subtitle}
              </h5>
              <SplitText2 cls="section-title" line1={testimonialData.title} />
            </div>
          </div>
        </div>
        <div className="testimonial-main">
          <div className="row testimonial-row">
            <Slider {...settings} asNavFor={nav2} ref={slider => (sliderRef1 = slider)} className="order-2 order-md-1 col-xl-9 col-lg-8 col-md-8 tes-four-text-slider">
              {testimonialData.slide && testimonialData.slide.map((item,index)=>(
              <div key={index} className="slider-item">
                <ul className="list-unstyled">
                  <li className="d-inline-flex">{item.num}</li>
                  <li className="d-inline-flex icon">
                    {item.star && item.star.map((it,idx)=>(
                    <Img key={idx} src={it} alt="star" />
                    ))}
                  </li>
                  <li className="d-inline-flex review">{item.title}</li>
                </ul>
                <p>{item.content}</p>
              </div>
              ))}
            </Slider>
            <Slider {...settings2} asNavFor={nav1} ref={slider => (sliderRef2 = slider)} className="order-1 order-md-2 col-xl-3 col-lg-4 col-md-4 tes-four-img-slider">
            {testimonialData.slide2 && testimonialData.slide2.map((item,index)=>(
              <div key={index} className="slider-item text-center">
                <div className="img">
                  <Img src={item.img} alt="testimonial-2-img" />
                </div>
                <div className="text text-start">
                  <h3 className="name">{item.name}</h3>
                  <p className="designation">{item.designation}</p>
                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}
