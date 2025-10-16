"use client";
import Link from 'next/link';
import React from 'react'
import Img from '../common/Img';
import SplitText2 from '../common/Split_text2';

export default function FooterSection({headingData,footerData}) {
  return (
    <footer className="footer-section footer-section-two position-relative">
      <div className="footer-bg position-absolute bottom-0 z-n1 w-100">
        <Img src="assets/img/bg/footer-bg.svg" alt="footer-bg" className="img-fluid w-100" />
      </div>
      <div className="container px-0 position-relative">
        <div className="lets-create">
          <div className="row">
            <div className="col-lg-8 col-xl-6 col-md-10 mx-auto">
              <div className="text text-center">
                {/* <h2 className="title split-text right">{headingData.footerTitle}</h2> */}
                <SplitText2 cls="title split-text right" line1={headingData.footerTitle} />
                <p>{headingData.footerContent}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <div className="row">
            <div className="order-2 order-lg-1 col-lg-5">
              <ul className="list-unstyled left-menu">
                {footerData.left_menu && footerData.left_menu.map((item, index) => (
                  <li key={index} className="d-inline-block"><Link className="text-uppercase" href={item.link}>{item.title}</Link></li>
                ))}
              </ul>
            </div>
            <div className="order-1 col-lg-2 order-lg-2 position-relative">
              <Link className="view-all-btn view-all-btn-primary text-uppercase position-absolute start-50 translate-middle-x"
                href="/contact">
                {footerData.btn_name}
                <div className="icon"><Img src="assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></div>
              </Link>
            </div>
            <div className="order-3 col-lg-5 order-lg-3">
              <ul className="list-unstyled text-end right-menu">
                {footerData.right_menu && footerData.right_menu.map((item, index) => (
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
                {footerData.socal_icon && footerData.socal_icon.map((item, index) => (
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
