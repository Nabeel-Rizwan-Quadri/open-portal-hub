import { Cloud, Lock, Settings, Share } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: <Cloud className="h-8 w-8 text-blue-500" />,
    title: "Cloud Native",
    description: "Deploy anywhere with our cloud-native architecture and containerized workflows"
  },
  {
    icon: <Lock className="h-8 w-8 text-blue-500" />,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and role-based access control"
  },
  {
    icon: <Settings className="h-8 w-8 text-blue-500" />,
    title: "Powerful Automation",
    description: "Build complex automation workflows with our intuitive visual designer"
  },
  {
    icon: <Share className="h-8 w-8 text-blue-500" />,
    title: "Seamless Integration",
    description: "Connect with any system using our extensive library of pre-built connectors"
  }
];

const Features = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={featuresRef}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card hover-lift scroll-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 float-animation">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;