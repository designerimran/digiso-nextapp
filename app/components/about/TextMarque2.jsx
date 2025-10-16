"use client";
import React, { useEffect, useState } from 'react'
import { about } from '@/getData/getData';

export default function TextMarque2() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const Data = await about();
      setdata(Data.textmarque);
    }
    fetehData();
  }, []);

  return (
    <section className="text-slider-section text-slider-section-three">
      <div className="slider-main d-flex align-items-center ">
        <div className="slider-item d-flex align-items-center">
          {data && data.map((item, index) => (
          <h4 key={index} className="title">
            {item.text}</h4>
          ))}
        </div>
        <div className="slider-item d-flex align-items-center">
          {data && data.map((item, index) => (
          <h4 key={index} className="title">
            {item.text}</h4>
          ))}
        </div>
      </div>
    </section>
  )
}
