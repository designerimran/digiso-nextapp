"use client";
import Link from 'next/link';
import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Button3 from '../buttons/Button3';
import { getblog, home1Heading } from '@/getData/getData';
import Button2 from '../buttons/Button2';
import Split_text2 from '../common/Split_text2';
import Img from '../common/Img';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlockSection({headingData}) {

  const [blogData, setblogData] = useState([]);
  // const [headingData, setheadingData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const blog = await getblog(); 
      // const headingData = await home1Heading();
      setblogData(blog);
      // setheadingData(headingData);
    }
    fetehData();
  }, []);

  useEffect(() => {
    let hoverBtns = gsap.utils.toArray(".custom-wrapper-hover");
    const hoverBtnItems = gsap.utils.toArray(".custom-inner-hover");
  
    // Loop over each button wrapper
    hoverBtns.forEach((btn, i) => {
      const target = hoverBtnItems[i]; // Corresponding inner hover element
  
      // Ensure the event listener uses correct index for hover elements
      btn.addEventListener("mousemove", (e) => {
        callParallax(e, target);
      });
  
      btn.addEventListener("mouseleave", () => {
        // Reset the parallax effect on mouse leave
        gsap.to(target, { x: 0, y: 0, duration: 1, ease: "power2.out" });
      });
    });
  
    // Function to calculate and apply parallax effect
    function callParallax(e, target) {
      const movement = 40; // Define movement scale
      const rect = e.currentTarget.getBoundingClientRect(); // Get button's position and size
      const relX = e.clientX - rect.left; // Mouse X relative to element
      const relY = e.clientY - rect.top;  // Mouse Y relative to element
  
      // Apply GSAP animation for parallax effect
      gsap.to(target, {
        x: ((relX - rect.width / 2) / rect.width) * movement,
        y: ((relY - rect.height / 2) / rect.height) * movement,
        duration: 1,
        ease: "power2.out",
      });
    }
  
    // Cleanup event listeners on unmount
    return () => {
      hoverBtns.forEach((btn, i) => {
        const target = hoverBtnItems[i];
        btn.removeEventListener("mousemove", callParallax);
        btn.removeEventListener("mouseleave", () => {
          gsap.to(target, { x: 0, y: 0, duration: 1, ease: "power2.out" });
        });
      });
    };
  });
  

  const [activeIndex, setActiveIndex] = useState(0);
  const handleMouseEnter = (index) => {
    setActiveIndex(index); // Set the currently hovered blog item as active
  };


  return (
    <section className="blog-section position-relative z-1">
      <div className="container px-0 blog-container position-relative">
        <div className="lines position-absolute d-none d-xl-flex justify-content-between w-100 top-0 bottom-0 z-n1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-7">
            <div className="section-title-block">
              <h5 className="section-sub-title">
                <span className="shape d-block">
                  <Img src="assets/img/we-provide/section-sub-title-shape.svg" alt="section-sub-title-shape" />
                </span>
                {headingData.blogSubtitle}
              </h5>
              <Split_text2 cls="section-title" line1={headingData.blogTitle} />
            </div>
          </div>
          <div className="col-lg-7 col-md-5 align-self-end">
            <div className="view-all-article text-end">
              <Button2 name={headingData.blog_btn_name} location="/blog" />
            </div>
          </div>
        </div>
        <div className="blog-main"  >
          {blogData && blogData.slice(0,3).map((item, index) => (
            <div
              key={item.id}
              className={`blog-item custom-wrapper-hover position-relative ${activeIndex === index ? 'blog-active' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div className="row">
                <div className="col-lg-2">
                  <div className="date">
                    <Link href="#">{item.date}</Link>
                  </div>
                </div>
                <div className="col-lg-3">
                  <Link  href={`/blog_details/${item.id}`} className="d-block w-100">
                    <div className="blog-image custom-inner-hover z-1 position-absolute">
                      <Img src={item.imghover} alt="blog-img" className="img-fluid w-100" />
                    </div>
                  </Link>
                </div>
                <div className="col-lg-7">
                  <div className="blog-title d-flex flex-column">
                    <Link href={`/blog_details/${item.id}`} className="title">{item.title}</Link>
                    <Button3 name="Read more" location={`/blog_details/${item.id}`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
