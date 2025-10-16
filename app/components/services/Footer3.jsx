import { servicePage } from '@/getData/getData'
import Link from 'next/link'
import React from 'react'
import Img from '../common/Img';

export default async function Footer3() {
  const data = await servicePage("footer");
  return (
    <footer className="footer-section footer-section-two position-relative">
      <div className="container px-0 position-relative">
        <div className="footer-menu">
          <div className="lines position-absolute d-none d-lg-flex justify-content-between w-100 top-0 bottom-0 z-n1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="row">
            <div className="order-2 order-lg-1 col-lg-5">
              <ul className="list-unstyled left-menu">
                {data.left_menu && data.left_menu.map((item, index) => (
                  <li key={index} className="d-inline-block"><Link className="text-uppercase" href={item.link}>{item.title}</Link></li>
                ))}
              </ul>
            </div>
            <div className="order-1 col-lg-2 order-lg-2 position-relative">
              <Link className="view-all-btn view-all-btn-primary text-uppercase position-absolute start-50 translate-middle-x"
                href="/contact">
                {data.btn_name}
                <div className="icon"><Img src="assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></div>
              </Link>
            </div>
            <div className="order-3 col-lg-5 order-lg-3">
              <ul className="list-unstyled text-end right-menu">
                {data.right_menu && data.right_menu.map((item, index) => (
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
                {data.socal_icon && data.socal_icon.map((item, index) => (
                  <Link key={index} href={item.link}><Img src={item.img} alt="footer-icon" /></Link>
                ))}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="copyright-text text-end">
                <p>{data.copyright_text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
