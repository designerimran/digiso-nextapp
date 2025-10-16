"use client";
import React, { useEffect, useRef, useState } from 'react'
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import 'magnific-popup';
import $ from 'jquery';
import Revealimg from '../team/Revealimg';
import SplitText2 from '../common/Split_text2';
import Link from 'next/link';
import Img from '../common/Img';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ServiceDetailSection({data}) {
  //const [Data, setData] = useState([]);
  //useEffect(() => {
    // const fetehData = async () => {
    //   const data = await service();
     // setData(data);
    // }
    // fetehData();
 // }, []);

  useEffect(() => {

    let hoverBtns = gsap.utils.toArray(".custom-wrapper-hover");
    const hoverBtnItem = gsap.utils.toArray(".custom-inner-hover");

    hoverBtns.forEach((btn, i) => {
      $(btn).mousemove(function (e) {
        callParallax(e);
      });

      function callParallax(e) {
        parallaxIt(e, hoverBtnItem[i], 40);
      }

      function parallaxIt(e, target, movement) {
        let $this = $(btn);
        let relX = e.pageX - $this.offset().left;
        let relY = e.pageY - $this.offset().top;

        gsap.to(target, 1, {
          x: ((relX - $this.width() / 2) / $this.width()) * movement,
          y: ((relY - $this.height() / 2) / $this.height()) * movement,
          ease: Power2.easeOut,
        });
      }

      $(btn).mouseleave(function (e) {
        gsap.to(hoverBtnItem[i], 1, {
          x: 0,
          y: 0,
          ease: Power2.easeOut,
        });
      });
    });

  }, []);

  useEffect(() => {
    // Magnific Popup for videos
    $('.vidplay').magnificPopup({
      type: 'iframe',
      iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          '</div>',
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src: 'https://www.youtube.com/embed/%id%?autoplay=1'
          },
        },
        srcAction: 'iframe_src',
      }
    });

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
  }, { dependencies: [data], scope: fadeupRef, revertOnUpdate: true });
  return (
    <div ref={fadeupRef}>
      {/* service details banner section start  */}
      <Revealimg cls="zoom-out service-details-banner-section" img={data.bannerImg}/>
     {/* service details banner section end  */}
     {/* service process section start  */}
    <section className="service-process-section content">
      <div className="container">
        <div className="row g-4">
          {data.service_process && data.service_process.map((item,index)=>(
          <div key={index} className="col-lg-3 col-sm-6 process-label fade-up">
            <div className="service-process-item">
              <span className="dots"></span>
              <h4 className="title">{item.title}</h4>
              <p>{item.content}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
     {/* service process section end  */}
     {/* service brand section start  */}
    <section className="service-brand-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="section-title-block">
                <SplitText2 cls="section-title" line1={data.brandTitle} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div
              className="rotate-img position-relative d-flex justify-content-center justify-content-lg-start align-items-center text-center mx-auto me-lg-auto ms-lg-0 custom-wrapper-hover custom-inner-hover">
              <Img src={data.rotateImg} alt="rotate-text"/>
              <Link className="vidplay video-rotate-btn position-absolute top-50 start-50 translate-middle"
                href={data.brandvideo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-player-play">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
              </Link>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="brand-details">
              <div className="img reveal zoom-out">
                <Img src={data.brandImg} alt="service-brand-img" className="img-fluid w-100"/>
              </div>
              <div className="text">
                <div className="row">
                  <div className="col-lg-6">
                    <p>{data.content2}</p>
                  </div>
                  <div className="col-lg-6">
                    <p>{data.content3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     {/* service brand section end  */}
     {/* faq section start  */}
    <section className="faq-section faq-section-two content">
      <div className="container px-0 position-relative">
        <div className="row">
          <div className="col-lg-5 fade-up">
            <div className="faq-image position-absolute">
              <Img src={data.faqImg} alt="faq-img" className="img-fluid w-100"/>
            </div>
          </div>
          <div className="col-lg-7 mb-5 align-self-center fade-up">
            <div className="faq-body">
              <div className="section-title-block">
                  <SplitText2 cls="section-title" line1={data.faqTitle} />
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  {data.faqItem && data.faqItem.map((item,index)=>(
                  <div key={index} className="accordion-header" id={item.id}>
                    <button className={`accordion-button ${item.collapse}`} type="button" data-bs-toggle="collapse"
                      data-bs-target={`#${item.target}`} aria-expanded={item.aria_expanded} aria-controls={item.target}>
                      {item.question}
                    </button>
                    <div id={item.target} className={`accordion-collapse collapse ${item.show}`} aria-labelledby={item.id}
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     {/* faq section end  */}
    </div>
  )
}
