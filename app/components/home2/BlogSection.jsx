"use client";
import Link from 'next/link';
import React from 'react'
import Button2 from '../buttons/Button2';
import Img from '../common/Img';
import SplitText2 from '../common/Split_text2';

export default function BlogSection({blogData}) {
  return (
    <section className="blog-section-two content">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title-block">
              <h5 className="section-sub-title">
                <span className="shape d-block">
                  <Img src="assets/img/we-provide/section-sub-title-shape.svg" alt="section-sub-title-shape" />
                </span>
                {blogData.subtitle}
              </h5>
              {/* <h3 className="section-title split-text right">{blogData.title}</h3> */}
              <SplitText2 cls="section-title split-text right" line1={blogData.title} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="short-info">
              <p>{blogData.content}</p>
              <Button2 cls="mt-4" name={blogData.btn} location="/blog" />
            </div>
          </div>
        </div>
        <div className="blog-two-main">
          <div className="row g-4">
            {blogData.blogs && blogData.blogs.map((item, index) => (
              <div key={index} className="col-md-6 fade-up">
                <div className="blog-two-item">
                  <div className="img overflow-hidden position-relative">
                    <Link href={`blog_details/${item.id}`} className="d-block w-100">
                      <Img src={item.img} alt="blog-2-img" className="img-fluid w-100" />
                    </Link>
                    <span className="date position-absolute">{item.date}</span>
                  </div>
                  <div className="text">
                    <Link href={`blog_details/${item.id}`} className="title">
                      {item.title}
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
