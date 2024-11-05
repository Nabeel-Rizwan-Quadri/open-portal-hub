import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Icon } from '@iconify/react';
import hero from '../images/hero.png'

let iconClass = 'flex flex-col items-center justify-center space-y-2 cursor-pointer animate-fade-in';

const Hero = () => {
  return (
    <div className="px-4 gradient-bg h-screen flex justify-center items-center" >
      <div className="container mx-auto text-center">
        <div
          className="absolute bottom-0 left-0 w-full h-2/6 bg-no-repeat opacity-50 hero-img"
          style={{
            backgroundImage: `url(${hero})`,
            width: "100%"
          }}
        ></div>
        <div className="">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">

            Open Source{" "}
            <span className="bg-clip-text text-customGreen">
              Automation
            </span>{" "}
            Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in">
            Orchestrate and Scale your Workflows in Seamless Collaboration Between Humans, Robots, Systems, and Devices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Button variant="outline" className="hover-lift border border-customGreen" size="lg" onClick={() => window.open('https://github.com/open-rpa/openrpa/releases/latest/download/OpenRPA.msi', '_blank', 'noopener,noreferrer')} >
              Download OpenRPA <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button className="hover-lift" size="lg" onClick={() => window.open('https://docs.openiap.io/docs/Accessing-for-the-First-Time.html', '_blank', 'noopener,noreferrer')} >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-10 space-x-4">
          <div className={iconClass} onClick={() => window.open('https://www.youtube.com/@AllanZimmermann/', '_blank', 'noopener,noreferrer')}>
            <Icon icon="mdi:youtube" width={30} height={30} />
            <p>Youtube</p>
          </div>
          <div className={iconClass} onClick={() => window.open('https://docs.openiap.io/', '_blank', 'noopener,noreferrer')}>
            <Icon icon="icomoon-free:books" width={30} height={30} />
            <p>Docs</p>
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

        {/* <div className="mt-10 text-3xl font-bold">
          Integrate Across
        </div>

        <div className="flex flex-row items-center justify-center mt-10 space-x-14">
          <div className={iconClass}>
            <Icon icon="game-icons:pc" width={100} height={60} />
            <p className="w-24">Robotic Process Automation</p>
          </div>
          <div className={iconClass}>
            <Icon icon="oi:person" width={100} height={60} />
            <p className="w-24">Human in the Loop (BPM)</p>
          </div>
          <div className={iconClass}>
            <Icon icon="solar:buildings-3-linear" width={100} height={60} />
            <p className="w-24">IT Systems (API)</p>
          </div>
          <div className={iconClass}>
            <Icon icon="fontisto:world-o" width={100} height={60} />
            <p className="w-24">Physical World (IIOT)</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;