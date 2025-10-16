"use client";
import Link from 'next/link';
import React from 'react'
import Testimonial from '../common/Testimonial';
import Img from '../common/Img';
import SplitText2 from '../common/Split_text2';

export default function TestimonialSection({headingData}) {
  return (
    <section className="testimonial-section-two">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-7 align-self-center">
            <div className="section-title-block">
              <h5 className="section-sub-title">
                <span className="shape d-block">
                  <Img src="assets/img/we-provide/section-sub-title-shape.svg" alt="section-sub-title-shape" />
                </span>
                {headingData.testSubtitle}
              </h5>
              {/* <h3 className="section-title split-text right">{headingData.testTitle}</h3> */}
              <SplitText2 cls="section-title " line1={headingData.testTitle} />
            </div>
          </div>
          <div className="col-md-5 align-self-center">
            <div className="d-flex justify-content-center justify-content-md-end">
              <Link className="view-all-btn" href="#">
                {headingData.testBtn}
                <span className="icon"><Img src="assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
    </section>
  )
}
