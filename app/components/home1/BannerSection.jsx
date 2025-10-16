"use client";
import React, { useEffect, useState } from 'react'
import { home1Banner } from '@/getData/getData';
import Split_text from '../common/Split_text'
import Link from 'next/link'
import Img from '../common/Img';

export default function BannerSection() {
  
  // const bannerData = await home1Banner();


  const [bannerData, setbannerData] = useState([]);
  useEffect(()=>{
    const fetehData = async () => {
      const result = await home1Banner();
      setbannerData(result);
    }
    fetehData();
  },[]);


  return (
    <div>
      {/* <!-- banner section start --> */}
      <section className="banner-section position-relative content z-1">
        <div className="container banner-container px-0 position-relative">
        <div className="lines position-absolute d-none d-xl-flex justify-content-between w-100 bottom-0 z-n1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="banner-text position-relative">
                <Link href="#" className="banner-btn d-flex justify-content-between">{bannerData.btn_name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" /></svg>
                </Link>
                <Split_text cls="banner-title" line1={bannerData.title_line1} line2={bannerData.title_line2} line3={bannerData.title_line3} />
                <Img src="/assets/img/images/banner-shape.svg" alt="banner-shape"
                  className="banner-shape-line position-absolute d-none d-lg-block" />
                <p className="ms-auto">{bannerData.content}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="banner-image position-relative fade-up">
                <Img src="/assets/img/images/banner-img-shape.png" alt="banner-img-shape" className="img-fluid w-100" />
                <Img className="banner-img position-absolute img-fluid w-100" src={bannerData.img}
                  alt="banner-img" />
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* <!-- banner section end --> */}
      {/* <!-- brand slider section start --> */}
      <div className="brand-slider-section overflow-hidden position-relative z-1">
        <div className="slider-main d-flex gap-4 align-items-center">
          <div className="slider-item d-flex">
            {bannerData.marquee && bannerData.marquee.map((item, index) => (
              <Link key={index} href={`${item.link}`}><Img src={item.img} alt="brand-img" /></Link>
            ))}
          </div>
          <div className="slider-item d-flex">
            {bannerData.marquee && bannerData.marquee.map((item, index) => (
              <Link key={index} href={`${item.link}`}><Img src={item.img} alt="brand-img" /></Link>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- brand slider section end --> */}
    </div>
  )
}
