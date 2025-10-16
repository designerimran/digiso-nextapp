"use client";
import React, { useEffect, useState } from 'react'
import Progressbar from '../common/Progressbar'
import Button5 from '../buttons/Button5'
import { about } from '@/getData/getData'
import SplitText2 from '../common/Split_text2';
import Img from '../common/Img';

export default function WhyChooseUs() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const Data = await about();
      setdata(Data.whyChooseUs);
    }
    fetehData();
  }, []);

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title-block">
              <SplitText2 cls="section-title" line1={data.title} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shape position-relative">
              <Img src="assets/img/images/page-header-shape.svg" alt="page-header-shape"
                className="shape-img position-absolute" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="explore-more">
              <Button5 name={data.btn} location={data.btn_link}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-text">
              <p>{data.content}</p>
              <div className="progress-wrap">
                {data.progressbar && data.progressbar.map((item,index)=>(
                 <Progressbar key={index} title={item.title} value={item.value} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
