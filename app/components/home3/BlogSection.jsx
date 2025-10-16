"use client";
import Link from 'next/link';
import React from 'react'
import Button2 from '../buttons/Button2';
import Img from '../common/Img';

export default function BlogSection({ blogData,headingData }) {
  return (
    <section className="blog-section-three position-relative content">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title-block">
              <h3 className="section-title split-text right">{headingData.blogTitle}</h3>
            </div>
          </div>
          <div className="col-lg-5 ms-auto">
            <div className="short-info">
              <p>{headingData.blogContent}</p>
              <Button2 name={headingData.blogBtn} location={`/blog`} /> 
            </div>
          </div>
        </div>
        <div className="blog-three-main">
          <div className="row g-4">
            {blogData && blogData.slice(0, 3).map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 fade-up">
                <div className="blog-three-item">
                  <div className="text">
                    <ul className="list-unstyled d-flex justify-content-between align-items-center">
                      <li><Link href="#">{item.postby2}</Link></li>
                      <li><Link href="#">{item.date}</Link></li>
                    </ul>
                    <Link href={`/blog_details/${item.id}`} className="title">
                      {item.title2}
                    </Link>
                    <div className="read-more d-flex align-items-center justify-content-between">
                      <Img src="assets/img/icons/arrow-line.svg" alt="arrow-line" className="arrow-line" />
                      <Button2 name={item.btn} location={`/blog_details/${item.id}`} />
                    </div>
                  </div>
                  <div className="image">
                    <Link href={`/blog_details/${item.id}`} className="d-block w-100">
                      <Img src={item.img2} alt="blog-3-img" className="img-fluid w-100" />
                    </Link>
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
