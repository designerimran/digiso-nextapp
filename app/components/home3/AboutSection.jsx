"use client";
import Link from 'next/link';
import React from 'react'
import Img from '../common/Img';

export default function AboutSection({aboutData}) {
  return (
    <section className="about-us-section-two position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="about-content section-title-block text-center">
              <h3 className="title section-title split-text right">{aboutData.title}</h3>
              <p>{aboutData.content}</p>
            </div>
          </div>
        </div>
        <div className="logos">
          <div className="row g-3">
            {aboutData.brand && aboutData.brand.map((item, index) => (
              <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="logo">
                  <Link href="#">
                    <Img src={item.img} alt="about-logo" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-video custom-wrapper-hover">
          <div className="img reveal zoom-out position-relative">
            <Img src={aboutData.img} alt="about-us-img" className="img-fluid w-100" />
            <div
              className="rotate-img about-video-box mt-0 position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center text-center">
              <Img src={aboutData.rotateImg} alt="about-video-text-white" />
              <Link className="video-rotate-btn vidplay position-absolute top-50 start-50 translate-middle"
                href={`${aboutData.video}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-player-play">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 4v16l13 -8z" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
