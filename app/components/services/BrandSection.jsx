"use client";

import React, { useState, useEffect} from 'react';
import { servicePage } from '@/getData/getData'
import Img from '../common/Img';

export default function BrandSection() {
  // const data = await servicePage("brand");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
     setData(await servicePage("brand"));
    }
    fetehData();
 }, []);

  return (
    <div className="brand-section-two">
      <div className="container">
        <div className="row">
          {data.brand && data.brand.map((item, index)=>(
          <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 brand-item-label">
            <div className="brand-item text-center">
              <Img src={item.img} alt="brand-2-img" />
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
