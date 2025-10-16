"use client";
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import $ from 'jquery';
import BlogItem from './BlogItem';
import { getblog } from '@/getData/getData';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}
export default function BlockSection() {
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
    <div ref={fadeupRef} className="blog-section-four content">
      <div className="container px-0">
        <div className="row">
          {blogData && blogData.map((item, index) => (
            <BlogItem key={index} img={item.img} title={item.title} postby={item.postby}
              postbylink={item.postbylink} date={item.date} btn={item.btn} btnlink={`/blog_details/${item.id}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
