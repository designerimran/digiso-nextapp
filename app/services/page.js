import InnerLine from "../components/common/InnerLine";
import dynamic from 'next/dynamic';
import ServiceSection from "../components/services/ServiceSection";
import TestimonialSection from "../components/services/TestimonialSection";
import WorkWithUs from "../components/portfolio/WorkWithUs";
import BrandSection from "../components/services/BrandSection";
import Footer3 from "../components/services/Footer3";
const Pageheader = dynamic(() => import('../components/services/Pageheader'), { ssr: false });

export const metadata = {
  title: "Services – Digiso - Digital Business Branding Agency React Template",
};

export default function Service() {

  return (
    <div className="">
      {/* main area start  */}
      <main className="position-relative">
        {/* lines  */}
        <InnerLine />
        {/* page header section start  */}
        <Pageheader />
        {/* page header section end  */}
        <ServiceSection />
        {/* testimonial section four start  */}
        <TestimonialSection />
        {/* testimonial section four end  */}
        {/* brand section two start  */}
        <BrandSection />
        {/* brand section two end  */}
        {/* work with us section start  */}
        <WorkWithUs />
        {/* work with us section end  */}
      </main>
      {/* main area end  */}
      {/* footer section start  */}
      <Footer3 />
      {/* footer section end  */}
    </div>
  )
}
