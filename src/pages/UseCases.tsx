import { useEffect } from "react";

import logo1 from "../images/testimonials/nagel.png"
import logo2 from "../images/testimonials/b2bpresales.png"
import logo3 from "../images/testimonials/alphatods.jpeg"

const UseCases = () => {

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

    const elements = document.querySelectorAll(".scroll-fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 gradient-bg">
      <div className="container mx-auto">
        <div className="scroll-fade-in">
          <h2 className="text-4xl font-bold text-center mt-10 mb-6">Case Studies</h2>
          <p className="text-gray-400 text-center mb-12">
            Explore some of the ways our customers leverage our platform.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-4 scroll-fade-in order-1 md:order-1">
            <h2 className="text-3xl font-bold text-customGreen mb-4">Transforming Tax Compliance</h2>

            <p className="text-gray-400 text-justify">
              <span className="font-bold text-white">The Challenge: {" "}</span>
              Kuehne + Nagel faced the complex task of complying with tax authority demands regarding invoices while ensuring the accuracy of official data to prevent VAT and tax losses.
            </p>
            {/* <h2 className="text-xl font-bold ">The Solution:</h2> */}
            <p className="text-gray-400 text-justify">
              <span className="font-bold text-white">The Solution: {" "}</span>
              By utilizing the OpenIAP platform, Kuehne + Nagel’s business and development teams collaborated to create a scalable template for rapid deployment. This innovative solution enabled them to efficiently manage tax compliance across six countries and counting. The flexibility of OpenIAP’s low-code and real-code environment facilitated seamless integration with existing systems, empowering teams to adapt quickly to regulatory changes.
            </p>
            {/* <h2 className="text-xl font-bold ">The Impact:</h2> */}
            <p className="text-gray-400 text-justify">
              <span className="font-bold text-white">The Impact: {" "}</span>
              With OpenIAP, Kuehne + Nagel saves a significant amount of time and resources each month, by implementing a robust system for data verification that is secure and scalable. The streamlined process significantly boosted productivity and operational efficiency.
            </p>
            {/* <div className="grid grid-cols-2 gap-4">
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
            </div> */}
          </div>
          <div className="scroll-fade-in order-2 md:order-2">
            <div className="p-6 md:py-32 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50 hover:scale-110  duration-300" >
              {/* <TrendingUp className="w-full h-48 text-customGreen mb-4" /> */}
              {/* <Icon icon="tdesign:upscale" className="w-full h-48 text-customGreen mb-4" /> */}
              <img src={logo1} className="w-full h-full text-customGreen" />
              {/* <h3 className="text-xl font-semibold mb-4">Transforming Tax Compliance with OpenCore</h3>
              <p className="text-gray-400">
              This case study highlights how Kuehne + Nagel leveraged the OpenIAP suite to revolutionize their tax compliance processes across multiple countries.
              </p> */}
              {/* <Button className="mt-6 w-full" size="lg" onClick={() => window.open('https://docs.openiap.io/docs/flow/', '_blank', 'noopener,noreferrer')}>
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-4 scroll-fade-in order-1 md:order-2">
            <h2 className="text-3xl font-bold text-customGreen mb-4">Accelerating AI Integration</h2>

            <p className="text-gray-400 text-justify">
              <span className="font-bold text-white">The Challenge: {" "}</span>
              B2BPreSales required a solution to connect disparate data sources to leverage AI and large language models (LLMs). They needed a flexible platform that could easily integrate with multiple CRM providers, despite having no existing infrastructure in place.
            </p>
            {/* <h2 className="text-xl font-bold ">The Solution:</h2> */}
            <p className="text-gray-400 text-justify">
              <span className="font-bold text-white">The Solution: {" "}</span>
              Leveraging OpenIAP’s OpenFlow and Node-RED, B2BPreSales developed a proof of concept (POC) with a custom web front end. This approach enabled rapid development and integration without the need for a pre-existing infrastructure. OpenCore’s robust capabilities allowed the team to quickly connect data sources and implement AI-driven solutions.
            </p>
            {/* <h2 className="text-xl font-bold ">The Impact:</h2> */}
            <p className="text-gray-400 text-justify">
              <span className="font-bold text-white">The Impact: {" "}</span>
              With the help of OpenIAP, B2BPreSales successfully scaled their CRM integrations from one to three in record time, simplifying the process significantly. This efficiency allowed them to hire Data Scientists without the delay of building infrastructure from scratch, accelerating their AI initiatives and enhancing their data-driven decision-making capabilities.
            </p>
            {/* <div className="grid grid-cols-2 gap-4">
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
            </div> */}
          </div>
          <div className="scroll-fade-in order-2 md:order-1">
            <div className="p-6 md:py-32 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50 hover:scale-110  duration-300" >
              {/* <TrendingUp className="w-full h-48 text-customGreen mb-4" /> */}
              {/* <Icon icon="tdesign:upscale" className="w-full h-48 text-customGreen mb-4" /> */}
              <img src={logo2} alt="b2bpresales logo" className="w-full h-full text-customGreen" />
              {/* <h3 className="text-xl font-semibold mb-4">Transforming Tax Compliance with OpenCore</h3>
              <p className="text-gray-400">
              This case study highlights how Kuehne + Nagel leveraged the OpenIAP suite to revolutionize their tax compliance processes across multiple countries.
              </p> */}
              {/* <Button className="mt-6 w-full" size="lg" onClick={() => window.open('https://docs.openiap.io/docs/flow/', '_blank', 'noopener,noreferrer')}>
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-4 scroll-fade-in order-1 md:order-1">
            <h2 className="text-3xl font-bold text-customGreen mb-4">Generative AI Government Projects</h2>

            <p className="text-gray-400 text-justify">
              <span className="font-bold text-white">The Challenge: {" "}</span>
              Alphatrods faced the complex task of incorporating Generative AI into a government project, all while adhering to stringent GDPR regulations. The project requires a comprehensive automation solution that included humans in the loop to maintain oversight and control.
            </p>
            {/* <h2 className="text-xl font-bold ">The Solution:</h2> */}
            <p className="text-gray-400 text-justify">
              <span className="font-bold text-white">The Solution: {" "}</span>
              Utilizing OpenCore, Alphatrods achieved a unified, single-pane view of the entire automation process. This solution seamlessly integrated multiple RPA products while keeping humans in the loop. OpenCore’s capabilities ensured that all components worked together harmoniously, maintaining compliance and efficiency.
            </p>
            {/* <h2 className="text-xl font-bold ">The Impact:</h2> */}
            <p className="text-gray-400 text-justify">
              <span className="font-bold text-white">The Impact: {" "}</span>
              With OpenIAP, Alphatrods transforms previously fragmented and slow processes in Danish municipalities into streamlined and controlled operations. The integration of AI and human oversight into a single view simplified management and enhanced the project’s efficiency, demonstrating the power of OpenIAP’s comprehensive automation platform.
            </p>
            {/* <div className="grid grid-cols-2 gap-4">
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
            </div> */}
          </div>
          <div className="scroll-fade-in order-2 md:order-2">
            <div className="p-6 md:py-32 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50 hover:scale-110  duration-300">
              {/* <TrendingUp className="w-full h-48 text-customGreen mb-4" /> */}
              {/* <Icon icon="tdesign:upscale" className="w-full h-48 text-customGreen mb-4" /> */}
              <img src={logo3} alt="b2bpresales logo" className="w-full h-full text-customGreen" />
              {/* <h3 className="text-xl font-semibold mb-4">Transforming Tax Compliance with OpenCore</h3>
              <p className="text-gray-400">
              This case study highlights how Kuehne + Nagel leveraged the OpenIAP suite to revolutionize their tax compliance processes across multiple countries.
              </p> */}
              {/* <Button className="mt-6 w-full" size="lg" onClick={() => window.open('https://docs.openiap.io/docs/flow/', '_blank', 'noopener,noreferrer')}>
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            </div>
          </div>
        </div>

        <p className="text-xl text-center scroll-fade-in">
          Share Your Path to Success with Us!
        </p>

      </div>
    </section>
  );
};

export default UseCases;