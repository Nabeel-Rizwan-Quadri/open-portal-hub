import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4 gradient-bg">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Open Source{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Automation
          </span>{" "}
          Platform
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in">
          Build, deploy, and scale your automation workflows with our enterprise-grade platform
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <Button className="hover-lift" size="lg">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="secondary" className="hover-lift" size="lg">
            View Documentation
          </Button>
        </div>
        
        <div className="mt-16 p-4 rounded-lg border border-gray-800 bg-gray-900/50 max-w-4xl mx-auto overflow-hidden">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;