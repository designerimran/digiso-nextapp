"use client";
import React, { useEffect, useState } from 'react'
import { calltoAction } from '@/getData/getData'
import SplitText2 from '../common/Split_text2'
import Link from 'next/link'
import Img from '../common/Img';

export default function CallToAction() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const Data = await calltoAction();
      setdata(Data);
    }
    fetehData();
  }, []);
  return (
    <section className="call-to-action-section position-relative">
      <div className="container">
        <div className="main d-flex justify-content-between">
          <SplitText2 cls="title" line1={data.title} />
          <div className="cta-short-info">
            <p>{data.content}
            </p>
            <Link href="/contact" className="theme-btn theme-btn-light position-relative">{data.btn}<span
              className="d-flex justify-content-center align-items-center position-absolute top-0">
              <Img src="assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
