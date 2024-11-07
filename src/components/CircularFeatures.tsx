import { ArrowUp, ArrowUpRight, ArrowRight, ArrowDownRight, ArrowDown, ArrowDownLeft, ArrowLeft, ArrowUpLeft } from "lucide-react";

const features = [
  { icon: <ArrowUp className="h-6 w-6 text-customGreen" />, text: "Task Automation" },
  { icon: <ArrowUpRight className="h-6 w-6 text-customGreen" />, text: "Process Mining" },
  { icon: <ArrowRight className="h-6 w-6 text-customGreen" />, text: "Workflow Design" },
  { icon: <ArrowDownRight className="h-6 w-6 text-customGreen" />, text: "Data Integration" },
  { icon: <ArrowDown className="h-6 w-6 text-customGreen" />, text: "Smart Analytics" },
  { icon: <ArrowDownLeft className="h-6 w-6 text-customGreen" />, text: "Custom Rules" },
  { icon: <ArrowLeft className="h-6 w-6 text-customGreen" />, text: "AI Processing" },
  { icon: <ArrowUpLeft className="h-6 w-6 text-customGreen" />, text: "Real-time Monitoring" },
];

const CircularFeatures = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto h-[600px] my-20">
      {/* Center image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gray-800 rounded-full flex items-center justify-center border-2 border-customGreen">
        <span className="text-xl font-bold text-center">OpenRPA Core</span>
      </div>
      
      {/* Features positioned in a circle */}
      {features.map((feature, index) => {
        const angle = (index * 360) / features.length;
        const radius = 200; // Distance from center
        const radian = (angle * Math.PI) / 180;
        const left = `calc(50% + ${Math.cos(radian) * radius}px)`;
        const top = `calc(50% + ${Math.sin(radian) * radius}px)`;

        return (
          <div
            key={index}
            className="absolute w-32 -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-300 hover:scale-110"
            style={{ left, top }}
          >
            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-customGreen">
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