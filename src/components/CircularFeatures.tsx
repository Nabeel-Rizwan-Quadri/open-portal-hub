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
    <div className="relative w-full max-w-3xl mx-auto h-[600px]">
      {/* Center image with pulse animation */}
      {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-40  flex items-center justify-center">
        <div className="text-xl font-bold text-center animate-fade-in">
          <img src={openiap} width={400} className="filter blur-sm"/>
        </div>
      </div> */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gray-800 rounded-full flex items-center justify-center border-2 border-customGreen animate-[pulse_3s_ease-in-out_infinite] hover:animate-none">
        <div className="text-xl font-bold text-center animate-fade-in">OpenCore</div>
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
            className="absolute w-32 -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-300 text-sm"
            style={{
              left,
              top,
              animation: `fadeRotateIn 0.6s ease-out ${delay}s backwards`,
            }}
          >
            {/* <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700  duration-300"> */}
            <div className="text-sm relative w-30 h-20 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
              <p className="text-sm absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0">
                FRONT OF CARD
              </p>
              <p className="text-sm absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
                BACK OF CARD
              </p>
            </div>
            {/* {feature.icon}
              <p className="mt-2 text-sm">{feature.text}</p> */}
          </div>
          // </div>
        );
      })}
    </div>
  );
};

export default CircularFeatures;