"use client";
import React, { useEffect, useState } from 'react'
import { home1Feature } from '@/getData/getData';
import Split_text2 from '../common/Split_text2';
import Img from '../common/Img';


export default function FeatureSection({featureData}) {

  // const [featureData, setfeatureData] = useState([]);
  // useEffect(()=>{
  //   const fetehData = async () => {
  //     const result = await home1Feature();
  //     setfeatureData(result);
  //   }
  //   fetehData();
  // },[]);

  return (
    <section className="feature-section content overflow-hidden ">
      <div className="container px-0">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-title-block">
              <Split_text2 cls="section-title text-center" line1={featureData.title} />
            </div>
          </div>
        </div>
        <div className="feature-main">
          <div className="row g-4 gy-4">
            {featureData.features && featureData.features.map((item, idx) => (
              <div key={idx} className="col-lg-3 col-sm-6 feature-content position-relative fade-up">
                <div className="feature-item text-center">
                  <div className="feature-icon"><Img src={item.icon} alt="feature-1-icon" />
                  </div>
                  <div className="feature-text">
                    <h4 className="feature-title">{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
