"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from "gsap/SplitText";
import { useGSAP } from '@gsap/react';
import $ from 'jquery';
// import 'magnific-popup';
//include components
import FooterSection from '../components/about/FooterSection';
import CallToAction from '../components/about/CallToAction';
import { getblog, home3, service } from '@/getData/getData';
import TextMarquee from '../components/common/TextMarquee';
import BlogSection from '../components/home3/BlogSection';
import TestimonialSection from '../components/home3/TestimonialSection';
import FeatureSection from '../components/home3/FeatureSection';
import ProjectSection from '../components/home3/ProjectSection';
import ServiceSection from '../components/home3/ServiceSection';
import AboutSection from '../components/home3/AboutSection';
import BannerSection from '../components/home3/BannerSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home3() {
  useEffect(() => {
    document.title = "Home3 – Digiso - Digital Business Branding Agency React Template"
  })

  const [bannerData, setbannerData] = useState([]);
  const [featureData, setfeatureData] = useState([]);
  const [aboutData, setaboutData] = useState([]);
  const [headingData, setheadingData] = useState([]);
  const [projectData, setprojectData] = useState([]);
  const [serviceData, setserviceData] = useState([]);
  const [testimonialData, settestimonialData] = useState([]);
  const [blogData, setblogData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      setbannerData(await home3('banner'));
      setfeatureData(await home3('feature'));
      setaboutData(await home3('about'));
      setheadingData(await home3('allheading'));
      setserviceData(await service());
      setprojectData(await home3('project'));
      settestimonialData(await home3('testimonial'));
      setblogData(await getblog());
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
  }, { dependencies: [serviceData, featureData, blogData], scope: fadeupRef, revertOnUpdate: true });

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    let st = $(".split-text");

    if (st.length > 0) {
      st.each((index, el) => {
        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "tp-split-line",
        });

        gsap.set(el, { perspective: 400 });

        let charsAnimation = { opacity: 0 };

        if ($(el).hasClass('right')) {
          charsAnimation.x = "50";
        } else if ($(el).hasClass('left')) {
          charsAnimation.x = "-50";
        } else if ($(el).hasClass('up')) {
          charsAnimation.y = "80";
        } else if ($(el).hasClass('down')) {
          charsAnimation.y = "-80";
        }

        gsap.set(el.split.chars, charsAnimation);

        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          x: "0",
          y: "0",
          rotateX: "0",
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.02,
        });
      });
    }
  }, [bannerData, aboutData, projectData, featureData, blogData, headingData]);

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
    <div ref={fadeupRef}>
      {/* main area start  */}
      <main className="position-relative">
        {/* lines  */}
        <div className="inner-page-lines position-absolute d-flex justify-content-between w-100 top-0 bottom-0 z-n1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* banner section three start  */}
        <BannerSection bannerData={bannerData} />
        {/* banner section three end  */}
        {/* about us section two start  */}
        <AboutSection aboutData={aboutData} />
        {/* about us section two end  */}
        {/* services section two start  */}
        <ServiceSection serviceData={serviceData} headingData={headingData} />
        {/* services section two end  */}
        {/* project section three start  */}
        <ProjectSection projectData={projectData} />
        {/* project section three end  */}
        {/* text slider section start  */}
        <TextMarquee />
        {/* text slider section end  */}
        {/* feature section three start  */}
        <FeatureSection featureData={featureData} />
        {/* feature section three end  */}
        {/* testimonial section three start  */}
        <TestimonialSection testimonialData={testimonialData} />
        {/* testimonial section three end  */}
        {/* blog section three start  */}
        <BlogSection headingData={headingData} blogData={blogData} />
        {/* blog section three end  */}
        {/* call to action section start  */}
        <CallToAction />
        {/* call to action section end  */}
      </main>
      {/* main area end  */}
      <FooterSection />
    </div>
  )
}
