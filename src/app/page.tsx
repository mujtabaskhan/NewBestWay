"use client";

import Difference from "@/components/Difference";
import FAQ from "@/components/FAQ";
import ModernHero from "@/components/Hero";
// import ClientSlider from "@/components/clientslider"
import CPAHero from "@/components/About";
import ContactSection from "@/components/about/ContactSection";
import GoogleMap from "@/components/GoogleMap";
import Navbar from "@/components/Navbar";
import MeetFounderHome from "@/components/MeetFounderHome";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen">
        <ModernHero />
        <CPAHero />
        <Difference />
        <FAQ />
        <MeetFounderHome />
        <GoogleMap />
        <ContactSection hideHeading={false} />
      </div>
    </>
  );
}
