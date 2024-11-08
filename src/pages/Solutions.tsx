import { useEffect } from "react";
import { ArrowRight, Box, Workflow, Zap, Cloud, Lock, LockKeyhole, Settings, Users, Database, LineChart, LayoutGrid, Puzzle, Columns, Rows, Shapes } from "lucide-react";
import { Button } from "@/components/ui/button";
import Opencore from "../images/opencore.png"
import Apidocs from "../images/solutions/apidocs.png"
import Devportal from "../images/solutions/devportal.png"
import CircularFeatures from "@/components/CircularFeatures";
import { Icon } from '@iconify/react';
let iconClass = 'flex flex-col items-center justify-center space-y-2 cursor-pointer animate-fade-in';

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

    const elements = document.querySelectorAll(".scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-zoom-in, .scroll-rotate-in, .scroll-bounce");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16">
      {/* Section One: Overview */}
      <section className="py-20 px-4 gradient-bg relative overflow-hidden ">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your
              <span className="bg-clip-text text-customGreen">
                {" "}Single Point{" "}
              </span>
              of Automation
            </h1>
            <p className="text-xl text-gray-400  px-4 sm:px-0">
              Elevate your business workflow with our powerful automation suite, crafted for seamless scalability, top-tier security, and easy integration with your current systems.
            </p>
            <p className="text-xl text-gray-400 mb-8 px-4 sm:px-0">
              Unlock efficiency and drive growth effortlessly.
            </p>
            <Button className="hover-lift" size="lg" onClick={() => window.open('https://docs.openiap.io/docs/Accessing-for-the-First-Time.html', '_blank', 'noopener,noreferrer')} >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
      </section>

      {/* Section Two: OpenFlow */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-slide-left space-y-6">
              <h2 className="text-3xl font-bold mb-6">
                OpenCore: Advanced Process Orchestration
              </h2>
              <p className="text-gray-400">
                A versatile and secure orchestration platform designed to integrate seamlessly with your existing RPA, CRM, ERP, SCM, and other software you love. Run it in the cloud or on-premise with comprehensive coding support, allowing developers to work with their preferred languages and in familiar environments.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <Database className="h-5 w-5 text-customGreen" />, text: "Centralized Control" },
                  { icon: <Users className="h-5 w-5 text-customGreen" />, text: "Collaborative Environment" },
                  { icon: <LineChart className="h-5 w-5 text-customGreen" />, text: "Real-time Analytics" },
                  { icon: <Box className="h-5 w-5 text-customGreen" />, text: "Cross-Platform Integration" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 hover:border-customGreen transition-all">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-10 space-x-4">
                {/* <div className={iconClass} onClick={() => window.open('https://www.youtube.com/@AllanZimmermann/', '_blank', 'noopener,noreferrer')}>
                  <Icon icon="mdi:youtube" width={30} height={30} />
                  <p>Youtube</p>
                </div> */}
                <div className={iconClass} onClick={() => window.open('https://github.com/open-rpa/openflow/', '_blank', 'noopener,noreferrer')}>
                  <Icon icon="ri:github-fill" width={30} height={30} />
                  <p>Github</p>
                </div>
                <div className={iconClass} onClick={() => window.open('https://docs.openiap.io/docs/flow/', '_blank', 'noopener,noreferrer')}>
                  <Icon icon="icomoon-free:books" width={30} height={30} />
                  <p>Docs</p>
                </div>
                {/* <div className={iconClass} onClick={() => window.open('https://discourse.openiap.io/', '_blank', 'noopener,noreferrer')}>
                  <Icon icon="fa6-brands:forumbee" width={30} height={30} />
                  <p>Forum</p>
                </div> */}

              </div>
            </div>
            <div className="scroll-slide-right">
              <div className="p-6 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50">
                <Workflow className="w-full h-48 text-customGreen mb-4" />
                <h3 className="text-xl font-semibold mb-4">Versatile Automation Toolkit</h3>
                <p className="text-gray-400">
                  Leverage the Power of Code for Advanced Automation, or Drag-and-Drop Functions for Simpler Workflows; Empowering Both Developers and Non-Technical Users to Work Seamlessly Together.
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

      {/* Section Three: OpenRPA with Circular Features */}
      <section className="py-10 px-4 gradient-bg ">
        <div className="container mx-auto">
          <CircularFeatures />
        </div>
      </section>

      {/* Section Four: Integration Hub */}
      {/* <section className="py-20 px-4 bg-gradient-to-tr from-gray-900 via-background to-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto scroll-zoom-in opacity-0 scale-95 transition-all duration-700">
            <img src={Opencore} width={600} className="filter blur-sm place-self-center" />
          </div>
          <div class="relative">
            <img src={Opencore} alt="Background Image" class="w-full h-full object-cover filter blur-sm" />
            <div class="absolute inset-0 flex items-center justify-center">
              <Lock className="h-40 w-40 text-customGreen" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Section Five: Security Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 scroll-zoom-in opacity-0 scale-95 transition-all duration-70" >
              {/* <img
                src={Opencore}
                alt="Security Visualization"
                className="rounded-lg shadow-xl filter blur-sm"
              /> */}
              <div className="relative">
                <img src={Opencore} alt="Background Image" className="w-full h-full object-cover filter blur-sm" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <LockKeyhole className="h-32 w-32 text-white opacity-70" />

                  {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white-100" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12 1a5 5 0 0 1 5 5v4h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h1V6a5 5 0 0 1 5-5zm6 10H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-7-6a3 3 0 0 0-3 3v4h6V6a3 3 0 0 0-3-3z" />
              </svg> */}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Enterprise-Grade Security</h2>
              <p className="text-gray-400">
                We partner with institutions in the most highly regulated sectors, where stringent, annual security audits are mandatory—and OpenCore consistently delivers exceptional results. With advanced, built-in security features such as end-to-end encryption, role-based access control, and rigorous adherence to industry-leading security standards, OpenCore provides a level of data protection that instills confidence and meets the highest professional standards.
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
      <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12 scroll-bounce opacity-0 transition-all duration-700">
            <h2 className="text-3xl font-bold mb-4">Advanced Analytics</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
              <h2 className="text-3xl font-bold">Effortless Scale Your Automation</h2>
              <p className="text-gray-400">
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
      <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Developer Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Developer Portal",
                  description: "Access powerful debugging tools, dedicated testing environments, and a supportive community to help streamline development.",
                  image: Devportal
                },
                {
                  title: "API Documentation",
                  description: "Comprehensive API documentation with interactive examples and SDKs for major programming languages.",
                  image: Apidocs
                },
              ].map((item, index) => (
                <div key={index} className="scroll-fade-in opacity-0 transition-all duration-700 bg-gray-900 rounded-lg border-gray-700">
                  <div className="overflow-hidden border  hover:border-customGreen transition-all rounded-lg border-gray-700">
                    <img src={item.image} alt={item.title} className="w-full opacity-50" />
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

      {/* Section Three: OpenRPA */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-gray-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 scroll-slide-left">
              <div className="p-6 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50">
                <Zap className="w-full h-48 text-customGreen mb-4" />
                <h3 className="text-xl font-semibold mb-4">Low-Code Automation Builder</h3>
                <p className="text-gray-400">
                  Create powerful automation workflows without the need to write code. Perfect for business users
                  who want to automate repetitive tasks quickly and efficiently.
                </p>
                <Button className="mt-6 w-full" size="lg" variant="outline" onClick={() => window.open('https://www.youtube.com/@AllanZimmermann/', '_blank', 'noopener,noreferrer')}>
                  Watch Tutorial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 scroll-slide-right space-y-6">
              <h2 className="text-3xl font-bold mb-6">
                OpenRPA: Robotic Process Automation
              </h2>
              <p className="text-gray-400">
                Empower your team with our intelligent RPA solution that combines ease of use with
                enterprise-grade capabilities. Build and deploy automations faster than ever with our
                intuitive visual interface and extensive component library. Integrate with OpenCore to effortlessly scale your operations and enhance performance across all systems.
              </p>
              OR
              <p className="text-gray-400">
                Empower your team with our advanced, user-friendly RPA solution, designed for both speed and scalability. Build, deploy, and optimize automations faster than ever with our intuitive visual interface and an extensive library of pre-built components. Seamlessly integrate with OpenCore to enhance performance across all systems and scale operations effortlessly, bringing enterprise-grade capabilities to every automation.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <Box className="h-5 w-5 text-customGreen" />, text: "Intuitive Interface" },
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
              <div className="flex justify-center mt-10 space-x-4">
                {/* <div className={iconClass} onClick={() => window.open('https://www.youtube.com/@AllanZimmermann/', '_blank', 'noopener,noreferrer')}>
                  <Icon icon="mdi:youtube" width={30} height={30} />
                  <p>Youtube</p>
                </div> */}
                <div className={iconClass} onClick={() => window.open('https://github.com/open-rpa/openrpa/', '_blank', 'noopener,noreferrer')}>
                  <Icon icon="ri:github-fill" width={30} height={30} />
                  <p>Github</p>
                </div>
                <div className={iconClass} onClick={() => window.open('https://docs.openiap.io/docs/openrpa/', '_blank', 'noopener,noreferrer')}>
                  <Icon icon="icomoon-free:books" width={30} height={30} />
                  <p>Docs</p>
                </div>
                {/* <div className={iconClass} onClick={() => window.open('https://discourse.openiap.io/', '_blank', 'noopener,noreferrer')}>
                  <Icon icon="fa6-brands:forumbee" width={30} height={30} />
                  <p>Forum</p>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
