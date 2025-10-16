"use client";
import React, { useEffect, useState } from 'react'
import { testimonial } from '@/getData/getData'
import Img from './Img';

export default function Testimonial() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const Data = await testimonial();
      setdata(Data);
    }
    fetehData();
  }, []);
  // const data = await testimonial();
  return (
    <div className="slider-main">
      <div className="testimonial-two-slider d-flex align-items-center">
        <div className="slider-content d-flex align-items-center">
          {data && data.map((item,index)=>(
          <div key={index} className="slider-item">
            <div className="star text-center">
              <Img src={item.starImg1} alt="star" />
              <Img src={item.starImg2} alt="star" />
              <Img src={item.starImg3} alt="star" />
              <Img src={item.starImg4} alt="star" />
              <Img src={item.starImg5} alt="star" />
            </div>
            <div className="text text-center">
              <p>{item.content}</p>
            </div>
            <div className="name d-flex align-items-center">
              <div className={`icon ${item.iconCls} d-flex justify-content-center align-items-center rounded-pill`}>
                <Img src={item.icon} alt="quote" />
              </div>
              <div className="info">
                <h4 className="title">{item.title}</h4>
                <span>{item.designation}</span>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className="slider-content d-flex align-items-center">
          {data && data.map((item,index)=>(
          <div key={index} className="slider-item">
            <div className="star text-center">
              <Img src={item.starImg1} alt="star" />
              <Img src={item.starImg2} alt="star" />
              <Img src={item.starImg3} alt="star" />
              <Img src={item.starImg4} alt="star" />
              <Img src={item.starImg5} alt="star" />
            </div>
            <div className="text text-center">
              <p>{item.content}</p>
            </div>
            <div className="name d-flex align-items-center">
              <div className={`icon ${item.iconCls} d-flex justify-content-center align-items-center rounded-pill`}>
                <Img src={item.icon} alt="quote" />
              </div>
              <div className="info">
                <h4 className="title">{item.title}</h4>
                <span>{item.designation}</span>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
      <div className="testimonial-two-slider d-flex align-items-center">
        <div className="slider-content d-flex align-items-center">
          {data && data.map((item,index)=>(
          <div key={index} className="slider-item">
            <div className="star text-center">
              <Img src={item.starImg1} alt="star" />
              <Img src={item.starImg2} alt="star" />
              <Img src={item.starImg3} alt="star" />
              <Img src={item.starImg4} alt="star" />
              <Img src={item.starImg5} alt="star" />
            </div>
            <div className="text text-center">
              <p>{item.content}</p>
            </div>
            <div className="name d-flex align-items-center">
              <div className={`icon ${item.iconCls} d-flex justify-content-center align-items-center rounded-pill`}>
                <Img src={item.icon} alt="quote" />
              </div>
              <div className="info">
                <h4 className="title">{item.title}</h4>
                <span>{item.designation}</span>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className="slider-content d-flex align-items-center">
          {data && data.map((item,index)=>(
          <div key={index} className="slider-item">
            <div className="star text-center">
              <Img src={item.starImg1} alt="star" />
              <Img src={item.starImg2} alt="star" />
              <Img src={item.starImg3} alt="star" />
              <Img src={item.starImg4} alt="star" />
              <Img src={item.starImg5} alt="star" />
            </div>
            <div className="text text-center">
              <p>{item.content}</p>
            </div>
            <div className="name d-flex align-items-center">
              <div className={`icon ${item.iconCls} d-flex justify-content-center align-items-center rounded-pill`}>
                <Img src={item.icon} alt="quote" />
              </div>
              <div className="info">
                <h4 className="title">{item.title}</h4>
                <span>{item.designation}</span>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
