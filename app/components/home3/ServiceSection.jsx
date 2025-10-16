"use client";
import Link from 'next/link';
import React from 'react'
import Button2 from '../buttons/Button2';
import Img from '../common/Img';

export default function ServiceSection({serviceData,headingData}) {
  return (
    <section className="services-section services-section-three content">
      <div className="container px-0">
        <div className="row">
          <div className="col-lg-5 pe-lg-0">
            <div className="service-short-info">
              <div className="section-title-block">
                <h3 className="section-title split-text right">{headingData.serviceTitle}</h3>
              </div>
              <p>{headingData.serviceContent}</p>
              <div className="view-all-services d-flex justify-content-center justify-content-md-start">
                <Link className="view-all-btn" href="/service">
                  {headingData.serviceBtn}
                  <div className="icon"><Img src="assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ms-auto">
            <div className="row">
              {serviceData && serviceData.slice(1, 4).map((item, index) => (
                <div key={index} className="col-lg-12 fade-up">
                  <div className="service-item-two d-flex">
                    <div className="icon"><Img src={item.icon} alt="service-icon" />
                    </div>
                    <div className="text">
                      <h4 className="title">{item.title}</h4>
                      <p>{item.content}</p>
                      <Button2 name={item.btn_name2} location={`/service_details/${item.id}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
