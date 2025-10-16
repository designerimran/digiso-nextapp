"use client";
import React from 'react'
import Button1 from '../buttons/Button1';
import Link from 'next/link';
import Img from '../common/Img';
import SplitText2 from '../common/Split_text2';

export default function AboutSection({aboutData}) {
  return (
    <section className="about-us-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-text">
              <div className="section-title-block">
                <h5 className="section-sub-title">
                  <span className="shape d-block">
                    <Img src="assets/img/we-provide/section-sub-title-shape.svg" alt="section-sub-title-shape" />
                  </span>
                  {aboutData.subtitle}
                </h5>
                {/* <h3 className="section-title split-text right">{aboutData.title}</h3> */}
                <SplitText2 cls="section-title split-text right" line1={aboutData.title} />
              </div>
              <h4 className="inner-title">{aboutData.innertitle}</h4>
              <p>{aboutData.content}</p>
              <Button1 name={aboutData.btn} location="/about" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image position-relative">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-6">
                  <div className="img img-one position-relative reveal left">
                    <Img src={aboutData.img1} alt="about-1-img" className="img-fluid w-100" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-6">
                  <div className="img img-two reveal left">
                    <Img src={aboutData.img2} alt="about-1-img" className="img-fluid w-100" />
                  </div>
                </div>
              </div>
              <div
                className="play position-absolute d-flex justify-content-center align-items-center custom-wrapper-hover custom-inner-hover">
                <div className="about-video-text position-absolute top-50 start-50 translate-middle">
                  <Img src={aboutData.videoImg} alt="about-video-text" />
                </div>
                <Link className="vidplay position-relative" href={`${aboutData.video}`}>
                  <span className="d-inline-flex justify-content-center align-items-center"><Img
                    src="assets/img/icons/about-video-icon.svg" alt="about-video-icon" /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
