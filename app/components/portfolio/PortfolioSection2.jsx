"use client";

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import $ from 'jquery';

import PortfolioBlock from './PortfolioBlock'
import { portfolioProject } from '@/getData/getData';
import SplitText2 from '../common/Split_text2';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function PortfolioSection2(props) {
  const [projectData, setData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const data = await portfolioProject();
      setData(data);
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
  }, { dependencies: [projectData], scope: fadeupRef, revertOnUpdate: true });

  return (
    <div ref={fadeupRef} >
      <div className="portfolio-section related-project-section content">
        <div className="container px-0">
          <div className="section-title-block">
            {/* <h3 className="section-title split-text right">Related Projects</h3> */}
            <SplitText2 cls="section-title" line1={props.heading} />
          </div>
          <div className="row">
            {projectData.projects && projectData.projects.slice(props.fastindex, props.lastindex).map((item, index) => (
              <PortfolioBlock key={index} img={item.img} title={item.title} btn={item.btn} link={`/portfolio_details/${item.id}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
