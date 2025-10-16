"use client";
import Link from 'next/link';
import React from 'react'
import Button2 from '../buttons/Button2';
import Img from '../common/Img';
import SplitText2 from '../common/Split_text2';

export default function ProjectSection({headingData, projectData}) {
  return (
    <section className="project-section-two">
      <div className="container">
        <div className="projects-content">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title-block d-md-flex">
                {/* <h3 className="section-title split-text right">
                  <span>{projectData.title1}</span> <span className="d-xl-block">{projectData.title2}</span><span>{projectData.title3}</span></h3> */}
                  <SplitText2 cls="section-title " line1={projectData.title1} line6={projectData.title2} line5={projectData.title3}  />
              </div>
              <Button2 cls="mt-4" name={projectData.btn} location="/portfolio" />
            </div>
            <div className="col-lg-7">
              <div className="right-info">
                <p>{headingData.content} </p>
                <div className="author">
                  <h4 className="name text-uppercase">{projectData.authorName} <Img
                    src="assets/img/we-provide/section-sub-title-shape.svg" alt="section-sub-title-shape" /></h4>
                  <p className="designation">{projectData.authorDesignation}</p>
                </div>
                <div className="experiance d-flex">
                  <div className="year"><span className="counter">{projectData.experiance}</span></div>
                  <h4 className="title text-uppercase">{projectData.experianceText1}
                    <span className="d-block">{projectData.experianceText2}</span></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-main">
          <div className="row project-container">
            {projectData.projects && projectData.projects.map((item, index) => (
              <div key={index} className={`col ${item.cls}`}>
                <div className="project-item-two position-relative reveal zoom-out">
                  <Img src={item.img} alt="project-2-img" className="img-fluid w-100" />
                  <Link href={`/portfolio_details/${item.id}`}
                    className="view-detials-btn position-absolute top-50 start-50 translate-middle">
                    <Img className="circle-img" src="assets/img/projects/project-details-btn-circle.svg"
                      alt="project-details-btn-circle" />
                    <span className="position-absolute top-50 start-50 translate-middle text-center">
                      {item.btn}
                      <span className="arrow-icon">
                        <Img src="assets/img/icons/icon-right-white.svg" alt="icon-right-white" />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
