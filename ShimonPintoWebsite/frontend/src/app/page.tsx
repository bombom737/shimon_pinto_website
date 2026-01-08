"use client"
import { useRef } from "react";
import { AppSidebar } from "@/components/Sidebar/Sidebar";
import LandingPage from "../components/LandingPage/LandingPage";
import AboutPage from "@/components/AboutPage/AboutPage";
import PortfolioPage from "@/components/PortfolioPage/PortfolioPage";
import ContactPage from "@/components/ContactPage/ContactPage";
import "./globals.css";

export default function MainPage() {
  const landingRef = useRef<HTMLDivElement>(null!);
  const aboutRef = useRef<HTMLDivElement>(null!);
  const portfolioRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);

  return (
    <div className='flex w-[100vw] h-full bg-[#fafafa]'>
      <AppSidebar landingRef={landingRef} aboutRef={aboutRef} portfolioRef={portfolioRef} contactRef={contactRef}/>
      <div className='h-full'>
        <div className="bg-[url('/shimon-landing-page.jpg')] bg-cover bg-no-repeat bg-fixed">
          <div ref={landingRef}>
            <LandingPage />
          </div>
          <div ref={aboutRef}>
            <AboutPage />
          </div>
          <div ref={portfolioRef}> 
            <PortfolioPage />
          </div>
          <div ref={contactRef}>
            <ContactPage />
          </div>
        </div>
      </div>
    </div>
  );
}
