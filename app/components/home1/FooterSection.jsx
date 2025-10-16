"use client";
import React, { useEffect, useState } from 'react'
import { hom1Footer } from '@/getData/getData'
import Button1 from '../buttons/Button1';
import Link from 'next/link';
import SplitText2 from '../common/Split_text2';
import Img from '../common/Img';

export default function FooterSection() {
  const [footerData, setfooterData] = useState([]);
  useEffect(()=>{
    const fetehData = async () => {
      const result = await hom1Footer();
      setfooterData(result);
    }
    fetehData();
  },[]);
  return (
    <footer className="footer-section position-relative z-1">
      <div className="container px-0 footer-container position-relative">
      <div className="lines position-absolute d-none d-xl-flex justify-content-between w-100 bottom-0 z-n1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="footer-text text-center">
              <SplitText2 cls="title" line1={footerData.title}/>
              <p>{footerData.content}</p>
              <Button1 name={footerData.btn_name} location="/contact" />
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list-unstyled left-menu">
                {footerData.left_menu && footerData.left_menu.map((item,index)=>(
                <li key={index} className="d-inline-block"><Link className="text-uppercase" href={item.link}>{item.title}</Link></li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="list-unstyled text-end right-menu">
              {footerData.right_menu && footerData.right_menu.map((item,index)=>(
                <li key={index} className="d-inline-block"><Link className="text-uppercase" href={item.link}>{item.title}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row">
            <div className="col-lg-5">
              <div className="footer-social-icon">
              {footerData.socal_icon && footerData.socal_icon.map((item,index)=>(
                <Link key={index} href={item.link}><Img src={item.img} alt="footer-icon" /></Link>
                ))}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="copyright-text text-end">
                <p>{footerData.copyright_text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
