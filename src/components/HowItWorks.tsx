import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const steps = [
  {
    number: "Step #1",
    title: "Automate Using Robots",
    description: "Start automating your UI with OpenRPA or begin orchestrating your existing software robots with OpenCore."
  },
  {
    number: "Step #2",
    title: "Automate Using APIs",
    description: "Expand or migrate your robots to automation using APIs with low-code solutions or deploy real code using one of our 7 SDKs."
  },
  {
    number: "Step #3",
    title: "Scale & Monitor",
    description: "Stay on top of every detail in your automation as you scale up using our reporting and monitoring tools."
  }
];

const HowItWorks = () => {
  useEffect(() => {
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
    <section id="how-it-works" className="py-20 px-4 gradient-bg">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 scroll-fade-in">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="hover-float-parent relative scroll-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="feature-card h-full">
                <span className="lg:text-5xl text-4xl font-bold text-customGreen opacity-50 mb-4 block hover-float">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rotate-45 border-t-2 border-r-2 border-gray-700"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-fade-in">
          <Button size="lg" className="hover-lift" onClick={() => window.open('https://app.openiap.io/', '_blank', 'noopener,noreferrer')}>
            Start Building Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;