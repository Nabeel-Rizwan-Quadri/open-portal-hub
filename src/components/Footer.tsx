import { useState, useEffect } from "react";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";

const CallToAction = () => {

  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 769);
  const [isScreenMedium, setIsScreenMedium] = useState(window.innerWidth < 1160);

  useEffect(() => {
    // Define a handler to check the window width
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 769);
      setIsScreenMedium(window.innerWidth < 1160);
    };
    console.log(window.innerWidth)
    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Call the handler initially in case the screen is already small
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-4 px-4 border-t border-gradient-bg">
      <div className="container mx-auto">
        <div className="md:flex md:justify-between md:items-center md:align-middle">
          <div className="flex justify-center">
            <img src={logo} width={120} />
          </div>
          <div className={isScreenSmall ? "grid grid-cols-2 mt-4 space-y-2 text-center items-center" : (isScreenMedium ? "grid md:grid-cols-4 lg:grid-cols-8 md:space-y-2 text-center items-center" : "flex flex-row lg:space-x-10 md:space-x-2")}>
            <Link to="/" className="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline">
              Home
            </Link>
            <Link to="/solutions" className="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline">
              Solutions
            </Link>
            <Link to="/usecases" className="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline">
              Use Cases
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline">
              Pricing
            </Link>
            <Link to="/partners" className="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline">
              Partners
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline">
              Contact
            </Link>
            <Link to="/telemetry" className="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline">
              Telemetry
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
        <p className="text-center md:text-start mt-6 md:mt-4 text-gray-500 text-sm">OpenIAP is automation made simple - and open source</p>
      </div>
    </section >
  );
};

export default CallToAction;