"use client";
import React, { useEffect, useState } from 'react'
import Button2 from '../buttons/Button2'
import Link from 'next/link';
import Split_text2 from '../common/Split_text2';
import { home1Heading, team } from '@/getData/getData';
import Img from '../common/Img';



export default function TeamSection({teamData,headingData}) {

  // const [teamData, setteamData] = useState([]);
  // const [headingData, setheadingData] = useState([]);
  // useEffect(()=>{
  //   const fetehData = async () => {
  //     const result = await team();
  //     setteamData(result);
  //     const result2 = await home1Heading();
  //     setheadingData(result2);
  //   }
  //   fetehData();
  // },[]);

  return (
    <section className="team-section position-relative z-1 content">
      <div className="container px-0 team-container position-relative">
      <div className="lines position-absolute d-none d-xl-flex justify-content-between w-100 bottom-0 z-n1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 col-md-7 col-xxl-5">
            <div className="section-title-block">
              <h5 className="section-sub-title">
                <span className="shape d-block">
                  <Img src="assets/img/we-provide/section-sub-title-shape.svg" alt="section-sub-title-shape" />
                </span>
                {headingData.teamSubtitle}
              </h5>
              <Split_text2 cls="section-title" line1={headingData.teamTitle} />
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-xxl-7 align-self-end">
            <div className="view-all-member text-end">
              <Button2 name={headingData.team_btn_name} location="/team" />
            </div>
          </div>
        </div>
        <div className="team-main">
          <div className="row g-4">
            {teamData && teamData.slice(0,4).map((item, index) => (
              <div key={index} className="col-lg-3 col-sm-6 team-label fade-up">
                <div className="team-item">
                  <div className="image position-relative">
                    <Img src={item.img} alt="team-1-img" className="img-fluid w-100" />
                  </div>
                  <div className="text">
                    <Link href="/team" className="name">{item.name}</Link>
                    <p className="designation">{item.designation}</p>
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
