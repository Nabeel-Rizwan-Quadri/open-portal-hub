import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Icon } from '@iconify/react';
import background from "../images/background.svg";

// import Backgound from "../images/backgound.png";
let iconClass = 'flex flex-col items-center justify-center space-y-2 cursor-pointer animate-fade-in';

const Hero = () => {
  return (
    <div className="pt-16 md:pt-32 pb-20 px-4 gradient-bg h-screen" >
      {/* <div
        className="hidden md:block absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-left-bottom opacity-50"
        style={{
          backgroundImage: `url(${background})`,
          width: "100%"
        }}
      ></div> */}
      {/* <img src={background} width={100} /> */}
      <div className="container mx-auto text-center">

        <div className="mt-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Open Source{" "}
            <span className="bg-clip-text text-customGreen">
              Automation
            </span>{" "}
            Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in">
            Build, deploy, and scale your automation workflows with our enterprise-grade platform
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Button className="hover-lift" size="lg" onClick={() => window.open('https://docs.openiap.io/docs/Accessing-for-the-First-Time.html', '_blank', 'noopener,noreferrer')} >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {/* <Button variant="secondary" className="hover-lift" size="lg">
              View Documentation
            </Button> */}
          </div>
        </div>

        <div className="flex flex-row items-center justify-center mt-10 space-x-4">
          <div className={iconClass} onClick={() => window.open('https://www.youtube.com/@AllanZimmermann/', '_blank', 'noopener,noreferrer')}>
            <Icon icon="mdi:youtube" width={30} height={30} />
            <p>Youtube</p>
          </div>
          <div className={iconClass} onClick={() => window.open('https://docs.openiap.io/', '_blank', 'noopener,noreferrer')}>
            <Icon icon="icomoon-free:books" width={30} height={30} />
            <p>Documentation</p>
          </div>
          <div className={iconClass} onClick={() => window.open('https://discourse.openiap.io/', '_blank', 'noopener,noreferrer')}>
            <Icon icon="fa6-brands:forumbee" width={30} height={30} />
            <p>Forum</p>
          </div>
          <div className={iconClass} onClick={() => window.open('https://github.com/open-rpa/', '_blank', 'noopener,noreferrer')}>
            <Icon icon="ri:github-fill" width={30} height={30} />
            <p>Github</p>
          </div>
        </div>

        {/* <div className="flex items-center justify-center mt-28 p-4 overflow-hidden">
          <img src={Backgound} width={200} />
        </div> */}
        {/* <div className="mt-16 p-4 rounded-lg border border-gray-800 bg-gray-900/50 max-w-4xl mx-auto overflow-hidden">
          <pre className="text-sm md:text-base text-left overflow-x-auto">
            <code className="text-gray-300">
              {`// Example OpenIAP workflow
const workflow = new Workflow({
  name: "Process Orders",
  trigger: "new_order_event",
  actions: [
    validateOrder(),
    processPayment(),
    sendConfirmation(),
  ]
});

workflow.deploy();`}
            </code>
          </pre>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;