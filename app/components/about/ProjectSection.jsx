"use client";
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { about } from '@/getData/getData';
import SplitText2 from '../common/Split_text2';
import Button5 from '../buttons/Button5';
import Img from '../common/Img';

export default function ProjectSection() {
  const [projectData, setprojectData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const data = await about();
      setprojectData(data.project);
    }
    fetehData();
  }, []);

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    centerMode: true,
    centerPadding: "100px",
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "50px",
      }
    }]
  };

  return (
    <section className="projects-section projects-section-four">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-5">
            <div className="section-title-block">
              <SplitText2 cls="section-title" line1={projectData.title} />
            </div>
          </div>
          <div className="col-lg-6 ms-auto">
            <div className="short-info">
              <p>{projectData.content}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-main">
        <Slider {...settings} className="row projects-four-slider">
          {projectData.slides && projectData.slides.map((item, index) => (
            <div key={index} className="col-lg-6">
              <div className="project-item-four">
                <Link href={item.link} className="d-block w-100">
                  <div className="img">
                    <Img src={item.img} alt="project-4-img" className="img-fluid w-100" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="view-all-projects d-flex justify-content-center">
        <Button5 name={projectData.btnName} location="/portfolio" />
      </div>
    </section>
  )
}
