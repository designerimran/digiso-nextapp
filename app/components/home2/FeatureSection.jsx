"use client";
import React from 'react'
import Img from '../common/Img';
import SplitText2 from '../common/Split_text2';

export default function FeatureSection({featureData}) {

  return (
    <section className="feature-section feature-section-two content">
      <div className="section-title-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {/* <h3 className="section-title text-center split-text right">
                <span>{featureData.title1} </span>
                <span className="cr">{featureData.title2}</span>
                <span className="br">{featureData.title3}</span>
                <span>{featureData.title4}</span>
              </h3> */}
              <SplitText2 cls="section-title text-center split-text right" line1={featureData.title1} line3={featureData.title2} line4={featureData.title3} line5={featureData.title4}  />
            </div>
          </div>
        </div>
      </div>
      <div className="container px-0">
        <div className="feature-main">
          <div className="row g-4">
            {featureData.features && featureData.features.map((item, index) => (
              <div key={index} className="col-lg-3 col-sm-6 feature-content position-relative fade-up">
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
