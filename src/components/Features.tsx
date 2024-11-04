import { Cloud, Lock, Settings, Share } from "lucide-react";

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
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Enterprise-Grade Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card hover-lift"
            >
              <div className="mb-4">{feature.icon}</div>
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