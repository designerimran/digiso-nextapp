"use client";
import Link from 'next/link';
import React from 'react'
import Button2 from '../buttons/Button2';
import Img from '../common/Img';
import SplitText2 from '../common/Split_text2';

export default function TeamSection({headingData,teamData}) {
  return (
    <section className="team-section-two content">
      <div className="container px-0">
        <div className="team-section-top-info">
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-5 col-lg-6 align-self-end order-2 order-lg-1">
              <p>{headingData.content} </p>
              <Button2 cls="mt-4" name={headingData.teamBtn} location="/team" />
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6 ms-auto order-1 order-lg-2">
              <div className="section-title-block">
                <h5 className="section-sub-title">
                  <span className="shape d-block">
                    <Img src="assets/img/we-provide/section-sub-title-shape.svg" alt="section-sub-title-shape" />
                  </span>
                  {headingData.teamSubTitle}
                </h5>
                {/* <h3 className="section-title split-text right">{headingData.teamTitle}</h3> */}
                <SplitText2 cls="section-title " line1={headingData.teamTitle} />
              </div>
            </div>
          </div>
        </div>
        <div className="row team-row">
          {teamData && teamData.slice(0, 3).map((item, index) => (
            <div key={index} className="col-lg-4 col-sm-6 team-label fade-up">
              <div className={`team-item ${item.cls}`}>
                <div className="img">
                  <Img src={item.img2} alt="team-2-img" className="img-fluid w-100" />
                </div>
                <div className="text">
                  <Link href="/team" className="title">{item.name}</Link>
                  <p>{item.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
