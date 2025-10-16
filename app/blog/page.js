import { blogpage } from "@/getData/getData";
import BlogSection from "../components/blog/BlogSection";
import Pageheder from "../components/common/Pageheader";
import Footer1 from "../components/portfolio/Footer1";
import LetsTalkUs from "../components/portfolio/LetsTalkUs";
import WorkWithUs from "../components/portfolio/WorkWithUs";
import InnerLine from "../components/common/InnerLine";

export const metadata = {
  title: "Blogs – Digiso – Digital Agency & Business Solution Site Template.",
};

export default async function Blogs() {
  const headerData = await blogpage();
  return (
    <div>
      {/* main area start  */}
      <main className="position-relative">
        {/* lines  */}
        <InnerLine/>
        {/* page header section start */}
        <Pageheder cls="blog-short-info" title={headerData.title} subtitle={headerData.subtitle} content={headerData.content} />
        {/* page header section end  */}
        {/* blog section start  */}
        <BlogSection/>
        {/* blog section end  */}
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
