import React from 'react'
import { footer } from '@/getData/getData'
import Link from 'next/link';
import Img from '../common/Img';

export default async function Footer1() {
  const footerData = await footer();
  return (
    <footer className="footer-section-four position-relative overflow-hidden">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget footer-about">
              <div className="logo">
                <Link href="/">
                  <Img src={footerData.logo2} alt="logo" />
                </Link>
              </div>
              <p>{footerData.content}</p>
              <div className="footer-social-icon2">
                {footerData.socal_icon && footerData.socal_icon.map((item, index) => (
                  <Link key={index} href={item.link}><Img src={item.img} alt="footer-icon" /></Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget ms-60">
              <h4 className="footer-title">{footerData.title1}</h4>
              <ul className="list-unstyled">
                {footerData.pages && footerData.pages.map((item, index) => (
                  <li key={index}><Link href={item.link}>{item.title}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget ms-4">
              <h4 className="footer-title">{footerData.title2}</h4>
              <ul className="list-unstyled">
                {footerData.cms && footerData.cms.map((item, index) => (
                  <li key={index}><Link href={item.link}>{item.title}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget address">
              <h4 className="footer-title">{footerData.title4}</h4>
              <p>{footerData.content2}</p>
              <p className="contact-info">
                <Link href={footerData.contact1link}>{footerData.contact1}</Link>
                <Link href={footerData.contact2link}>{footerData.contact2}</Link>
              </p>
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
