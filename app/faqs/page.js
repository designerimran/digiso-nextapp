import { faqs } from "@/getData/getData";
import InnerLine from "../components/common/InnerLine";
import SplitText2 from "../components/common/Split_text2";
import Footer2 from "../components/common/Footer2";
import SubscribeNow from "../components/common/SubscribeNow";
import FaqSection from "../components/faq/FaqSection";

export const metadata = {
  title: "FAQ – Digiso - Digital Business Branding Agency React Template",
};

export default async function Faq() {
  const data = await faqs();
  return (
    <div className="">
      {/* main area start  */}
      <main className="position-relative">
        <InnerLine />
        {/* page header section start  */}
        <section className="page-header">
          <div className="container px-0">
            <div className="row">
              <div className="col-lg-8">
                <SplitText2 cls="page-sub-title2 w-100" line1={data.subtitle} />
              </div>
              <div className="col-lg-4">
                <p className="short-info faq-short-info">{data.content}</p>
              </div>
            </div>
            <h1 className="page-title text-uppercase position-absolute z-n1">{data.title}</h1>
          </div>
        </section>
        {/* page header section end  */}
        {/* faq section start  */}
        <FaqSection data={data} />
        {/* faq section end  */}
      </main>
      {/* main area end  */}
      <SubscribeNow/>
      <Footer2/>
    </div>
  )
}
