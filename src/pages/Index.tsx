import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Community from "@/components/Community";
import Compatible from "@/components/Compatible";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Compatible />
        <Community />
        {/* <Pricing /> */}
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
};

export default Index;