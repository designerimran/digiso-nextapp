"use client";
import React, { useEffect, useState } from 'react'
import Split_text2 from '../common/Split_text2'
import OdometerBlock from '../common/OdometerBlock'
import Button4 from '../buttons/Button4'
import Button from '../buttons/Button'
import Link from 'next/link'
import { home1Project } from '@/getData/getData'
import Img from '../common/Img';

export default function ProjectSection({projectData}) {
  // const [projectData, setprojectData] = useState([]);
  // useEffect(()=>{
  //   const fetehData = async () => {
  //     const result = await home1Project();
  //     setprojectData(result);
  //   }
  //   fetehData();
  // },[]);
  return (
    <section className="projects-section position-relative z-1 content">
      <div className="container px-0 project-container position-relative">
        <div className="lines position-absolute d-none d-xl-flex justify-content-between w-100 top-0 bottom-0 z-n1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="section-title-block d-flex">
          <div className="left-title">
            <div className="position-relative">
              <Img className="project-shape position-absolute" src="assets/img/projects/projects-shape.svg"
                alt="projects-shape" />
              <Split_text2 cls="section-title" line1={projectData.title} />
            </div>
          </div>
          <p className="des w-100">{projectData.content}</p>
        </div>
        <div className="projects-main">
          <div className="row g-4">
            {projectData.projects && projectData.projects.map((item, index) => (
              <div key={index} className={`${item.cls} project-label fade-up`}>
                <div className="project-item position-relative">
                  <Link href={`/portfolio_details/${item.id}`} className="d-block w-100">
                    <div className="image overflow-hidden ">
                      <Img src={item.img} alt="project-1-img" className="img-fluid w-100" />
                    </div>
                    <div
                      className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end">
                      <h3 className="project-title">{item.title}</h3>
                      <Button4 name="View Project" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="view-all-projects d-flex justify-content-center">
          <Button name="View All Projects" location="/portfolio" />
        </div>
        <div className="projects-counter">
          <div className="row g-4">
            {projectData.counter && projectData.counter.map((item, index) => (
              <div key={index} className="col-lg-3 col-sm-6 col-6 counter-label">
                <OdometerBlock title={item.title} value={item.value} item={item.unit} font="var(--bs-body-font-primary)" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
