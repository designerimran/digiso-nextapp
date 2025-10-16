"use client";
import React, { useEffect, useRef, useState } from 'react'
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import $ from 'jquery';
import { service, servicePage } from '@/getData/getData';
import Button2 from '../buttons/Button2';
import SplitText2 from '../common/Split_text2';
import Link from 'next/link';
import Img from '../common/Img';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ServiceSection() {
  const [serviceData, setData] = useState([]);
  const [serviceData2, setData2] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const data = await service();
      const data2 = await servicePage("specialservice");
      setData(data);
      setData2(data2);
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
  }, { dependencies: [serviceData, serviceData2], scope: fadeupRef, revertOnUpdate: true });

  return (
    <div ref={fadeupRef}>
      {/* services section two start  */}
      <section className="services-section services-section-four content">
        <div className="container px-0">
          <div className="row">
            {serviceData && serviceData.filter((item) => Number(item.id) > 1).map((item, index) => (
              <div key={index} className="col-lg-6 fade-up">
                <div className="service-item-two d-flex black-border">
                  <div className="icon"><Img src={item.icon} alt="service-icon" />
                  </div>
                  <div className="text">
                    <h4 className="title">{item.title}</h4>
                    <p>{item.content}</p>
                    <Button2 name={item.btn_name2} location={`service_details/${item.id}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* services section two end  */}
      {/* service rebrand section start  */}
      <section className="special-service-section content">
        <div className="container px-0">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title-block text-center">
                <h5 className="section-sub-title">
                  {serviceData2.subtitle}
                </h5>
                <SplitText2 cls="section-title" line1={serviceData2.title} />
              </div>
            </div>
          </div>
          <div className="special-service-main">
            <div className="row g-4">
              {serviceData2.services && serviceData2.services.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 fade-up">
                  <Link href={`service_details/${item.id}`} className="d-block w-100">
                    <div className="special-service-item position-relative">
                      <div className="text">
                        <h3 className="title">{item.title}</h3>
                      </div>
                      <div className="img text-end">
                        <Img src={item.img} alt="service-rebrand-img" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* service rebrand section end  */}
    </div>
  )
}
