"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import $ from 'jquery';
import dynamic from 'next/dynamic';
// components
let VideoSection = dynamic(() => import('../components/home1/VideoSection'), { ssr: false });
// import VideoSection from "../components/home1/VideoSection"; 
import BannerSection from '../components/home1/BannerSection';
import FeatureSection from "../components/home1/FeatureSection";
import ServiceSection from '../components/home1/ServiceSection';
import TextMarquee from '../components/common/TextMarquee';
import Testimonial from "../components/home1/Testimonial";
// import ProjectSection from '../components/home1/ProjectSection';
let ProjectSection = dynamic(() => import('../components/home1/ProjectSection'), { ssr: false });
import TeamSection from '../components/home1/TeamSection';
import BlockSection from '../components/home1/BlockSection';
import FooterSection from '../components/home1/FooterSection';
import { home1Feature } from '@/getData/getData';
import { home1Project } from '@/getData/getData';
import { home1Heading, team } from '@/getData/getData';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger,useGSAP);
}

export default function Home1() {
  useEffect(() => {
    document.title = "Home1 – Digiso - Digital Business Branding Agency React Template"
  })

  const [headingData, setheadingData] = useState([]);
  const [featureData, setfeatureData] = useState([]);
  const [projectData, setprojectData] = useState([]);
  const [teamData, setteamData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const result = await home1Feature();
      setfeatureData(result);
      const result2 = await home1Project();
      setprojectData(result2);
      const result3 = await team();
      setteamData(result3);
      const result4 = await home1Heading();
      setheadingData(result4);
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
  }, { dependencies: [featureData, projectData, teamData], scope: fadeupRef, revertOnUpdate: true });

  return (
    <div ref={fadeupRef} className="">
      <main>
        {/* banner section start */}
        <BannerSection />
        {/* banner section end */}

        {/* feature section start */}
        <FeatureSection featureData={featureData} />
        {/* feature section end */}

        {/* video section start */}
        <VideoSection />
        {/* video section end */}

        {/* Services section start */}
        <ServiceSection />
        {/* Services section end */}

        {/* text slider section start */}
        <TextMarquee />
        {/* text slider section end */}

        {/* projects section start */}
        <ProjectSection projectData={projectData} />
        {/* projects section end */}

        {/* team section start */}
        <TeamSection teamData={teamData} headingData={headingData} />
        {/* team section end */}

        {/* testimonial section start */}
        <Testimonial />
        {/* testimonial section end */}

        {/* blog section start */}
        <BlockSection headingData={headingData} />
        {/* blog section end */}
      </main>
      {/* main area end */}

      {/* footer section start */}
      <FooterSection />
    </div>
  )
}
