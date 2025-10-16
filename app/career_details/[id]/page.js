import React from 'react'
import InnerLine from '../../components/common/InnerLine';
import Pageheder from '../../components/common/Pageheader';
import Link from 'next/link';
import { careerdetails } from '@/getData/getData';
import SplitText2 from '../../components/common/Split_text2';
import SubscribeNow from '../../components/common/SubscribeNow';
import Footer2 from '../../components/common/Footer2';
import Img from '@/app/components/common/Img';

export const metadata = {
  title: "Career Details – Digiso – Digital Agency & Business Solution Site Template.",
};

export default async function Career_Details({params}) {
  // const { id } = params;
  // const data = await careerdetails(id);
  const data = await careerdetails(1);
  return (
    <div>
      {/* main area start  */}
      <main className="position-relative">
        {/* lines  */}
        <InnerLine />
        {/* page header section start  */}
        <Pageheder subtitle={data.pagesubtitle} title={data.pagetitle} content={data.headercontent} />
        {/* page header section end  */}
        {/* career details banner section start  */}
        <section className="career-details-banner-section position-relative"
          style={{ backgroundImage: `url('${data.bannerImg}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
          <div className="container px-0">
            <div
              className="career-details-info d-flex flex-wrap justify-content-between position-absolute bottom-0 start-50 translate-middle-x w-100">
              {data.infoItem && data.infoItem.map((item, index) => (
                <div key={index} className="info-item d-flex flex-column">
                  <div className="info-block">
                    <p className="sub-title">{item.subtitle}</p>
                    <h4 className="title">{item.title}</h4>
                  </div>
                  <div className="info-block">
                    <p className="sub-title">{item.subtitle2}</p>
                    <h4 className="title">{item.title2}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* career details banner section end  */}
        {/* career description start  */}
        <div className="career-description-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                {/* <h4 className="title split-text right">Join the world’s biggest family.</h4> */}
                <SplitText2 cls="title" line1={data.description_title} />
                <h6 className="sub-title">{data.description_subtitle}</h6>
                <p>{data.description1}</p>
                <p>{data.description2}</p>
                <div className="inner-img">
                  <Img src={data.innerImg} alt="career-inner-img" className="img-fluid w-100" />
                </div>
                <h4 className="inner-title">{data.inner_title1}</h4>
                <ul>
                  {data.requirements1 && data.requirements1.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <h4 className="inner-title">{data.inner_title2}</h4>
                <ul>
                  {data.requirements2 && data.requirements2.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="email-cv">
                  <h4 className="inner-title">{data.inner_title3}</h4>
                  <p>{data.email_text}<Link href={data.email_link}>{data.email}</Link></p>
                </div>
                <div className="apply-now">
                  <SplitText2 cls="title" line1={data.applynow} />
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group">
                          <input type="text" className="form-control rounded-0 px-0" placeholder="Your last name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <input type="text" className="form-control rounded-0 px-0" placeholder="Your first name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <input type="text" className="form-control rounded-0 px-0" placeholder="Your email address*" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <input type="text" className="form-control rounded-0 px-0" placeholder="Your phone number*" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <input type="text" className="form-control rounded-0 px-0" placeholder="Working experience*" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <label className="form-label" htmlFor="file">{data.formlabel}</label>
                          <input type="file" id="file" className="form-control rounded-0 px-0 d-none" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-group">
                          <textarea placeholder="Your Message" className="form-control form-textarea rounded-0 px-0"></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="theme-btn position-relative">{data.formbtn}<span
                          className="d-flex justify-content-center align-items-center position-absolute top-0">
                          <Img src="/assets/img/icons/icon-up-right.svg" alt="icon-up-right" /></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* career description end  */}
      </main>
      {/* main area end  */}
      <SubscribeNow />
      <Footer2 />
    </div>
  )
}