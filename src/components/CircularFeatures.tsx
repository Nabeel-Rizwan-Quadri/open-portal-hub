import { ArrowUp, ArrowUpRight, ArrowRight, ArrowDownRight, ArrowDown, ArrowDownLeft, ArrowLeft, ArrowUpLeft } from "lucide-react";
import openiap from "../images/opencore.png";

const features = [
  { icon: <ArrowUp className="h-6 w-6 text-customGreen" />, text: "Agents" },
  { icon: <ArrowUpRight className="h-6 w-6 text-customGreen" />, text: "Work Items" },
  { icon: <ArrowRight className="h-6 w-6 text-customGreen" />, text: "Access Control" },
  { icon: <ArrowDownRight className="h-6 w-6 text-customGreen" />, text: "AI Chatbot" },
  { icon: <ArrowDown className="h-6 w-6 text-customGreen" />, text: "Smart Analytics" },
  { icon: <ArrowDownLeft className="h-6 w-6 text-customGreen" />, text: "Data Management" },
  { icon: <ArrowLeft className="h-6 w-6 text-customGreen" />, text: "Version Control" },
  { icon: <ArrowUpLeft className="h-6 w-6 text-customGreen" />, text: "Data Visualization" },
];

const CircularFeatures = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto h-[600px] my-20">
      {/* Center image with pulse animation */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-40  flex items-center justify-center">
        <div className="text-xl font-bold text-center animate-fade-in">
          {/* OpenCore */}
          <img src={openiap} width={400} className="filter blur-sm"/>
        </div>
      </div>

      {/* Features positioned in a circle with staggered fade-in and rotation */}
      {features.map((feature, index) => {
        const angle = (index * 360) / features.length;
        const radius = 230;
        const radian = (angle * Math.PI) / 180;
        const left = `calc(50% + ${Math.cos(radian) * radius}px)`;
        const top = `calc(50% + ${Math.sin(radian) * radius}px)`;
        const delay = index * 0.2; // Stagger the animations

        return (
          <div
            key={index}
            className="absolute w-32 -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-300 hover:scale-110"
            style={{
              left,
              top,
              animation: `fadeRotateIn 0.6s ease-out ${delay}s backwards`,
            }}
          >
            <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-customGreen hover:rotate-0 transition-all duration-300">
              {feature.icon}
              <p className="mt-2 text-sm">{feature.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CircularFeatures;