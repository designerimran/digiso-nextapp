"use client";
import React, { useEffect, useState } from 'react'
import { about, team } from '@/getData/getData'
import SplitText2 from '../common/Split_text2';
import Link from 'next/link';
import Img from '../common/Img';

export default function TeamSection() {
  const [teamData, setdata] = useState([]);
  const [headingData, setheaderData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const aboutData = await about();
      const Data = await team();
      setdata(Data);
      setheaderData(aboutData.service);
    }
    fetehData();
  }, []);

  return (
    <section className="team-section-two custom-team content">
      <div className="team-section-top-info">
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <div className="section-title-block text-center">
              <h5 className="section-sub-title">
                {headingData.subtitle}
              </h5>
              <SplitText2 cls="section-title" line1={headingData.title} />
            </div>
          </div>
        </div>
      </div>
      <div className="row team-row">
        {teamData && teamData.slice(0,4).map((item,index)=>(
          <div key={index} className="col-lg-3 col-sm-6 team-label fade-up">
          <div className="team-item ">
            <div className="img">
              <Img src={item.img2} alt="team-2-img" className="img-fluid w-100" />
            </div>
            <div className="text">
              <Link href="/team" className="title">{item.name}</Link>
              <p>{item.designation}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </section>
  )
}
