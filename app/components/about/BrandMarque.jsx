"use client";
import React, { useEffect, useState } from 'react'
import { about } from '@/getData/getData';
import Link from 'next/link';
import Img from '../common/Img';

export default function BrandMarque({ cls }) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const Data = await about();
      setdata(Data.brandmarque);
    }
    fetehData();
  }, []);
  return (
    <div className={`brand-slider-section brand-slider-section-two ${cls} `}>
      <div className="slider-main d-flex gap-4 align-items-center">
        <div className="slider-item d-flex">
          {data && data.map((item, index) => (
            <Link key={index} href={item.link}><Img src={item.img} alt="brand-slider-two-img" /></Link>
          ))}
        </div>
        <div className="slider-item d-flex">
          {data && data.map((item, index) => (
            <Link key={index} href={item.link}><Img src={item.img} alt="brand-slider-two-img" /></Link>
          ))}
        </div>
      </div>
    </div>
  )
}
