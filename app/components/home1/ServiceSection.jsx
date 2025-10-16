"use client";
import React, { useEffect, useState } from 'react'
import Split_text2 from '../common/Split_text2'
import Button from '../buttons/Button'
import Link from 'next/link';
import { home1Heading, service } from '@/getData/getData';
import Img from '../common/Img';

export default function ServiceSection() {
  const [serviceData, setserviceData] = useState([]);
  const [headingData, setheadingData] = useState([]);
  useEffect(()=>{
    const fetehData = async () => {
      const result = await service();
      setserviceData(result);
      const result2 = await home1Heading();
      setheadingData(result2);
    }
    fetehData();
  },[]);
  return (
    <div>
      {/* <!-- Services section start --> */}
      <section className="services-section content">
        <div className="container services-container px-0 position-relative">
          <div className="services-top-info">
            <div className="row">
              <div className="col-md-5">
                <div className="section-title-block">
                  <h5 className="section-sub-title">
                    <span className="shape d-block">
                      <Img src="assets/img/we-provide/section-sub-title-shape.svg" alt="section-sub-title-shape" />
                    </span>
                    {headingData.serviceSubtitle}
                  </h5>
                  <Split_text2 cls="section-title" line1={headingData.serviceTitle} />
                </div>
              </div>
              <div className="col-md-7">
                <div className="view-all-services d-none d-md-flex justify-content-end">
                  <Button name={headingData.service_btn_name} location="/service_details" />
                </div>
              </div>
            </div>
          </div>
          <div className="services-main">
            {serviceData && serviceData.slice(0,4).map((item, index) => (
              <div key={index} className="services-item fade-up">
                <Link href={`/service_details/${item.id}`}
                  className="d-flex justify-content-between gap-4 row-gap-3 flex-wrap align-items-center w-100">
                  <h5 className="number w-100">{item.number}</h5>
                  <h3 className="title w-100">{item.title}</h3>
                  <p className="des w-100">{item.content}</p>
                  <div className="icon w-100">
                    <Img src="/assets/img/icons/icon-up-right-2.svg" alt="icon-up-right-2" />
                  </div>
                </Link>
              </div>
            ))}
            <div className="view-all-services d-flex d-md-none justify-content-center mt-4">
              <Button name="View All Servesic" location="/service_details" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services section end --> */}
    </div>
  )
}
