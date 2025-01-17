import { Cloud, Lock, Settings, Share, Building, Gauge } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <Cloud className="h-12 w-12 text-customGreen" />,
    title: "Cloud Native",
    description: "Run on your favorite platform with our cloud-native architecture"
  },
  {
    icon: <Building className="h-12 w-12 text-customGreen" />,
    title: "On-Premise",
    description: "Deploy on-premise and off the grid for maximum data privacy with our SDKs and NodeRED’s API library"
  },
  {
    icon: <Lock className="h-12 w-12 text-customGreen" />,
    title: "Enterprise Security",
    description: "Encryption and role based access control to run in highly secure environments"
  },
  {
    icon: <Settings className="h-12 w-12 text-customGreen" />,
    title: "Powerful Automation",
    description: "Orchestrate and scale your workflows using a single interface"
  },
  {
    icon: <Share className="h-12 w-12 text-customGreen" />,
    title: "Seamless Integration",
    description: "Connect with the systems you are used to with our API library"
  },
  {
    icon: <Gauge className="h-12 w-12 text-customGreen" />,
    title: "Performance Overview",
    description: "Maintain control over your automation using our monitoring and reporting tools"
  },

];

const Features = () => {
  const navigate = useNavigate();
  const featuresRef = useRef<HTMLDivElement>(null);

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
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 scroll-fade-in">
          Enterprise-Grade Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={featuresRef}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="hover-float-parent feature-card hover-lift scroll-fade-in flex flex-col items-center justify-center "
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4 hover-float">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-fade-in">
          <Button size="lg" className="hover-lift" onClick={() => navigate("/solutions")}>
            Learn More
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Features;