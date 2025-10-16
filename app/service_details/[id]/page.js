
import { serviceDetails } from "@/getData/getData";
import InnerLine from "../../components/common/InnerLine";
import LetsTalkUs from "../../components/portfolio/LetsTalkUs";
import WorkWithUs from "../../components/portfolio/WorkWithUs";
import SplitText2 from "../../components/common/Split_text2";
import Link from "next/link";
import dynamic from 'next/dynamic'
import Footer1 from "../../components/portfolio/Footer1";
import Img from "@/app/components/common/Img";
const ServiceDetailSection = dynamic(() => import('../../components/services/ServiceDetailSection'), { ssr: false })

export const metadata = {
  title: "Services Details – Digiso - Digital Business Branding Agency React Template",
};

export default async function Service_details({params}) {
  // const {id} = params;
  // const data = await serviceDetails(id);
  const data = await serviceDetails(1);
  return (
    <div >
      {/* main area start  */}
      <main className="position-relative">
        {/* lines  */}
        <InnerLine />
        {/* page header section start  */}
        <section className="page-header">
          <div className="container px-0">
            <div className="row">
              <div className=" col-lg-5 col-xl-6">
                <div className="position-relative">
                  <SplitText2 cls="page-sub-title text-uppercase" line1={data.subtitle} />
                  <Img className="position-absolute page-header-shape contact-page-header-shape"
                    src="/assets/img/images/page-header-shape.svg" alt="page-header-shape" />
                </div>
              </div>
              <div className=" col-lg-7 col-xl-6">
                <p className="short-info service-details-short-info">{data.content1}</p>
              </div>
            </div>
            <h1 className="page-title text-uppercase position-absolute z-n1">{data.title}</h1>
          </div>
        </section>
        {/* page header section end  */}
        {/* contact info section start  */}
        <div className="service-list-section">
          <div className="container px-0">
            <div className="row">
              <div className=" col-lg-5 col-xl-6 align-self-end">
                <div className="common-social-icon d-flex">
                  {data.socal_icon && data.socal_icon.map((item, index) => (
                    <Link key={index} className="d-flex justify-content-center align-items-center" href={item.link}><Img
                      src={item.img} alt="contact-icon" /></Link>
                  ))}
                </div>
              </div>
              <div className=" col-lg-3 col-xl-3 col-sm-6">
                <div className="contact-info">
                  <ul className="list-unstyled">
                    {data.list1 && data.list1.slice(0, data.list1.length / 2).map((item, index) => (
                      <li key={index}><span>{item.icon}</span> {item.content}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className=" col-lg-4 col-xl-3 col-sm-6">
                <div className="contact-info">
                  <ul className="list-unstyled">
                    {data.list1 && data.list1.slice(data.list1.length / 2, data.list1.length).map((item, index) => (
                      <li key={index}><span>{item.icon}</span> {item.content}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact info section end  */}
        <ServiceDetailSection data={data} />
        {/* work with us section start  */}
        <WorkWithUs />
        {/* work with us section end  */}
        {/* lets talk with us section start  */}
        <LetsTalkUs />
        {/* lets talk with us section end  */}
      </main>
      {/* main area end  */}
      <Footer1/>
    </div>
  )
}
