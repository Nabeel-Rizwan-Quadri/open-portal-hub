import { Cloud, Lock, Settings, Share } from "lucide-react";
import { useEffect, useRef } from "react";
import logo1 from "../images/comaptible/docker-logo-blue.svg";
import logo2 from "../images/comaptible/github.svg";

import logo3 from "../images/comaptible/g-cloud.svg";
import logo4 from "../images/comaptible/azure.svg";
import logo5 from "../images/comaptible/aws-white.svg";

const features = [
  // {
  //   icon: logo1,
  // },
  {
    icon: logo2,
  },
  {
    icon: logo3,
  },
  {
    icon: logo4,
  }, {
    icon: logo5,
  },
];

const Compatible = () => {
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 scroll-fade-in ">
          Compatible with all your favorite cloud solutions!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center place-items-center" ref={featuresRef}>
          {features.map((feature, index) => (
            <div
              key={index}
              className=" hover-lift scroll-fade-in"
            >
              <div className="mb-4"><img src={feature.icon} width={index === 3 ? 100 : 120} height={"100%"} /></div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Compatible;