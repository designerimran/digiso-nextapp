"use client";
import React, { useEffect, useState } from 'react'
import { about } from '@/getData/getData'
import SplitText2 from '../common/Split_text2';
import Testimonial from '../common/Testimonial';

export default function TestimonialSection() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const Data = await about();
      setdata(Data.testimonial);
    }
    fetehData();
  }, []);
  return (
    <section className="testimonial-section-two custom-testimonial">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-7 mx-auto align-self-center">
            <div className="section-title-block text-center">
              <h5 className="section-sub-title">
                {data.subtitle}
              </h5>
              <SplitText2 cls="section-title" line1={data.title} />
            </div>
          </div>
        </div>
      </div>
      <Testimonial/>
    </section>
  )
}
