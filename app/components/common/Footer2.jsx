import React from 'react'
import { footer } from '@/getData/getData'
import Link from 'next/link';

export default async function Footer2() {
  const footerData = await footer();
  return (
    <footer className="footer-section-five position-relative overflow-hidden">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-sm-6">
            <div className="footer-widget contact-info">
              <ul className="list-unstyled">
                <li><Link href={footerData.contact1link}>{footerData.contact1}</Link> </li>
                <li><Link href={footerData.contact2link}>{footerData.contact2}</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget">
              <h4 className="footer-title">{footerData.title1}</h4>
              <ul className="list-unstyled">
                {footerData.pages && footerData.pages.map((item, index) => (
                  <li key={index}><Link href={item.link}>{item.title}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget">
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
              <p>{footerData.content3}</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>{footerData.copyright_text}</p>
        </div>
      </div>
      <h4 className="rebrand-title text-uppercase">{footerData.rebrand_title}</h4>
    </footer>
  )
}
