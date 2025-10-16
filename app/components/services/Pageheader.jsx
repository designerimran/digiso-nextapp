"use client";
import { useEffect, useState} from 'react';
import 'magnific-popup';
import $ from 'jquery';
import Link from 'next/link';
import { servicePage } from '@/getData/getData';
import SplitText2 from '../common/Split_text2';
import Img from '../common/Img';


export default function Pageheader() {
  const [headerData, setData] = useState([]);
  useEffect(() => {
    const fetehData = async () => {
      const data = await servicePage("pageheader");
      setData(data);
    }
    fetehData();
  }, []);

  useEffect(() => {
    
    // Magnific Popup for videos
    $('.vidplay').magnificPopup({
      type: 'iframe',
      iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          '</div>',
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src: 'https://www.youtube.com/embed/%id%?autoplay=1'
          },
        },
        srcAction: 'iframe_src',
      }
    });

  }, []);

  return (
    <section className="page-header">
      <div className="container px-0">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-7 align-self-center">
            <SplitText2 cls="page-sub-title text-uppercase w-100" line1={headerData.subtitle} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-5 ms-auto align-self-end">
            <div className="rotate-img position-relative d-flex justify-content-center align-items-center text-center">
              <Img src={headerData.rotate_text} alt="rotate-text"/>
              <Link className="video-rotate-btn vidplay position-absolute top-50 start-50 translate-middle"
                href={`${headerData.video}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-player-play">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
              </Link>
            </div>
          </div>
          <div className="col-lg-9 ms-auto">
            <p className="short-info service-short-info position-relative">
              <Img className="position-absolute page-header-shape2" src="assets/img/images/page-header-shape2.svg"
                alt="page-header-shape2"/>
              {headerData.content}</p>
          </div>
        </div>
        <h1 className="page-title text-uppercase position-absolute z-n1 pricing-title">{headerData.title}</h1>
      </div>
    </section>
  )
}
