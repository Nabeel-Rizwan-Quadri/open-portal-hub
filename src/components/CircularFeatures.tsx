import { ArrowUp, ArrowUpRight, ArrowRight, ArrowDownRight, ArrowDown, ArrowDownLeft, ArrowLeft, ArrowUpLeft, FileStack, Code, ChartLine, Bot, LockKeyhole, Unplug, RefreshCcw, UsersRound } from "lucide-react";
import openiap from "../images/opencore.png";

const features = [
  { icon: <UsersRound className="h-6 w-6 text-customGreen" />, text: "Agents", subText: "Use Agents to run code in containers with easy redeployment " },
  { icon: <RefreshCcw className="h-6 w-6 text-customGreen" />, text: "Work Items", subText: "Use work items to perform back=to-back tasks" },
  { icon: <LockKeyhole className="h-6 w-6 text-customGreen" />, text: "Access Control", subText: "Grant selective access to data for individuals of your choice" },
  { icon: <Bot className="h-6 w-6 text-customGreen" />, text: "AI Chatbot", subText: "Use custom chatbot to link with your data" },
  { icon: <Unplug className="h-6 w-6 text-customGreen" />, text: "API Integration", subText: "API's available in all major programing languages" },
  { icon: <Code className="h-6 w-6 text-customGreen" />, text: "Low-Code Functions", subText: "Leverage our low-code functions to focus more on bussiness logic" },
  { icon: <FileStack className="h-6 w-6 text-customGreen" />, text: "Version Control", subText: "Keep track of the changes in your data" },
  { icon: <ChartLine className="h-6 w-6 text-customGreen" />, text: "Data Visualization", subText: "Use grafana to easily vissualize your data in different graphs" },
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
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gray-800 rounded-full flex items-center justify-center border-2 border-customGreen hover:animate-none opacity-50">
        <div className="text-xl font-bold text-center animate-fade-in text-customGreen">OpenCore</div>
      </div>

      {/* Features positioned in a circle with staggered fade-in and rotation */}
      {features.map((feature, index) => {
        const angle = (index * 360) / features.length;
        const radius = 250;
        const radian = (angle * Math.PI) / 180;
        const left = `calc(48% + ${Math.cos(radian) * radius}px)`;
        const top = `calc(50% + ${Math.sin(radian) * radius}px)`;
        const delay = index * 0.2; // Stagger the animations

        return (
          <div
            key={index}
            // className="absolute w-32 -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-300 text-sm"
            className="absolute w-32 -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-300 hover:scale-110"
            style={{
              left,
              top,
              animation: `fadeRotateIn 0.6s ease-out ${delay}s backwards`,
            }}
          >
            <div className="relative w-40 h-32 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card border border-gray-700">
              <div className="text-sm absolute inset-0 w-full h-full flex flex-col space-y-4 justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0 ">
                <p>
                  {feature.icon}
                </p>
                <p>
                  {feature.text}
                </p>
              </div>
              <div className="p-2 text-sm absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all z-10 card-back">
                {feature.subText || "BACK OF CARD"}

              </div>
            </div>
            {/* <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-customGreen hover:rotate-0 transition-all duration-300">
              {feature.icon}
              <p className="mt-2 text-sm">{feature.text}</p>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default CircularFeatures;