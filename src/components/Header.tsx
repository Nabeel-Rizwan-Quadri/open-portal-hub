import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import Backgound from "../images/backgound.png";
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center w-200">
          <Link to="/" className="flex flex-row justify-center items-center align-middle">
            <div className="h-full">
              <img src={Backgound} width={34} alt="Background" />
            </div>
            <div className="mx-2 lg:ms-4 h-10 h-full">
              <img src={Logo} width={120} alt="Logo" />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center align-middle">
          <nav className="flex lg:space-x-8 space-x-2">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline">
              Home
            </Link>
            <Link to="/solutions" className="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline">
              Solutions
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline">
              Pricing
            </Link>
            <span className="text-gray-300 hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline" onClick={() => window.open('https://docs.openiap.io/', '_blank', 'noopener,noreferrer')}>
              Docs
            </span>
          </nav>
          <div className="ms-4 flex space-x-2 items-center align-middle">
            <Icon icon="ri:github-fill" width={30} className="cursor-pointer" onClick={() => window.open('https://github.com/open-rpa/', '_blank', 'noopener,noreferrer')} />
            <Button variant="secondary" className="hover-lift" onClick={() => navigate("/contact")}>
              Get In Touch
            </Button>
            <Button variant="default" className="hover-lift" onClick={() => window.open('https://app.openiap.io/', '_blank', 'noopener,noreferrer')}>
              Login
            </Button>
          </div>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background border-b border-gray-800 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/solutions" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
              Solutions
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <span className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => window.open('https://docs.openiap.io/', '_blank', 'noopener,noreferrer')}>
              Docs
            </span>
            <Icon icon="ri:github-fill" width={30} />
            <Button variant="secondary" className="w-full" onClick={() => window.open('https://calendly.com/simon-openiap/30min', '_blank', 'noopener,noreferrer')}>
              Get In Touch
            </Button>
            <Button variant="default" className="w-full" onClick={() => window.open('https://app.openiap.io/', '_blank', 'noopener,noreferrer')}>
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;