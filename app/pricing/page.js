import { pricingheader } from "@/getData/getData";
import Footer2 from "../components/common/Footer2";
import InnerLine from "../components/common/InnerLine";
import SubscribeNow from "../components/common/SubscribeNow";
import dynamic from "next/dynamic";
import SplitText2 from "../components/common/Split_text2";
import PricingSection from "../components/pricing/PricingSection";
import Img from "../components/common/Img";
const VideoSection = dynamic(() => import('../components/common/VideoSection'), { ssr: false })

export const metadata = {
  title: "Pricing – Digiso - Digital Business Branding Agency React Template",
};

export default async function Pricing() {
  const data = await pricingheader();
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
              <div className="col-lg-8 align-self-center">
                <div className="position-relative">
                  <SplitText2 cls="page-sub-title2 w-100" line1={data.subtitle} />
                  <Img src="assets/img/images/page-header-shape.svg" alt="page-header-shape"
                    className="page-header-shape position-absolute" />
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <p className="short-info pricing-short-info">{data.content}</p>
              </div>
            </div>
            <h1 className="page-title text-uppercase position-absolute z-n1">{data.title}</h1>
          </div>
        </section>
        {/* page header section end  */}
        {/* pricing section start  */}
        <PricingSection />
        {/* pricing section end  */}
        {/* video section start  */}
        <VideoSection cls="" img={data.video_section_img} video={data.video_section_video} btn={data.video_section_btn} />
        {/* video section end  */}
      </main>
      {/* main area end  */}

      <SubscribeNow />
      <Footer2 />
    </div>
  )
}
