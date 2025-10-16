"use client";
import React from 'react'
import Button2 from '../buttons/Button2';
import Link from 'next/link';
import Img from '../common/Img';

export default function ProjectSection({projectData}) {
  return (
    <div className="project-section-three">
      <div className="container">
        <div className="top-info">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="section-title-block">
                <h3 className="section-title split-text right">{projectData.title}</h3>
              </div>
            </div>
            <div className="col-lg-5">
              <p>{projectData.content}</p>
            </div>
          </div>
        </div>
        <div className="row project-row">
          {projectData.projects && projectData.projects.map((item, index) => (
            <div key={index} className="col-lg-12 col-md-6">
              <div className="project-three-item">
                <div className="row">
                  <div className="col-lg-6 col-xl-7 pe-lg-0">
                    <div className="image reveal left">
                      <Link href={`/portfolio_details/${item.id}`} className="d-block w-100">
                        <Img src={item.img} alt="project-3-img" className="img-fluid w-100" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5 col-xl-4 align-self-center ps-lg-0 ms-auto">
                    <div className="text">
                      <h4 className="title">{item.title}</h4>
                      <p>{item.content}</p>
                      <Button2 name={item.btn} location={`/portfolio_details/${item.id}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
