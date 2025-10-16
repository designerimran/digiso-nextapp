
import InnerLine from "../components/common/InnerLine";
import Pageheder from "../components/common/Pageheader";
import Footer1 from "../components/portfolio/Footer1";
import LetsTalkUs from "../components/portfolio/LetsTalkUs";
import PortfolioSection from "../components/portfolio/PortfolioSection";
import WorkWithUs from "../components/portfolio/WorkWithUs";
import { portfolioPageheader } from '@/getData/getData'

export const metadata = {
  title: "Portfolio – Digiso - Digital Business Branding Agency React Template",
};

export default async function Portfolio() {
  const headerData = await portfolioPageheader();
  return (
    <div >
      {/* main area start  */}
      <main className="position-relative">
        {/* lines  */}
        <InnerLine/>
        {/* page header section start  */}
        <Pageheder cls="portfolio-short-info" title={headerData.title} subtitle={headerData.subtitle} content={headerData.content} />
        {/* page header section end  */}
        {/* portfolio section start  */}
        <PortfolioSection/>
        {/* portfolio section end  */}
        {/* work with us section start  */}
        <WorkWithUs/>
        {/* work with us section end  */}
        {/* lets talk with us section start  */}
        <LetsTalkUs/>
        {/* lets talk with us section end  */}
      </main>
      {/* main area end  */}
      <Footer1 />
    </div>
  )
}
