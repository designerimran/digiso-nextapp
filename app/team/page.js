
import InnerLine from "../components/common/InnerLine";
import Footer1 from "../components/portfolio/Footer1";
import LetsTalkUs from "../components/portfolio/LetsTalkUs";
import WorkWithUs from "../components/portfolio/WorkWithUs";
import Pageheder from "../components/team/Pageheder";
import TeamSection from "../components/team/TeamSection";

export const metadata = {
  title: "Expert Team – Digiso - Digital Business Branding Agency React Template",
};

export default function Team() {

  return (
    <div >
      {/* main area start  */}
      <main className="position-relative">
        {/* lines  */}
        <InnerLine />
        {/* page header section start  */}
        <Pageheder />
        {/* page header section end  */}
        {/* team section two start  */}
        <TeamSection />
        {/* team section two end  */}
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
