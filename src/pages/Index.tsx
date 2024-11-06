import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Community from "@/components/Community";
import Compatible from "@/components/Compatible";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Compatible />
      {/* <Testimonials /> */}
      <Community />
      {/* <Pricing /> */}
      <CallToAction />
      <Footer />
    </>
  );
};

export default Index;