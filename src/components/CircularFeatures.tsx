import { ArrowUp, ArrowUpRight, ArrowRight, ArrowDownRight, ArrowDown, ArrowDownLeft, ArrowLeft, ArrowUpLeft, FileStack, Code, ChartLine, Bot, LockKeyhole, Unplug, RefreshCcw, UsersRound } from "lucide-react";
import openiap from "../images/opencore.png";
import { useEffect, useState } from "react";

const features = [
  { icon: <UsersRound className="h-6 w-6 text-customGreen" />, text: "Agents", subText: "Use Agents to run your code anywhere with easy redeployment" },
  { icon: <RefreshCcw className="h-6 w-6 text-customGreen" />, text: "Work Items", subText: "Use Work Items to perform back-to-back tasks" },
  { icon: <LockKeyhole className="h-6 w-6 text-customGreen" />, text: "Access Control", subText: "All Data and Agents are protected with granular Access Control lists of your choice" },
  { icon: <Bot className="h-6 w-6 text-customGreen" />, text: "AI Chatbot", subText: "'Talk' to your Agents and Data with ChatGPT or using local LLM's" },
  { icon: <Unplug className="h-6 w-6 text-customGreen" />, text: "API Integration", subText: "API's available in nodered and all major programing languages" },
  { icon: <Code className="h-6 w-6 text-customGreen" />, text: "Low-Code Functions", subText: "Leverage our Low-Code Functions to focus more on bussiness logic" },
  { icon: <FileStack className="h-6 w-6 text-customGreen" />, text: "Version Control", subText: "Keep track of the changes in your Data" },
  { icon: <ChartLine className="h-6 w-6 text-customGreen" />, text: "Data Visualization", subText: "Use Grafana to easily visualize your Data in customizable graphs" },
];

const CircularFeatures = () => {

  //   const [ismobile, setIsMobile] = useState(false);
  //   useEffect(() => {
  //     // Function to check if the viewport is mobile size
  //     const checkIfMobile = () => {
  //       // if (window.innerWidth <= 768) {

  //       // }
  //       setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
  //     };

  //     // Initial check
  //     checkIfMobile();

  //     // Add event listener on resize
  //     window.addEventListener('resize', checkIfMobile);

  //     // Cleanup event listener on component unmount
  //     return () => window.removeEventListener('resize', checkIfMobile);
  //   }, []);

  return (
    <section className="py-10 px-4 gradient-bg ">
      <div className="md:container mx-auto">
        <div className="relative w-full max-w-3xl mx-auto md:h-[600px]">

          <div className="md:hidden ">
            <div className="flex justify-center">
              <div className="w-32 h-32 my-6 bg-gray-800 rounded-full flex items-center justify-center border-2 border-customGreen opacity-50 ">
                <div className="text-base font-bold text-center animate-fade-in text-customGreen">OpenCore</div>
              </div>
            </div>

            <div className="grid grid-cols-2 justify-center">
              {features.map((feature, index) => {
                return (
                  <div
                    key={index}
                    className="text-center transition-all duration-300 m-2"
                  >
                    <div className="relative w-full h-32 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card border border-gray-700">
                      <div className="text-sm absolute inset-0 w-full h-full flex flex-col space-y-4 justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0 ">
                        <p>
                          {feature.icon}
                        </p>
                        <p>
                          {feature.text}
                        </p>
                      </div>
                      <div className="p-2 duration-100 delay-200 text-sm absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 text-gray-400 transition-all z-10 card-back">
                        {feature.subText}

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* large screen */}
          <div className="hidden md:block">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gray-800 rounded-full flex items-center justify-center border-2 border-customGreen hover:animate-none opacity-50">
              <div className="text-xl font-bold text-center animate-fade-in text-customGreen">OpenCore</div>
            </div>
            {features.map((feature, index) => {
              const angle = (index * 360) / features.length;
              const radius = 250;
              const radian = (angle * Math.PI) / 180;
              const left = `calc(48% + ${Math.cos(radian) * radius}px)`;
              const top = `calc(50% + ${Math.sin(radian) * radius}px)`;
              const delay = index * 0.1;

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
                  <div className="relative  w-40 h-32 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card border border-gray-700">
                    <div className="text-sm absolute inset-0 w-full h-full flex flex-col space-y-4 justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0 ">
                      <p>
                        {feature.icon}
                      </p>
                      <p>
                        {feature.text}
                      </p>
                    </div>
                    <div className="p-2 duration-100 delay-200 text-sm absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 text-gray-400 transition-all z-10 card-back">
                      {feature.subText}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularFeatures;