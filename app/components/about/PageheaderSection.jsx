"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import $ from 'jquery';

import { about } from '@/getData/getData';
import Button1 from '../buttons/Button1';
import SplitText2 from '../common/Split_text2';
import BannerSection from './BannerSection';
import Img from '../common/Img';

export default function PageheaderSection() { 
  const [data, setdata] = useState([]);
  const [headerData, setheaderData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const aboutData = await about()
      setdata(aboutData);
      setheaderData(aboutData.pageheader);
    }
    fetehData();
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
    <>
    <section className="page-header">
      <div className="container px-0">
        <div className="row">
          <div className="col-lg-8 align-self-center">
            <SplitText2 cls="page-sub-title2 w-10" line1={headerData.subTitle} /> 
          </div>
          <div className="col-lg-3 ms-auto align-self-end">
            <div className="rotate-img position-relative d-flex justify-content-center align-items-center text-center">
              <Img src={headerData.rotate_img} alt="rotate-text" />
              <Link className="video-rotate-btn vidplay position-absolute top-50 start-50 translate-middle"
                href={`${headerData.video}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-player-play">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
              </Link>
            </div>
          </div>
          <div className="col-lg-9 ms-auto">
            <p className="short-info about-short-info position-relative">
              <Img className="position-absolute page-header-shape2 about-shape"
                src="assets/img/images/page-header-shape2.svg" alt="page-header-shape2" />
              {headerData.content}</p>
            <Button1 name={headerData.btnName} location="/about" />
          </div>
        </div>
        <h1 className="page-title text-uppercase position-absolute z-n1 pricing-title">{headerData.title}</h1>
      </div>
    </section>
    {/* about us banner section start  */}
    <BannerSection img={data.bannerImg} />
    {/* about us banner section end  */}
    </>
  )
}
