"use client";
import React from 'react'

export default function FeatureSection({featureData}) {
  return (
    <section className="feature-section feature-section-three content">
      <div className="container px-0">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-title-block text-center">
              <h3 className="section-title split-text right">{featureData.title}</h3>
              <p>{featureData.content}</p>
            </div>
          </div>
        </div>
        <div className="feature-main">
          <div className="row">
            {featureData.features && featureData.features.map((item, index) => (
              <div key={index} className="col-lg-6 col-md-6 feature-content position-relative fade-up">
                <div className={`feature-item ${item.cls}`}
                  style={{ backgroundImage: item.img? `url('${item.img}')`: null, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
                >
                  <div className="feature-text d-flex flex-column w-100 h-100 justify-content-between">
                    <div className="number">
                      <span>{item.num}</span>
                    </div>
                    <div className="info">
                      <h4 className="feature-title">{item.title}</h4>
                      <p>{item.content}</p>
                    </div>
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
