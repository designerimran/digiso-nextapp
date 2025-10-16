import { blogdetails } from "@/getData/getData";
import BlogSection2 from "../components/blog/BlogSection2";
import Footer1 from "../components/portfolio/Footer1";
import LetsTalkUs from "../components/portfolio/LetsTalkUs";
import WorkWithUs from "../components/portfolio/WorkWithUs";
import SplitText2 from "../components/common/Split_text2";
import Revealimg from "../components/team/Revealimg";
import InnerLine from "../components/common/InnerLine";
import Img from "../components/common/Img";

export const metadata = {
  title: "Blog Details – Uniaa – Digital Agency & Business Solution Site Template.",
};

export default async function Blog_details() {
  const data = await blogdetails(1);
  return (
    <div>
      {/* main area start  */}
      <main className="position-relative">
        {/* lines  */}
        <InnerLine />
        {/* page header section start  */}
        <section className="page-header">
          <div className="container px-0">
            <div className="row">
              <div className="col-lg-9 align-self-center">
                <p className="blog-details-meta">{data.pageheader_content}</p>
                <SplitText2 cls="page-sub-title2 w-100" line1={data.pageheader_subtitle} />
              </div>
            </div>
            <h1 className="page-title text-uppercase position-absolute z-n1">{data.pageheader_title}</h1>
          </div>
        </section>
        {/* page header section end  */}
        {/* blog details section start  */}
        <section className="blog-details-section">
          <div className="container px-0">
            <div className="writer-info d-flex align-items-center">
              <div className="info-block d-flex align-items-center gap-3">
                <div className="img">
                  <Img src={data.writer_info_img} alt="blog-writer" className="img-fluid w-100" />
                </div>
                <div className="text">
                  <p>{data.writer_info_writenby}</p>
                  <h4 className="title">{data.writer_info_title1}</h4>
                </div>
              </div>
              <div className="info-block">
                <div className="text viewed">
                  <p>{data.writer_info_viewed}</p>
                  <h4 className="title">{data.writer_info_title2}</h4>
                </div>
              </div>
            </div>
            <Revealimg cls="zoom-out" img={data.bannerImg1} />
            <div className="blog-details-info mt-5">
              <p>{data.content1}</p>
              <p>{data.content2}</p>
              <div className="inner-block-img">
                <div className="row g-4">
                  <div className="col-lg-7 col-md-7">
                    <div className="img reveal left">
                      <Img src={data.bannerImg2} alt="blog-inner-img" className="img-fluid w-100" />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    <div className="img reveal left">
                      <Img src={data.bannerImg3} alt="blog-inner-img" className="img-fluid w-100" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-block">
                <div className="section-title-block">
                  <SplitText2 cls="section-title" line1={data.headingTitle1} />
                </div>
                <p>{data.content1}{data.content2}</p>
              </div>
              <div className="content-block">
                <div className="section-title-block">
                  <SplitText2 cls="section-title" line1={data.headingTitle2} />
                </div>
                <p>{data.content1}</p>
                <ul className="list-unstyled">
                  {data.list && data.list.map((item, index) => (
                    <li key={index}><span>+</span> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="content-block">
                <div className="section-title-block">
                  <SplitText2 cls="section-title" line1={data.headingTitle3} />
                </div>
                <p>{data.content3}</p>
              </div>
              <div className="inner-block-img">
                <Img src={data.bannerImg4} alt="blog-inner-img" className="img-fluid w-100" />
                <p>{data.content4}</p>
              </div>
            </div>
            <BlogSection2 heading={data.headingTitle4} />
          </div>
        </section>
        {/* blog details section end  */}
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

