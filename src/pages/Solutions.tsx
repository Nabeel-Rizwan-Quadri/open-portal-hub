import { useEffect } from "react";
import { ArrowRight, Box, Workflow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-fade-in, .scroll-slide-left, .scroll-slide-right");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16">
      {/* Section One: Overview */}
      <section className="py-20 px-4 gradient-bg relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center scroll-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Automation Solutions for Everyone
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From non-technical business owners to experienced developers, our tools empower everyone to streamline processes and integrate systems with ease.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
      </section>

      {/* Section Two: OpenFlow */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-slide-left">
              <h2 className="text-3xl font-bold mb-6">
                OpenFlow: Advanced Orchestration Software
              </h2>
              <p className="text-gray-300 mb-6">
                Centralize and scale your automation workflows with our powerful orchestration tool. OpenFlow helps you control multiple automation robots and manage complex processes from a single interface.
              </p>
              <ul className="space-y-4">
                {[
                  "Centralized Control Dashboard",
                  "Scalable Workflow Management",
                  "Real-time Monitoring",
                  "Multi-robot Orchestration"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 feature-card">
                    <Box className="h-5 w-5 text-customGreen" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="scroll-slide-right">
              <div className="p-6 rounded-lg border border-gray-800 hover:border-customGreen transition-all duration-300">
                <Workflow className="w-full h-48 text-customGreen mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visual Workflow Builder</h3>
                <p className="text-gray-400">
                  Design and deploy complex automation workflows using our intuitive visual interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Three: OpenRPA */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 scroll-slide-left">
              <div className="p-6 rounded-lg border border-gray-800 hover:border-customGreen transition-all duration-300">
                <Zap className="w-full h-48 text-customGreen mb-4" />
                <h3 className="text-xl font-semibold mb-2">Drag-and-Drop Automation</h3>
                <p className="text-gray-400">
                  Create powerful automation workflows without writing a single line of code.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 scroll-slide-right">
              <h2 className="text-3xl font-bold mb-6">
                OpenRPA: Comprehensive Automation Tool
              </h2>
              <p className="text-gray-300 mb-6">
                Build and deploy automation workflows using our intuitive drag-and-drop interface. OpenRPA makes automation accessible to everyone, regardless of technical expertise.
              </p>
              <ul className="space-y-4">
                {[
                  "Visual Workflow Designer",
                  "No-Code Automation",
                  "Cross-Platform Support",
                  "Enterprise Integration"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 feature-card">
                    <Box className="h-5 w-5 text-customGreen" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto scroll-fade-in">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-gray-300 mb-8">
              Start automating your processes today with our powerful suite of tools.
            </p>
            <Button
              size="lg"
              className="animate-pulse hover:animate-none hover:scale-105 transition-transform"
              onClick={() => window.open('https://docs.openiap.io/', '_blank', 'noopener,noreferrer')}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;