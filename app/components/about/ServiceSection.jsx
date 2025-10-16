"use client";
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import $ from 'jquery';

import { about, service } from '@/getData/getData';
import SplitText2 from '../common/Split_text2';
import Button2 from '../buttons/Button2';
import Link from 'next/link';
import Img from '../common/Img';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger,useGSAP);
}

export default function ServiceSection() {
  const [serviceData, setdata] = useState([]);
  const [headingData, setheaderData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const aboutData = await about();
      const Data = await service();
      setdata(Data);
      setheaderData(aboutData.service);
    }
    fetehData();
  }, []);

  const fadeupRef = useRef([]);
  useGSAP(() => {
    $(".content").each(function (i) {
      let target = $(this).find(".fade-up");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: 'top 70%',
          toggleActions: 'play none none none',
          markers: false,
        }
      });

      if (target.length) {
        tl.from(target, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.3,
        });
      }
    });
  }, { dependencies: [serviceData], scope: fadeupRef, revertOnUpdate: true });

  return (
    <section ref={fadeupRef} className="services-section services-section-two custom-services">
      <div className="container">
        <div className="services-top-info">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="section-title-block">
                <SplitText2 cls="section-title" line1={headingData.title} />
              </div>
            </div>
            <div className="col-lg-6">
              <p className='mb-4' >{headingData.content}</p>
              <Button2 name={headingData.btn} location="/service" />
            </div>
          </div>
        </div>
        <div className="services-main content">
          {serviceData && serviceData.slice(0, 4).map((item, index) => (
            <div key={index} className="services-item fade-up">
              <Link href={`/service_details/${item.id}`}
                className="d-flex justify-content-between gap-4 row-gap-3 flex-wrap align-items-center w-100">
                <h5 className="number w-100">{item.number}</h5>
                <h3 className="title w-100">{item.title}</h3>
                <p className="des w-100">{item.content}</p>
                <div className="icon w-100 position-relative">
                  <Img src="assets/img/icons/icon-right.svg" alt="icon-right" />
                  <span className="view-all-btn view-all-btn-primary position-absolute end-0">
                    {item.btn_name}
                    <span className="icon"><Img src="assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></span>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
