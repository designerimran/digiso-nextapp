"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import $ from 'jquery';
import Revealimg from '../team/Revealimg';
import Faqbody from './Faqbody';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function FaqSection({data}) {
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
          stagger: 0.2,
        });
      }
    });
  }, { dependencies: [data], scope: fadeupRef, revertOnUpdate: true });
  return (
    <section className="faq-section content" ref={fadeupRef}>
      <div className="container px-0">
        <div className="row">
          <div className="col-xl-7 col-lg-6 fade-up">
            <Faqbody data={data} />
          </div>
          <div className="col-xl-5 col-lg-6">
            <Revealimg cls="faq-image right" img={data.img} />
          </div>
        </div>
      </div>
    </section>
  )
}
