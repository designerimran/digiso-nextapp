"use client";
import React from 'react'
import Button1 from '../buttons/Button1';
import Img from '../common/Img';

export default function BannerSection({bannerData}) {
  return (
    <section className="banner-section-three">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="text">
              <div className="top-title position-relative">
                <div className="clients-image d-flex align-items-center position-absolute">
                  {bannerData.clintImg && bannerData.clintImg.map((it, idx) => (
                    <div key={idx} className="img">
                      <Img src={it} alt="testimonial-sm-img"
                        className="img-fluid w-100" />
                    </div>
                  ))}
                  <div className="img client d-flex align-items-center justify-content-center">
                    <span>{bannerData.clintText}</span>
                  </div>
                </div>
                <h1 className="title split-text right">
                  <span>{bannerData.title1}</span> {bannerData.title2}
                </h1>
              </div>
              <p>{bannerData.content}</p>
              <Button1 name={bannerData.btn} location="/about" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="image position-relative">
              <div className="img reveal zoom-out">
                <Img src={bannerData.img} alt="banner-three-img" className="img-fluid w-100" />
              </div>
              <div className="counter-info position-absolute start-50 translate-middle-x d-flex justify-content-between align-items-center">
                {bannerData.experience && bannerData.experience.map((it, idx) => (
                  <div key={idx} className="counter-item position-relative d-flex align-items-center">
                    <h3 className="number d-flex align-items-center"><span className="counter">{it.year}</span>{it.unit}</h3>
                    <p>{it.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
