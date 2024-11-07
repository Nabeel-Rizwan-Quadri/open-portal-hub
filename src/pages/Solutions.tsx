import { useEffect } from "react";
import { ArrowRight, Box, Workflow, Zap, Cloud, Lock, Settings, Users, Database, LineChart, LayoutGrid, Puzzle, Columns, Rows, Shapes } from "lucide-react";
import { Button } from "@/components/ui/button";
import Opencore from "../images/opencore.png"

const Solutions = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
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

    const elements = document.querySelectorAll(".scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-zoom-in, .scroll-rotate-in, .scroll-bounce");
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
              Your
              <span className="bg-clip-text text-customGreen">
                {" "}Single Point{" "}
              </span>
              of Automation
              {/* Your All-in-One Solution for Automation */}
            </h1>
            <p className="text-xl text-gray-300  px-4 sm:px-0">
              {/* Transform your business operations with our comprehensive suite of automation tools. 
              Built for scalability, security, and seamless integration with your existing systems. */}

              {/* Enhance your business process with our robust suite of automation tools, designed for scalability, security, and effortless integration with your existing systems. */}

              Elevate your business processes with our powerful automation suite, crafted for seamless scalability, top-tier security, and easy integration with your current systems.
            </p>
            <p className="text-xl text-gray-300 mb-8 px-4 sm:px-0">
              Unlock efficiency and drive growth effortlessly.
            </p>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
            </div> */}
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
                OpenCore: Advanced Process Orchestration
              </h2>
              <p className="text-gray-300">
                {/* Take control of your automation workflows with our powerful orchestration platform.
                OpenFlow helps you manage complex processes, coordinate multiple robots, and maintain
                visibility across your entire automation landscape. */}
                A versatile and secure orchestration platform designed to integrate seamlessly with your existing RPA, CRM, ERP, SCM, and other software. Run it in the cloud or on-premise with comprehensive coding support, allowing developers to work with their preferred languages and in familiar environments.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <Database className="h-5 w-5 text-customGreen" />, text: "Centralized Control" },
                  { icon: <Users className="h-5 w-5 text-customGreen" />, text: "Team Collaboration" },
                  { icon: <LineChart className="h-5 w-5 text-customGreen" />, text: "Real-time Analytics" },
                  { icon: <Box className="h-5 w-5 text-customGreen" />, text: "Cross-Platform Integration" }
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
                <h3 className="text-xl font-semibold mb-4">Versatile Automation Toolkit</h3>
                <p className="text-gray-400">
                  Leverage the Power of Code for Advanced Automation, with Drag-and-Drop Functions for Simpler Workflows; Empowering Both Developers and Non-Technical Users to Work Seamlessly Together.
                </p>
                <Button className="mt-6 w-full" size="lg">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Section Four: Integration Hub */}
       <section className="py-20 px-4 bg-gradient-to-tr from-gray-900 via-background to-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto scroll-zoom-in opacity-0 scale-95 transition-all duration-700">
            {/* <h2 className="text-3xl font-bold text-center mb-12">Integration Hub</h2> */}
            <img src={Opencore} width={600} className="filter blur-sm place-self-center"/>  
            {/* <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <LayoutGrid className="h-8 w-8 text-customGreen" />, title: "300+ Connectors", text: "Connect with your favorite tools and platforms" },
                { icon: <Puzzle className="h-8 w-8 text-customGreen" />, title: "Custom APIs", text: "Build your own integrations with our SDK" },
                { icon: <Cloud className="h-8 w-8 text-customGreen" />, title: "Cloud Ready", text: "Deploy anywhere with our cloud-native architecture" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-customGreen transition-all">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              ))}
            </div> */}
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

      {/* Section Five: Security Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 scroll-rotate-in opacity-0 transition-all duration-700" style={{ transform: 'rotate(-5deg)' }}>
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
                alt="Security Visualization"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Enterprise-Grade Security</h2>
              <p className="text-gray-300">
                Our platform is built with security at its core. With end-to-end encryption,
                role-based access control, and compliance with major security standards,
                your data is always protected.
              </p>
              <ul className="space-y-4">
                {[
                  "End-to-end encryption",
                  "Role-based access control",
                  "Audit logging",
                  "Compliance certifications"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-customGreen" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Six: Analytics Dashboard */}
      <section className="py-20 px-4 bg-gradient-to-bl from-gray-900 via-background to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12 scroll-bounce opacity-0 transition-all duration-700">
            <h2 className="text-3xl font-bold mb-4">Advanced Analytics</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get deep insights into your automation workflows with our comprehensive analytics dashboard.
              Monitor performance, track efficiency, and optimize your processes in real-time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <LineChart />, value: "99.9%", label: "Uptime" },
              { icon: <Zap />, value: "50ms", label: "Average Response" },
              { icon: <Users />, value: "10k+", label: "Active Users" },
              { icon: <Database />, value: "1B+", label: "Daily Transactions" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-customGreen transition-all">
                <div className="text-customGreen mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Seven: Process Automation */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 scroll-slide-left">
              <h2 className="text-3xl font-bold">Intelligent Process Automation</h2>
              <p className="text-gray-300">
                Transform your business processes with AI-powered automation. Our platform learns from your workflows
                and continuously optimizes them for maximum efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Shapes />, text: "Smart Workflows" },
                  { icon: <Columns />, text: "Process Mining" },
                  { icon: <Rows />, text: "Task Automation" },
                  { icon: <Settings />, text: "Custom Rules" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 hover:border-customGreen transition-all">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="scroll-slide-right">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Automation Robot"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Eight: Developer Tools */}
      <section className="py-20 px-4 bg-gradient-to-tr from-gray-900 via-background to-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Developer Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "API Documentation",
                  description: "Comprehensive API documentation with interactive examples and SDKs for major programming languages.",
                  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                },
                {
                  title: "Developer Portal",
                  description: "Access to debugging tools, testing environments, and community resources.",
                  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                }
              ].map((item, index) => (
                <div key={index} className="scroll-fade-in opacity-0 transition-all duration-700">
                  <div className="bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700 hover:border-customGreen transition-all">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
