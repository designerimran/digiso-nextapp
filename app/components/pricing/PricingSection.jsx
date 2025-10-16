"use client";
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import $ from 'jquery';
import Button2 from '../buttons/Button2';
import { pricing } from '@/getData/getData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function PricingSection() {
  const [pricingData, setData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const data = await pricing();
      setData(data.pricings);
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
  }, { dependencies: [pricingData], scope: fadeupRef, revertOnUpdate: true });
  return (
    <section ref={fadeupRef} className="pricing-section content">
      <div className="container px-0">
        <div className="row gy-4">
          {pricingData && pricingData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mx-auto mx-lg-0 fade-up">
              <div className={`pricing-item ${item.active}`}>
                <h3 className="pricing-title">{item.pricing_title}</h3>
                <h5 className="package-title">{item.package_title}</h5>
                <h6 className="price">{item.price}
                  <span className="text-decoration-line-through">{item.oldprice}</span></h6>
                <ul className="list-unstyled pricing-info">
                  {item.list && item.list.map((it, idx) => (
                    <li key={idx}><span>{it.icon}</span> {it.title}</li>
                  ))}
                </ul>
                <Button2 name={item.btn} location={item.btn_link} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
