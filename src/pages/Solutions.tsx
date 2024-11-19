import { useEffect } from "react";
import { ArrowRight, Box, Workflow, Code, Zap, GitMerge, Lock, LockKeyhole, ShipWheel, Users, Database, LineChart, ChartColumn, TrendingUp, MonitorCog, Play, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Opencore from "../images/opencore.png"
import Apidocs from "../images/solutions/apidocs.png"
import Devportal from "../images/solutions/devportal.png"
import CircularFeatures from "@/components/CircularFeatures";
import { Icon } from '@iconify/react';
let iconClass = 'flex flex-col items-center justify-center space-y-2 cursor-pointer animate-fade-in';

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

    const elements = document.querySelectorAll(".scroll-fade-in, .scroll-zoom-in, .scroll-rotate-in, .scroll-bounce");
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
              Elevate your business workflows with our powerful automation suite, crafted for seamless scalability, top-tier security, and easy integration with your current systems.
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
            <div className="scroll-fade-in space-y-6">
              <h2 className="text-3xl font-bold mb-6">
                OpenCore: Dynamic Process Orchestration
              </h2>
              <p className="text-gray-400 text-justify">
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
                <div className={iconClass} onClick={() => window.open('https://github.com/open-rpa/openflow/', '_blank', 'noopener,noreferrer')}>
                  <Icon icon="ri:github-fill" width={30} height={30} />
                  <p>GitHub</p>
                </div>
                <div className={iconClass} onClick={() => window.open('https://docs.openiap.io/docs/flow/', '_blank', 'noopener,noreferrer')}>
                  <Icon icon="icomoon-free:books" width={30} height={30} />
                  <p>Docs</p>
                </div>
              </div>
            </div>
            <div className="scroll-fade-in">
              <div className="p-6 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50">
                <Workflow className="w-full h-48 text-customGreen mb-4" />
                <h3 className="text-xl font-semibold mb-4">Versatile Automation Toolkit</h3>
                <p className="text-gray-400 text-justify">
                  Leverage the Power of Code for Advanced Automation, or Drag-and-Drop Functions for Simpler Workflows; Empowering Both Developers and Non-Technical Users to Work Together Seamlessly.
                </p>
                <Button className="mt-6 w-full" size="lg" onClick={() => window.open('https://docs.openiap.io/docs/flow/', '_blank', 'noopener,noreferrer')}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Three: OpenRPA with Circular Features */}
      <CircularFeatures />

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
              <p className="text-gray-400 text-justify">
                We partner with institutions in the most highly regulated sectors. Stringent annual security audits are mandatory and OpenCore consistently delivers exceptional results. With advanced, built-in security features such as end-to-end encryption, access control lists, and rigorous adherence to industry-leading security standards, OpenCore provides a level of data protection that instills confidence and meets the highest professional standards.
              </p>
              <ul className="space-y-4">
                {[
                  "End-to-end encryption",
                  "Access control lists",
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



      {/* Section Seven: Process Automation */}
      <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 scroll-fade-in">
              <h2 className="text-3xl font-bold">Scale Your Automation Effortlessly</h2>
              <p className="text-gray-400 text-justify">
                Boost efficiency with OpenIAP’s scalable platform. Easily create modular code and workflows for reusable deployment to different use cases. Foster collaboration between low-code users and developers with our SDKs, supporting seven major programming languages. With Kubernetes for deployment and Grafana for data visualization, scaling your automation has never been easier.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <ChartColumn />, text: "Grafana" },
                  { icon: <ShipWheel />, text: "kubernetes" },
                  { icon: <Code />, text: "Multi-Language Support" },
                  { icon: <GitMerge />, text: "Git" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700 hover:border-customGreen transition-all">
                    {feature.icon}
                    <span className="text-sm md:text-base">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="scroll-fade-in">
              <div className="p-6 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50">
                {/* <TrendingUp className="w-full h-48 text-customGreen mb-4" /> */}
                <Icon icon="tdesign:upscale" className="w-full h-48 text-customGreen mb-4" />
                <h3 className="text-xl font-semibold mb-4">Integrate with the Software you Love</h3>
                <p className="text-gray-400 text-justify">
                  Using code or NodeRed you can connect to your favourite solutions and systems with over 4000 APIs.
                </p>
                <Button className="mt-6 w-full" size="lg" onClick={() => window.open('https://docs.openiap.io/docs/flow/', '_blank', 'noopener,noreferrer')}>
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Section Eight: Developer Tools */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-14">Developer Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Developer Portal",
                  description: "Access powerful debugging tools, dedicated testing environments, and a supportive community to help streamline development.",
                  image: Devportal,
                  redirectTo: "https://app.openiap.io/ui/"
                },
                {
                  title: "API Documentation",
                  description: "Comprehensive API documentation with interactive examples and SDKs for seven major programming languages.",
                  image: Apidocs,
                  redirectTo: "https://docs.openiap.io/docs/sdk/"
                },
              ].map((item, index) => (
                <div
                  onClick={() => window.open(item.redirectTo, '_blank', 'noopener,noreferrer')}
                  key={index} className="hover:scale-105 cursor-pointer scroll-fade-in opacity-0 transition-all duration-700 bg-gray-900 rounded-lg border-gray-700">
                  <div className="overflow-hidden border  hover:border-customGreen  transition-all rounded-lg border-gray-700" >
                    <img src={item.image} alt={item.title} className="w-full opacity-50" />
                    <div className="p-6 w0full">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400 ">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Six: Analytics Dashboard */}
      <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="text-center scroll-bounce opacity-0 transition-all duration-700 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 max-w-4xl text-center">Orchestrate your Favourite RPA Solution through OpenCore or use our Open Source Solution</h2>
            <p className="text-gray-400 max-w-4xl mx-auto">
              Use whatever you know, whatever you love, or use OpenRPA!
            </p>
          </div>
        </div>
      </section>

      {/* Section Seven: Process Automation */}
      {/* <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-fade-in">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Automation Robot"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6 scroll-fade-in">
              <h2 className="text-3xl font-bold">Orchestrate RPA</h2>
              <p className="text-gray-400">
                Leverage OpenCore to orchestrate the OpenRPA tool, with OpenRPA available as an alternative solution. Connect with you favourite RPA solution with OpenRPA and seamlessly operate... . Works offline as well for maximum privacy.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section Three: OpenRPA */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-gray-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 scroll-fade-in space-y-6">
              <h2 className="text-3xl font-bold mb-6">
                OpenRPA: Robotic Process Automation
              </h2>
              <p className="text-gray-400 text-justify">
                Empower your team with our advanced, user-friendly RPA solution, designed for both speed and scalability. Build, deploy, and optimize automations faster than ever with our intuitive visual interface and an extensive library of pre-built components. Seamlessly integrate with OpenCore to enhance performance across all systems and scale operations effortlessly, bringing enterprise-grade capabilities to every automation.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <MonitorCog className="h-5 w-5 text-customGreen" />, text: "Intuitive Interface" },
                  { icon: <Play className="h-5 w-5 text-customGreen" />, text: "Smart Recording" },
                  { icon: <TrendingUp className="h-5 w-5 text-customGreen" />, text: "Easy to Scale" },
                  { icon: <Icon icon="ri:drag-drop-line" className="h-5 w-5 text-customGreen" />, text: "Drag and Drop" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 hover:border-customGreen transition-all">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-10 space-x-4">
                <div className={iconClass} onClick={() => window.open('https://github.com/open-rpa/openrpa/', '_blank', 'noopener,noreferrer')}>
                  <Icon icon="ri:github-fill" width={30} height={30} />
                  <p>GitHub</p>
                </div>
                <div className={iconClass} onClick={() => window.open('https://docs.openiap.io/docs/openrpa/', '_blank', 'noopener,noreferrer')}>
                  <Icon icon="icomoon-free:books" width={30} height={30} />
                  <p>Docs</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 scroll-fade-in">
              <div className="p-6 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50">
                <Zap className="w-full h-48 text-customGreen mb-4" />
                <h3 className="text-xl font-semibold mb-4">Low-Code Automation Builder</h3>
                <p className="text-gray-400 text-justify">
                  Create powerful automation workflows without the need to write code. Perfect for users
                  who want to automate repetitive tasks quickly and efficiently.
                </p>
                <Button className="mt-6 w-full" size="lg" variant="outline" onClick={() => window.open('https://www.youtube.com/@AllanZimmermann/videos', '_blank', 'noopener,noreferrer')}>
                  Watch Tutorial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="mt-4 w-full" size="lg" variant="default" onClick={() => window.open('https://github.com/open-rpa/openrpa/releases/latest/download/OpenRPA.msi', '_blank', 'noopener,noreferrer')}>
                  Download OpenRPA
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>



    </div>
  );
};

export default Solutions;
