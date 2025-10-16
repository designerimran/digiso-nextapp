"use client";
import Link from 'next/link';
import React from 'react'
import Button2 from '../buttons/Button2';
import Img from '../common/Img';
import SplitText2 from '../common/Split_text2';

export default function ServiceSection({serviceData, headingData}) {
  return (
    <section className="services-section services-section-two">
      <div className="container">
        <div className="services-top-info">
          <div className="row g-4">
            <div className="col-lg-6 col-md-7 order-2 order-md-1">
              <p>{headingData.content} </p>
              <Button2 cls="mt-4" name={headingData.serviceBtn} location="/service" />
            </div>
            <div className="col-lg-4 col-md-5 ms-auto order-1 order-md-2">
              <div className="section-title-block">
                <h5 className="section-sub-title">
                  <span className="shape d-block">
                    <Img src="assets/img/we-provide/section-sub-title-shape.svg" alt="section-sub-title-shape" />
                  </span>
                  {headingData.serviceSubTitle}
                </h5>
                {/* <h3 className="section-title split-text right">{headingData.serviceTitle}</h3> */}
                <SplitText2 cls="section-title " line1={headingData.serviceTitle} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-main">
        {serviceData && serviceData.slice(0, 4).map((item, index) => (
          <div key={index} className="services-item fade-up">
            <div className="container">
              <Link href={`/service_details/${item.id}`}
                className="d-flex justify-content-between gap-4 row-gap-3 flex-wrap align-items-center w-100">
                <h5 className="number w-100">{item.number}</h5>
                <h3 className="title w-100">{item.title}</h3>
                <p className="des w-100">{item.content}</p>
                <div className="icon w-100 position-relative">
                  <Img src="assets/img/icons/icon-right.svg" alt="icon-right" />
                  <span className="view-all-btn view-all-btn-primary position-absolute end-0">
                    {item.btn_name}
                    <span className="icon"><Img src="assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
