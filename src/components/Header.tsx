import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../images/logo.png"
import Backgound from "../images/backgound.png";
import { Icon } from '@iconify/react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-800">

      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        <div className="flex items-center w-200">
          <a href="/" className="flex flex-row justify-center items-center align-middle ">
            <div className="h-full">
              <img src={Backgound} width={34} />
            </div>
            <div className="ms-2 md:ms-4 h-10 h-full">
              <img src={Logo} width={120} />
            </div>
          </a>
        </div>

        <div className="hidden md:flex items-center align-middle ">
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Pricings
            </a>
            <span className="text-gray-300 hover:text-white transition-colors cursor-pointer"  onClick={() => window.open('https://docs.openiap.io/docs/Accessing-for-the-First-Time.html', '_blank', 'noopener,noreferrer')}>
              Docs
            </span>
          </nav>
          <div className="ms-4 flex space-x-2 items-center align-middle ">
            <Icon icon="ri:github-fill" width={30} className="cursor-pointer" onClick={() => window.open('https://github.com/open-rpa/', '_blank', 'noopener,noreferrer')} />
            <Button variant="secondary" className="hover-lift" onClick={() => window.open('https://docs.openiap.io/docs/Accessing-for-the-First-Time.html', '_blank', 'noopener,noreferrer')}>
              Get Started
            </Button>
            <Button variant="secondary" className="hover-lift" onClick={() => window.open('https://calendly.com/simon-openiap/30min', '_blank', 'noopener,noreferrer')}>
              Get In Touch
            </Button>
            <Button variant="default" className="hover-lift" onClick={() => window.open('https://app.openiap.io/ui/#/Login', '_blank', 'noopener,noreferrer')}>
              Login
            </Button>
          </div>
        </div>

        {/* <div className="hidden md:flex items-center space-x-2" > */}
        {/* <img src={Logo} width={150} /> */}
        {/* <Icon icon="ri:github-fill" width={30} />
          <Button variant="secondary" className="hover-lift">
            Get In Touch
          </Button>
          <Button variant="secondary" className="hover-lift">
            Get Started
          </Button> */}
        {/* </div> */}

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {
        isMenuOpen && (
          <div className="md:hidden absolute w-full bg-background border-b border-gray-800">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors w-full">
                Home
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                Solutions
              </a>
              <a href="#docs" className="text-gray-300 hover:text-white transition-colors">
                Pricings
              </a>
              <a href="#docs" className="text-gray-300 hover:text-white transition-colors">
                Contact us
              </a>
              <Icon icon="ri:github-fill" width={30} />
              <Button variant="secondary" className="w-full">
                Get In Touch
              </Button>
              <Button variant="secondary" className="w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )
      }
    </header >
  );
};

export default Header;