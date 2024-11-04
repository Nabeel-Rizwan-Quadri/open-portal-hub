// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
import logo from "../images/logo.png"

const CallToAction = () => {
  return (
    <section className="py-10 px-4 border-t border-gradient-bg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center align-middle">
          <div>
            <img src={logo} width={120} />
          </div>
          <div className="flex flex-col md:flex-row space-x-10">
            <span>
              Home
            </span>
            <span>
              Solutions
            </span>
            <span>
              Pricings
            </span>
            <span>
              Partners
            </span>
            <span>
              Terms & Conditions
            </span>
            <span>
              Privacy Policy
            </span>
          </div>
        </div>
        <p className="mt-4 text-gray-500 text-sm">OpenIAP is automation made simple - and open source</p>
      </div>
    </section>
  );
};

export default CallToAction;