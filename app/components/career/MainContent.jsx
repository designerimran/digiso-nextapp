"use client";
import React, { useEffect, useRef, useState } from 'react'
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import $ from 'jquery';
import { career } from '@/getData/getData';
import InnerLine from '../common/InnerLine';
import Revealimg from '../team/Revealimg';
import SplitText2 from '../common/Split_text2';
import Link from 'next/link';
import Img from '../common/Img';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function MainContent() {
  const [careerData, setData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const data = await career();
      setData(data);
    }
    fetehData();
  }, []);

  useGSAP(() => {

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
  }, { dependencies: [careerData], scope: fadeupRef, revertOnUpdate: true });

  return (
    <div ref={fadeupRef} >
      {/* main area start  */}
      <main className="position-relative">
        {/* lines  */}
        <InnerLine />
        {/* page header section start  */}
        <section className="page-header">
          <div className="container px-0">
            <div className="row">
              <div className="col-lg-8 align-self-center">
                <SplitText2 cls="page-sub-title2 w-100" line1={careerData.pagesubtitleLine1} line2={careerData.pagesubtitleLine2} />
              </div>
              <div className="col-lg-4 align-self-center">
                <Link className="custom-wrapper-hover custom-inner-hover view-all-btn view-all-btn-primary position-absolute text-uppercase" href="/career_details">
                  {careerData.btn}
                  <div className="icon"><Img src="assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></div>
                </Link>
              </div>
            </div>
            <h1 className="page-title text-uppercase position-absolute z-n1 pricing-title">{careerData.pagetitle}</h1>
          </div>
        </section>
        {/* page header section end  */}
        {/* career banner section start  */}
        <Revealimg cls="career-banner-section zoom-out" img={careerData.bannerImg} />
        {/* career banner section end  */}
        {/* career information section start  */}
        <div className="career-information-section content">
          <div className="container px-0">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="text-center fade-up">
                  <ul className="list-unstyled d-flex justify-content-center align-items-center">
                    {careerData.infoList && careerData.infoList.map((item, index) => (
                      <li key={index} className="text-capitalize position-relative">{item}</li>
                    ))}
                  </ul>
                  <p>{careerData.infoContent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* career information section end  */}
        {/* career inner images section start  */}
        <div className="career-inner-image-section content">
          <div className="container px-0">
            <div className="row">
              {careerData.innerImg && careerData.innerImg.map((item, index) => (
                <div key={index} className={`${item.cls} fade-up`}>
                  <div className="image-item">
                    <Img src={item.img} alt="career-inner-image" className="img-fluid w-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* career inner images section end  */}
        {/* vacancy section start  */}
        <section className="vacancy-section content">
          <div className="container px-0">
            <div className="vacancy-main">
              <div className="row">
                <div className="col-lg-5 offset-xl-1">
                  <div className="section-title-block">
                    <SplitText2 cls="section-title" line1={careerData.vacancyTitle} />
                  </div>
                </div>
              </div>
              {careerData.vacancyItem && careerData.vacancyItem.map((item, index) => (
                <div key={index} className="vacancy-item fade-up d-sm-flex justify-content-between align-items-center gap-4">
                  <div className="number">{item.num}</div>
                  <div className="subject">
                    <h4>{item.subject}</h4>
                  </div>
                  <div className="position">
                    <p>{item.position}</p>
                  </div>
                  <div className="view position-relative">
                    <Link href="#"><Img src="assets/img/icons/icon-right.svg" alt="" /></Link>
                    <Link className="view-all-btn view-all-btn-primary position-absolute" href={`/career_details/${item.id}`}>
                      {item.btn}
                      <div className="icon"><Img src="assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* vacancy section end  */}
        {/* benifits section start  */}
        <section className="benifits-section content">
          <div className="container px-0">
            <div className="row g-4">
              <div className="col-lg-6 col-xl-7 fade-up">
                <div className="benifits-main d-flex align-items-center flex-wrap">
                  {careerData.benifits_item && careerData.benifits_item.map((item, idx) => (
                    <div key={idx} className="benifits-item text-center d-flex justify-content-center align-items-center">
                      <h4>{item}</h4>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 align-self-center">
                <div className="benifits-info">
                  <SplitText2 cls="title" line1={careerData.benifits_title} />
                  <p>{careerData.benifits_content}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* benifits section end  */}
      </main>
      {/* main area end  */}
    </div>
  )
}
