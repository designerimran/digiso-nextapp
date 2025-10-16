import dynamic from "next/dynamic";
import LetsTalkUs from "../components/portfolio/LetsTalkUs";
import WorkWithUs from "../components/portfolio/WorkWithUs";
import { portfolioDetails } from "@/getData/getData";
import SplitText2 from "../components/common/Split_text2";
import PortfolioSection2 from "../components/portfolio/PortfolioSection2";
import Footer1 from "../components/portfolio/Footer1";
import InnerLine from "../components/common/InnerLine";
import Img from "../components/common/Img";

const VideoSection = dynamic(() => import('../components/common/VideoSection'), { ssr: false })

export const metadata = {
  title: "Portfolio Details – Digiso - Digital Business Branding Agency React Template",
};

export default async function Portfolio_details() {
  const data = await portfolioDetails(1);
  return (
    <div >
      {/* main area start  */}
      <main className="position-relative">
        {/* lines  */}
        <InnerLine/>
        {/* page header section start  */}
        <section className="page-header ">
          <div className="container px-0 ">
            <div className="row">
              <div className="col-xl-8 col-lg-6 align-self-center">
                <SplitText2 cls="page-sub-title w-100 text-uppercase" line1={data.pageheader_subtitle} />
              </div>
              <div className="col-xl-4 col-lg-6 align-self-end">
                <div className="project-list-info">
                  <div className="row">
                    {data.pageheader_projectlist && data.pageheader_projectlist.map((item, index) => (
                      <div className="col-lg-6 col-sm-6 col-6" key={index}>
                        <div className="info-item">
                          <p className="sub-title">{item.subtitle}</p>
                          <h4 className="title">{item.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <h1 className="page-title text-uppercase position-absolute z-n1 pricing-title">{data.pageheader_title}</h1>
          </div>
        </section>
        {/* page header section end  */}
        {/* video section start  */}
        <VideoSection cls="portfolio-video-section" img={data.bannerImg} video={data.bannerVideo} btn={data.bannerbtn} />
        {/* video section end  */}
        {/* portfolio details section start  */}
        <section className="portfolio-details-section">
          <div className="container px-0">
            <div className="inner-text">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                  <SplitText2 cls="inner-title" line1={data.headingTitle1} />
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="right-text">
                    <p>{data.content1}</p>
                    <ul className="list-unstyled">
                      {data.list && data.list.map((item, index) => (
                        <li key={index}><span>+</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-banner-img reveal zoom-out">
              <Img src="assets/img/portfolio/portfolio-details-inner-banner.png" alt="portfolio-details-inner-banner"
                className="img-fluid w-100" />
            </div>
            <div className="inner-text inner-text-block2">
              <div className="row">
                <div className="col-xl-5">
                  <SplitText2 cls="inner-title" line1={data.headingTitle2} />
                </div>
                <div className="col-xl-7">
                  <div className="right-text">
                    <p>{data.content2}</p>
                    <div className="typhography d-flex align-items-center">
                      <div className="letter-img">
                        <Img src="assets/img/portfolio/portfolio-letter.svg" alt="portfolio-letter" />
                      </div>
                      <div className="info">
                        <ul className="list-unstyled">
                          {data.list2 && data.list2.map((item, index) => (
                            <li key={index} className="d-flex align-items-center"><span>{item.text1}</span> <small>{item.text2}</small></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-images">
              <div className="row g-4 inner-img-container">
                <div className="col-lg-6 col-md-6">
                  <div className="img reveal left">
                    <Img src={data.innerImg1} alt="portfolio-details-inner-img"
                      className="img-fluid w-100" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="img reveal left">
                    <Img src={data.innerImg2} alt="portfolio-details-inner-img"
                      className="img-fluid w-100" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="img reveal right">
                    <Img src={data.innerImg3} alt="portfolio-details-inner-img"
                      className="img-fluid w-100" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="img reveal left">
                    <Img src={data.innerImg4} alt="portfolio-details-inner-img"
                      className="img-fluid w-100" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 align-self-center ms-auto">
                  <div className="text">
                    <p>{data.content3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* portfolio details section end  */}
        {/* related project section start  */}
        <PortfolioSection2 heading={data.headingTitle3} fastindex="3" lastindex="6" />
        {/* related project section end  */}
        {/* work with us section start  */}
        <WorkWithUs />
        {/* work with us section end  */}
        {/* lets talk with us section start  */}
        <LetsTalkUs />
        {/* lets talk with us section end  */}
      </main>
      {/* main area end  */}
      <Footer1 />
    </div>
  )
}
