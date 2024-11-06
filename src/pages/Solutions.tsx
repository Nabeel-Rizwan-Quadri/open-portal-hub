import { useEffect } from "react";
import { ArrowRight, Box, Workflow, Zap, Cloud, Lock, Settings, Users, Database, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
          <div className="max-w-4xl mx-auto text-center scroll-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade Automation Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 px-4 sm:px-0">
              Transform your business operations with our comprehensive suite of automation tools. 
              Built for scalability, security, and seamless integration with your existing systems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { icon: <Cloud className="h-8 w-8 text-customGreen" />, title: "Cloud-Native", text: "Deploy anywhere with containerized architecture" },
                { icon: <Lock className="h-8 w-8 text-customGreen" />, title: "Enterprise Security", text: "Bank-grade encryption and access controls" },
                { icon: <Settings className="h-8 w-8 text-customGreen" />, title: "Easy Integration", text: "Connect with your existing tools seamlessly" }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-customGreen transition-all">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
      </section>

      {/* Section Two: OpenFlow */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-slide-left space-y-6">
              <h2 className="text-3xl font-bold mb-6">
                OpenFlow: Advanced Process Orchestration
              </h2>
              <p className="text-gray-300">
                Take control of your automation workflows with our powerful orchestration platform. 
                OpenFlow helps you manage complex processes, coordinate multiple robots, and maintain 
                visibility across your entire automation landscape.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <Database className="h-5 w-5 text-customGreen" />, text: "Centralized Control" },
                  { icon: <Users className="h-5 w-5 text-customGreen" />, text: "Team Collaboration" },
                  { icon: <LineChart className="h-5 w-5 text-customGreen" />, text: "Real-time Analytics" },
                  { icon: <Box className="h-5 w-5 text-customGreen" />, text: "Multi-robot Management" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 hover:border-customGreen transition-all">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="scroll-slide-right">
              <div className="p-6 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50">
                <Workflow className="w-full h-48 text-customGreen mb-4" />
                <h3 className="text-xl font-semibold mb-4">Visual Process Designer</h3>
                <p className="text-gray-400">
                  Design and deploy complex automation workflows using our intuitive drag-and-drop interface. 
                  Perfect for both technical and non-technical users.
                </p>
                <Button className="mt-6 w-full" size="lg">
                  Try Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Three: OpenRPA */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-gray-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 scroll-slide-left">
              <div className="p-6 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50">
                <Zap className="w-full h-48 text-customGreen mb-4" />
                <h3 className="text-xl font-semibold mb-4">No-Code Automation Builder</h3>
                <p className="text-gray-400">
                  Create powerful automation workflows without writing code. Perfect for business users 
                  who want to automate repetitive tasks quickly and efficiently.
                </p>
                <Button className="mt-6 w-full" size="lg" variant="outline">
                  Watch Tutorial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 scroll-slide-right space-y-6">
              <h2 className="text-3xl font-bold mb-6">
                OpenRPA: Intelligent Process Automation
              </h2>
              <p className="text-gray-300">
                Empower your team with our intelligent RPA solution that combines ease of use with 
                enterprise-grade capabilities. Build and deploy automations faster than ever with our 
                intuitive visual interface and extensive component library.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <Box className="h-5 w-5 text-customGreen" />, text: "Visual Designer" },
                  { icon: <Box className="h-5 w-5 text-customGreen" />, text: "Smart Recording" },
                  { icon: <Box className="h-5 w-5 text-customGreen" />, text: "Cross-Platform" },
                  { icon: <Box className="h-5 w-5 text-customGreen" />, text: "AI-Powered" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 hover:border-customGreen transition-all">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;