
import FooterSection from '../components/about/FooterSection';
import PageheaderSection from '../components/about/PageheaderSection';
import CallToAction from '../components/about/CallToAction';
import WhyChooseUs from '../components/about/WhyChooseUs';
import ServiceSection from '../components/about/ServiceSection';
import ProjectSection from '../components/about/ProjectSection';
import TeamSection from '../components/about/TeamSection';
import TextMarque2 from '../components/about/TextMarque2';
import BrandMarque from '../components/about/BrandMarque';
import TestimonialSection from '../components/about/TestimonialSection';
import InnerLine from '../components/common/InnerLine';
import dynamic from 'next/dynamic';
import React from 'react';

const CounterSection = dynamic(() => import('../components/about/CounterSection'), { ssr: false });

export const metadata = {
  title: "About Us – Digiso – Digital Agency & Business Solution Site Template.",
};

export default function About() { 

  return (
    <div  >
      {/* main area start  */}
      <main className="position-relative">
        {/* lines  */}
        <InnerLine/>
        {/* page header section start  */}
        <PageheaderSection/>
        {/* page header section end  */}
        {/* counter section start  */}
        <CounterSection/>
        {/* counter section end  */}
        {/* why choose us section start  */}
        <WhyChooseUs/>
        {/* why choose us section end  */}
        {/* Services section start  */}
        <ServiceSection/>
        {/* Services section end  */}
        {/* projects section start  */}
        <ProjectSection/>
        {/* projects section end  */}
        {/* team section two start  */}
        <TeamSection/>
        {/* team section two end  */}
        {/* text slider section start  */}
        <TextMarque2/>
        {/* text slider section end  */}
        {/* brand slider section start  */}
        <BrandMarque cls="reverse"/>
        <BrandMarque />
        {/* brand slider section end  */}
        {/* testimonial section two start */}
        <TestimonialSection/>
        {/* testimonial section two end */}
        {/* call to action section start  */}
        <CallToAction/>
        {/* call to action section end  */}
      </main>
      {/* main area end  */}
      <FooterSection cls="footer-three-bg" />
    </div>
  )
}
