import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Automating Today!
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of companies using OpenIAP to automate their workflows
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" className="hover-lift" onClick={() => window.open('https://docs.openiap.io/docs/Accessing-for-the-First-Time.html', '_blank', 'noopener,noreferrer')}>
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="default" size="lg" className="hover-lift" onClick={() => window.open('https://calendly.com/simon-openiap/30min', '_blank', 'noopener,noreferrer')}>
              Schedule a Meeitng
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;