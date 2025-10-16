"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import SplitText from "gsap/SplitText";
import { useGSAP } from '@gsap/react';
import $ from 'jquery';
// import 'magnific-popup';
import dynamic from 'next/dynamic';
import { home2, service, servicePage, team } from '@/getData/getData';
//components
let BannerSection = dynamic(() => import('../components/home2/BannerSection'), { ssr: false });
import BrandSection from '../components/services/BrandSection';
import FooterSection from '../components/home2/FooterSection';
import BlogSection from '../components/home2/BlogSection';
import TestimonialSection from '../components/home2/TestimonialSection';
import TeamSection from '../components/home2/TeamSection';
import ProjectSection from '../components/home2/ProjectSection';
import TextSliderSection from '../components/home2/TextSliderSection';
import ServiceSection from '../components/home2/ServiceSection';
import AboutSection from '../components/home2/AboutSection';
import FeatureSection from '../components/home2/FeatureSection';
// import BannerSection from '../components/home2/BannerSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home2() {
  useEffect(() => {
    document.title = "Home2 – Digiso - Digital Business Branding Agency React Template"
  })

  const [bannerData, setbannerData] = useState([]);
  const [featureData, setfeatureData] = useState([]);
  const [aboutData, setaboutData] = useState([]);
  const [headingData, setheadingData] = useState([]);
  const [projectData, setprojectData] = useState([]);
  const [serviceData, setserviceData] = useState([]);
  const [teamData, setteamData] = useState([]);
  const [blogData, setblogData] = useState([]);
  const [footerData, setfooterData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const result = await home2('banner');
      setbannerData(result);
      const result1 = await home2('feature');
      setfeatureData(result1);
      setaboutData(await home2('about'));
      setheadingData(await home2('allheading'));
      setserviceData(await service());
      setprojectData(await home2('project'));
      setteamData(await team());
      setblogData(await home2('blog'));
      setfooterData(await servicePage('footer'));
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
          stagger: 0.2,
        });
      }
    });
  }, { dependencies: [featureData, teamData, blogData], scope: fadeupRef, revertOnUpdate: true });

  useGSAP(() => {
    // Image reveal animation
    let revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none none"
        }
      });

      tl.set(container, {
        autoAlpha: 1
      });

      if (container.classList.contains('zoom-out')) {
        tl.from(image, 1.5, {
          scale: 1.4,
          ease: Power2.out
        });
      } else if (container.classList.contains('left') || container.classList.contains('right')) {
        let xPercent = container.classList.contains('left') ? -100 : 100;
        tl.from(container, 1.5, {
          xPercent,
          ease: Power2.out
        });
        tl.from(image, 1.5, {
          xPercent: -xPercent,
          scale: 1,
          delay: -1.5,
          ease: Power2.out
        });
      }
    });
  }, { dependencies: [projectData], scope: fadeupRef, revertOnUpdate: true });

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

  return (
    <div ref={fadeupRef} className="">
      {/* main area start  */}
      <main className="position-relative">
        {/* lines  */}
        <div className="inner-page-lines position-absolute d-flex justify-content-between w-100 top-0 bottom-0 z-n1">
          <span className="opacity-0"></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="opacity-0"></span>
        </div>

        <BannerSection bannerData={bannerData} />

        <FeatureSection featureData={featureData} />

        <AboutSection aboutData={aboutData} />

        <ServiceSection headingData={headingData} serviceData={serviceData} />

        <TextSliderSection headingData={headingData} />

        <ProjectSection projectData={projectData} headingData={headingData} />

        <TeamSection headingData={headingData} teamData={teamData} />

        <TestimonialSection headingData={headingData} />

        <BlogSection blogData={blogData} />

      </main>

      <BrandSection />

      <FooterSection footerData={footerData} headingData={headingData} />

    </div>
  )
}
