"use client";
// Custom landing page - CSS Include
import "@/public/landing/assets/css/style.css";
import { FeatureData, homepages, innerpageData } from "@/getData/landingData";
import Link from "next/link";
import $ from 'jquery';
import { useEffect } from "react";
import Preloader2 from "./components/Preloader2";
import Img from "./components/common/Img";

export default function Landing() {
  useEffect(() => {
    $('.site_header .main_menu_list > li:not(.active)').mouseover(function () {
      $('.site_header .main_menu_list > li:not(.active)').css({
        'opacity': '0.5',
        'transition': 'opacity 0.3s'
      });
      $(this).css({
        'opacity': '1',
        'color': 'var(--bs-white)',
        'transition': 'opacity 0.3s'
      });
    });

    $('.site_header .main_menu_list > li:not(.active)').mouseout(function () {
      $('.site_header .main_menu_list > li:not(.active)').css({
        'opacity': '1',
        'color': 'var(--bs-white)',
        'transition': 'opacity 0.3s'
      });
    });
  }, []);

  useEffect(() => {
    const preloader = $("#preloader");

    preloader.addClass("preloaded");
    setTimeout(() => {
      preloader.remove();
    }, 800);

    return () => {
      preloader.removeClass("preloaded"); 
    };
  }, []);


  return (
    <div className="page_wrapper">
      {/* Preloader - Start --> */}
      <Preloader2/>
      {/* Preloader - End --> */}

      {/* Line Animation - Satrt --> */}
      <div className="line_wrap">
        <div className="line_item"></div>
        <div className="line_item"></div>
        <div className="line_item"></div>
        <div className="line_item"></div>
        <div className="line_item"></div>
      </div>
      {/* Line Animation - End --> */}

      {/* Site Header - Start */}
      <header className="site_header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-5">
              <div className="site_logo">
                <a className="site_link" href="/">
                  <Img src="/landing/assets/images/logo/logo3.svg" style={{ width: "250px" }} alt="Site Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-2">
              <nav className="main_menu navbar p-0 navbar-expand-lg">
                <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                  <ul className="main_menu_list unordered_list justify-content-center">
                    <li><a className="nav-link scrollspy-btn" href="#hero_section">Home</a></li>
                    <li><a className="nav-link scrollspy-btn" href="#home_pages_section">Pre-Built Website</a></li>
                    <li><a className="nav-link scrollspy-btn" href="#inner_pages_section">Templates</a></li>
                    <li><a className="nav-link scrollspy-btn" href="#feature_section">Features</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-3 col-5">
              <ul className="btns_group p-0 unordered_list justify-content-end">
                <li>
                  <button className="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                  </button>
                </li>
                <li>
                  <Link className="btn" target="_blank" href="https://themeforest.net/user/xstheme/portfolio/">
                    <span className="btn_label" data-text="Live Demo">Live Demo</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* Site Header - End */}

      {/* Main Body - Start */}
      <main className="page_content">
        {/* Hero Section - Start */}
        <section id="hero_section" className="hero_section text-center">
          <div className="container">
            <div className="intro_heading">Creative Agency &amp; Portfolio Template</div>
            <h1 className="cd-headline clip is-full-width text-dark">
              <span>Build Your</span>
              <span className="cd-words-wrapper">
                <b className="is-visible">Creative Agency</b>
                <b className="is-hidden">Business Solution</b>
                <b className="is-hidden">Digital Marketing</b>
              </span>
              <span className="d-block">Websites With Digiso.</span>
            </h1>
            <p className="text-dark">
              Looking for a top-notch Creative, Agency, Business Solution Template? Meet <strong>Digiso</strong> &#8211; your tailored web design solution.
            </p>
          </div>
        </section>
        {/* Hero Section - End */}

        {/* Home Pages Section - Start */}
        <section id="home_pages_section" className="home_pages_section">
          <div className="container">
            <div className="bg-secondary bg-gradient pb-lg-5">
              <div className="heading_block text-center">
                <h2 className="heading_title text-dark mb-0">
                  <mark className="bg-dark">Pre-Built</mark> Website Demos
                </h2>
              </div>
              <div className="row">
                {homepages && homepages.map((item, index) => (
                  <div key={index} className="col-lg-4 col-md-12 col-sm-6">
                    <div className="page_card_block bg-white shadow-sm">
                      <div className="block_image">
                        <Link className="shadow" href={`${item.location}`} target="_blank" data-cursor-text="VIEW" style={{ backgroundImage: item.img? `url('${item.img}')` : null }}>
                        </Link>
                      </div>
                      <div className="block_content">
                        <h3 className="block_title text-black">
                          {item.title}
                        </h3>
                        <Link className="btn_unfill" href={`${item.location}`} target="_blank">
                          <span className="btn_label text-black">
                            {item.btn}
                          </span>
                          <span className="btn_icon">
                            <i className="fa-regular fa-arrow-up-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Home Pages Section - End */}

        {/* Core Feature Section - Start */}
        <section className="core_feature_section section_space">
          <div className="container">
            <div className="heading_block text-center">
              <h2 className="heading_title text-dark mb-0">
                Crafted With <mark className="bg-dark">Exclusive Features</mark>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="popular_feature_block bg-white shadow-sm">
                  <div className="block_icon">
                    <Img loading="lazy" src="/landing/assets/images/features/core_feature_image_1.webp" alt="Bootstrap Framework" />
                  </div>
                  <div className="block_content">
                    <h3 className="text-black">Bootstrap Framework</h3>
                    <p>
                      Bootstrap, the world&#39;s most popular and useful CSS Framework.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="popular_feature_block bg-white shadow-sm">
                  <div className="block_icon">
                    <Img loading="lazy" src="/landing/assets/images/features/core_feature_image_2.webp" alt="Built With SASS" />
                  </div>
                  <div className="block_content">
                    <h3 className="text-black">Built With SASS</h3>
                    <p>
                      SASS, use variables, nested, functions, and maintainable stylesheet development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="popular_feature_block bg-white shadow-sm">
                  <div className="block_icon">
                    <Img loading="lazy" src="/landing/assets/images/features/core_feature_image_4.webp" alt="Free Google Fonts" />
                  </div>
                  <div className="block_content">
                    <h3 className="text-black">
                      Google Fonts
                    </h3>
                    <p>
                      It&#39;s the leading host of open-source fonts for use on the Website
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="popular_feature_block bg-white shadow-sm">
                  <div className="block_icon">
                    <Img loading="lazy" src="/landing/assets/images/features/core_feature_image_3.webp" alt="Swiper Slider" />
                  </div>
                  <div className="block_content">
                    <h3 className="text-black">Swiper Slider</h3>
                    <p>
                      Swiper is the most modern free and open source mobile touch slider
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Core Feature Section - End */}

        {/* Inner Pages Section - Start */}
        <section id="inner_pages_section" className="inner_pages_section">
          <div className="container">
            <div className="bg-secondary bg-gradient pb-lg-5">
              <div className="heading_block text-center">
                <h2 className="heading_title text-dark mb-0">
                  <mark className="bg-dark">Inner Pages</mark> You Definitely Need
                </h2>
              </div>
              <div className="row">
                {innerpageData && innerpageData.map((item, index) => (
                  <div key={index} className="col-lg-6 col-md-12 col-sm-6">
                    <div className="page_card_block bg-white shadow-sm">
                      <div className="block_image">
                        <Link className="shadow" href={`${item.location}`} target="_blank" data-cursor-text="VIEW" style={{ backgroundImage: item.img? `url('${item.img}')`: null }}>
                        </Link>
                      </div>
                      <div className="block_content">
                        <h3 className="block_title text-black">
                          {item.title}
                        </h3>
                        <Link className="btn_unfill" href={`${item.location}`} target="_blank">
                          <span className="btn_label text-black">
                            {item.btn}
                          </span>
                          <span className="btn_icon">
                            <i className="fa-regular fa-arrow-up-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Inner Pages Section - End */}

        {/* Feature Section - Start */}
        <section id="feature_section" className="feature_section section_space">
          <div className="container">
            <div className="heading_block text-center">
              <h2 className="heading_title text-dark mb-0">
                Built with Most <mark className="bg-dark">Popular Features.</mark>
              </h2>
            </div>
            <div className="row">
              {FeatureData && FeatureData.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="feature_block bg-white">
                    <div className="block_icon text-dark">
                      {item.icon}
                    </div>
                    <div className="block_content">
                      <h3 className="text-black">{item.content}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Feature Section - End */}
      </main>
      {/* Main Body - End */}

      {/* Site Footer - Start */}
      <footer className="site_footer section_space text-center bg-gradient">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading_block">
                <h2 className="heading_title text-dark">
                  Let&#39;s Create Your Incredible Website With Digiso.
                </h2>
                <p className="heading_description text-dark">
                  One-time payment &amp; get free life time license &amp; updates. Feeling In Love? want to purchase the template!
                </p>
              </div>
              <Link className="btn btn-primary" target="_blank" href="https://themeforest.net/user/xstheme/portfolio/">
                <span className="btn_label" data-text="Live Demo">Live Demo</span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      {/* Site Footer - End */}
    </div>
  );
}
