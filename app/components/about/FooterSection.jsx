"use client";
import React, { useEffect, useState } from 'react'
import { about } from '@/getData/getData'
import Link from 'next/link';
import Img from '../common/Img';

export default function FooterSection(props) {
  const [footerData, setdata] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const Data = await about();
      setdata(Data.footer);
    }
    fetehData();
  }, []);
  return (
    <footer className={`footer-section-three ${props.cls}`}>
    <div className="container footer-container position-relative">
      <div className="lines position-absolute d-flex justify-content-between w-100 top-0 bottom-0 z-n1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget logo">
            <Link href="#">
              <Img src={footerData.logo} alt="logo"/>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget pages">
            <h4 className="footer-title">{footerData.title1}</h4>
            <ul className="list-unstyled">
              {footerData.pages && footerData.pages.map((item,index)=>(
              <li key={index}><Link href={item.link}>{item.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget">
            <h4 className="footer-title">{footerData.title2}</h4>
            <ul className="list-unstyled">
            {footerData.cms && footerData.cms.map((item,index)=>(
              <li key={index}><Link href={item.link}>{item.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget address">
            <h4 className="footer-title">{footerData.title3}</h4>
            <p>{footerData.content}</p>
            <div className="footer-social-icon">
            {footerData.socal_icon && footerData.socal_icon.map((item,index)=>(
              <Link key={index} href={item.link}><Img src={item.img} alt="footer-icon"/></Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>{footerData.copyright_text}</p>
      </div>
    </div>
  </footer>
  )
}
