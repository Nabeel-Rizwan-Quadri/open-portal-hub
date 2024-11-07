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
      {/* Center image with pulse animation */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gray-800 rounded-full flex items-center justify-center border-2 border-customGreen animate-[pulse_3s_ease-in-out_infinite] hover:animate-none">
        <div className="text-xl font-bold text-center animate-fade-in">OpenRPA Core</div>
      </div>
      
      {/* Features positioned in a circle with staggered fade-in and rotation */}
      {features.map((feature, index) => {
        const angle = (index * 360) / features.length;
        const radius = 200;
        const radian = (angle * Math.PI) / 180;
        const left = `calc(50% + ${Math.cos(radian) * radius}px)`;
        const top = `calc(50% + ${Math.sin(radian) * radius}px)`;
        const delay = index * 0.15; // Stagger the animations

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
            <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-customGreen hover:rotate-0 transition-all duration-300">
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