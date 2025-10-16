"use client";
import { useEffect, useState } from 'react';
import $ from 'jquery';
import Link from 'next/link';
import Img from './common/Img';
import { headerNavbar } from '@/getData/getData';

function Header(props) {
  // const server = process.env.NEXT_PUBLIC_API_DATA;
  const [navData, setnavData] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      // const result = await fetch(`${server}/navbar`, { next: { revalidate: 10 } });
      const navData = await headerNavbar();
      setnavData(navData);
    }
    fatchData();
  }, []);

  useEffect(() => {
    $(".mobile-topbar .bars").on("click", function () {
      $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
      return false;
    });

    // Close mobile menu
    $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
      $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
    });

    // Submenu toggle
    $(".sub-mobile-menu ul").hide();
    $(".sub-mobile-menu a").on("click", function () {
      $(".sub-mobile-menu ul").not($(this).siblings("ul")).slideUp("100");
      $(".sub-mobile-menu a .fas").not($(this).find(".fas")).removeClass("fa-chevron-up").addClass("fa-chevron-down");
      $(this).siblings("ul").slideToggle("100");
      $(this).find(".fas").toggleClass("fa-chevron-down fa-chevron-up");
    });
    return () => {
      $(".sub-mobile-menu a").off("click");
    };
  }, []);

  const arrowicon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 9l6 6l6 -6" /></svg>);

  return (
    <>
      <div id="header-fixed-height"></div>
      <header className="header-section w-100" id="sticky-header">
        <nav className="navbar p-0 navbar-expand-xl d-none d-xl-flex">
          <div className="container px-0">
            <Link className="navbar-brand" href="/">
              <Img src={navData.logo} alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="#">
                    <span>{navData.menu1}</span> {arrowicon}
                  </Link>
                  <ul className="sub-menu list-unstyled">
                    {navData.submenu1 && navData.submenu1.map((item, index) => (
                      <li key={index}>
                        <Link href={`${item.link}`}>{item.submenu}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    <span>{navData.menu2}</span> {arrowicon}
                  </Link>
                  <ul className="sub-menu list-unstyled">
                    {navData.submenu2 && navData.submenu2.map((item, index) => (
                      <li key={index}>
                        <Link href={`${item.link}`}>{item.submenu}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    <span>{navData.menu3}</span> {arrowicon}
                  </Link>
                  <ul className="sub-menu list-unstyled">
                    {navData.submenu3 && navData.submenu3.map((item, index) => (
                      <li key={index}>
                        <Link href={`${item.link}`}>{item.submenu}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href={`${navData.menu4_link}`}>
                    <span>{navData.menu4}</span>
                  </Link>
                </li>
              </ul>
              <div className="join-with-us">
                <Link href={`${navData.btn_link}`} className="join-with-us-btn">
                  <span className="btn-wrap">
                    <span className="text-one">{navData.btn}</span>
                    <span className="text-two">{navData.btn}</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {/* moblie navbar */}
        <div className="mobile-menu-area d-block d-xl-none">
          <div className="mobile-topbar">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <div className="logo">
                  <Link href="/"> <Img src={navData.logo} alt="logo" /></Link>
                </div>
                <div className="bars">
                  <i className="fas fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu-overlay "></div>
          <div className="mobile-menu-main ">
            <div className="logo">
              <Link href="#"> <Img src={navData.logo} alt="logo" /></Link>
            </div>
            <div className="close-mobile-menu"><i className="fas fa-times"></i></div>
            <div className="menu-body">
              <div className="menu-list">
                <ul className="list-unstyled">
                  <li className="sub-mobile-menu ">
                    <Link href="#">{navData.menu1} <i className="fas fa-chevron-down float-end"></i></Link>
                    <ul className="list-unstyled ">
                    {navData.submenu1 && navData.submenu1.map((item, index) => (
                      <li key={index}>
                        <Link href={`${item.link}`}>{item.submenu}</Link>
                      </li>
                    ))}
                    </ul>
                  </li>

                  <li className="sub-mobile-menu">
                    <Link href="#">{navData.menu2} <i className="fas fa-chevron-down float-end"></i></Link>
                    <ul className="list-unstyled">
                    {navData.submenu2 && navData.submenu2.map((item, index) => (
                      <li key={index}>
                        <Link href={`${item.link}`}>{item.submenu}</Link>
                      </li>
                    ))}
                    </ul>
                  </li>
                  <li className="sub-mobile-menu">
                    <Link href="#">{navData.menu3} <i className="fas fa-chevron-down float-end"></i></Link>
                    <ul className="list-unstyled">
                    {navData.submenu3 && navData.submenu3.map((item, index) => (
                      <li key={index}>
                        <Link href={`${item.link}`}>{item.submenu}</Link>
                      </li>
                    ))}
                    </ul>
                  </li>
                  <li className="sub-mobile-menu">
                    <Link href={`${navData.menu4_link}`}>{navData.menu4}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="join-with-us">
              <Link href={`${navData.btn_link}`} className="join-with-us-btn text-decoration-underline">
                <span className="btn-wrap">
                  <span className="text-one">{navData.btn}</span>
                  <span className="text-two">{navData.btn}</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header