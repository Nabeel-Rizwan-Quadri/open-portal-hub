import { useEffect } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Community from "@/components/Community";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Community />
    </>
  );
};

export default Index;