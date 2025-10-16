"use client";
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import $ from 'jquery';
import BlogItem from './BlogItem';
import { getblog } from '@/getData/getData';
import SplitText2 from '../common/Split_text2';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}
export default function BlogSection2(props) {
  const [blogData, setblogData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const data = await getblog();
      setblogData(data);
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
  }, { dependencies: [blogData], scope: fadeupRef, revertOnUpdate: true });

  return (
    <div ref={fadeupRef} className="related-blog content">
      <div className="section-title-block">
        <SplitText2 cls="section-title" line1={props.heading} />
      </div>
      <div className="row gy-4">
        {blogData && blogData.slice(0,3).map((item, index) => (
          <BlogItem key={index} img={item.img} title={item.title} postby={item.postby}
            postbylink={item.postbylink} date={item.date} btn={item.btn} btnlink={`/blog_details/${item.id}`} />
        ))}
      </div>
    </div>
  )
}
