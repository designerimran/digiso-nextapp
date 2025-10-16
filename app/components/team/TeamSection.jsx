"use client";
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import $ from 'jquery';
import { team, teampage } from '@/getData/getData';
import Link from 'next/link';
import Revealimg from './Revealimg';
import SplitText2 from '../common/Split_text2';
// import CounterBlock from '../common/CounterBlock';
import dynamic from 'next/dynamic';
import Img from '../common/Img';

const CounterBlock = dynamic(() => import('../common/CounterBlock'), { ssr: false });

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function TeamSection() {
  const [teamData, setteamData] = useState([]);
  const [teamdata2, setteam] = useState([]);
  const [counter, setcounter] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const data = await team();
      const data2 = await teampage();
      setteamData(data);
      setteam(data2);
      setcounter(data2.counter);
    }
    fetehData();
  }, []);

  const fadeupRef = useRef([]);
  useGSAP(() => {
    $(".content").each(function (i) {
      let target = $(this).find(".fade-up");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: 'top 70%',
          toggleActions: 'play none none none',
          markers: false,
        }
      });
      if (target.length) {
        tl.from(target, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.3,
        });
      }
    });
  }, {dependencies: [teamData], scope: fadeupRef ,revertOnUpdate: true});

  return (
    <div ref={fadeupRef}>
      <section className="team-section-two content">
        <div className="container px-0">
          <div className="row team-row">
            {teamData && teamData.slice(0,6).map((item,index)=>(
            <div key={index} className="col-lg-4 col-md-6 fade-up">
              <div className={`team-item ${item.cls}`}>
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
          <div className="row">
            <div className="col-lg-12">
              <div className="join-our-team d-flex justify-content-center">
                <Link className="view-all-btn view-all-btn-primary text-uppercase" href="/team">
                  {teamdata2.btn}
                  <div className="icon"><Img src="assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></div>
                </Link>
              </div>
            </div>
          </div>
          <Revealimg cls="left" img={teamdata2.bannerImg} />
          <div className="counter-area">
            <div className="text">
              <div className="row">
                <div className="col-xl-5 col-lg-7">
                  <div className="section-title-block position-relative">
                      <SplitText2 cls="section-title" line1={counter.title} />
                    <Img src="assets/img/team/team-shape.png" alt="team-shape" className="team-shape position-absolute" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5 ms-auto">
                  <p>{counter.content}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-7 ms-auto">
                <div className="row counter-row">
                  {counter.counters && counter.counters.map((item,index)=>(
                  <div className="col-lg-6 col-md-3 col-6" key={index}>
                    <CounterBlock title2={item.title} value={item.value} unit={item.unit} />
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
