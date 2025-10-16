"use client";
import { textmarquee } from '@/getData/getData';
import React, { useEffect, useState } from 'react';
import Img from './Img';

export default function TextMarquee() {
  const [textmarqueData, settextmarqueData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const result = await textmarquee();
      settextmarqueData(result);
    }
    fetehData();
  }, []);
  return (
    <section className="text-slider-section">
      <div className="slider-main d-flex align-items-center">
        <div className="slider-item d-flex align-items-center">
          {textmarqueData && textmarqueData.map((item, index) => (
            <h4 key={index} className="title">
              <Img src="/assets/img/icons/star-icon.svg" alt="star-icon" />
              {item.title}</h4>
          ))}
        </div>
        <div className="slider-item d-flex align-items-center">
          {textmarqueData && textmarqueData.map((item, index) => (
            <h4 key={index} className="title">
              <Img src="/assets/img/icons/star-icon.svg" alt="star-icon" />
              {item.title}</h4>
          ))}
        </div>
      </div>
    </section>
  )
}
