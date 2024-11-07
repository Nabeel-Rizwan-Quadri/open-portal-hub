import { useEffect, useRef } from "react";
import logo2 from "../images/comaptible/github.svg";
import logo3 from "../images/comaptible/g-cloud.svg";
import logo4 from "../images/comaptible/azure.svg";
import logo5 from "../images/comaptible/aws-white.svg";
import logo6 from "../images/comaptible/alibaba.png";
// import logo7 from "../images/comaptible/cloudflare1.png";
import logo8 from "../images/comaptible/salesforce.png";
import logo9 from "../images/comaptible/sap.png";

// import logo10 from "../images/comaptible/runpod.png";
// import logo11 from "../images/comaptible/digitalocean.png";
// import logo12 from "../images/comaptible/cloudfactory.png";
import logo13 from "../images/comaptible/ibm.png";
import logo14 from "../images/comaptible/oracle.png";

const features = [
  <img src={logo6} alt="alibaba" title="alibaba" width={120} height={"100%"} />,
  <img src={logo4} alt="azure" title="azure" width={120} height={"100%"} />,
  <img src={logo3} alt="google cloud" title="google cloud" width={140} height={"100%"} />,
  <img src={logo5} alt="aws" title="aws" width={80} height={"100%"} />,
  <img src={logo14} alt="oracle" title="oracle" width={150} height={"100%"} />,
  // <img src={logo2} alt="github" title="github" width={120} height={"100%"} />,
  <img src={logo8} alt="sales force" title="sales force" width={160} height={"100%"} />,
  <img src={logo13} alt="Ibm" title="Ibm" width={120} height={"100%"} />,
  // <img src={logo7} alt="couldflare" title="couldflare" width={140} height={"100%"} />,
  <img src={logo9} alt="sap" title="sap" width={100} height={"100%"} />,

  // <img src={logo10} alt="runpod" title="runpod" width={150} height={"100%"} />,
  // <img src={logo11} alt="digital ocean" title="digital ocean" width={150} height={"100%"} />,
  // <img src={logo12} alt="cloud factory" title="cloud factory" width={150} height={"100%"} />,
]
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
          Run it in your Favourite Cloud Solution!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 lg:grid-cols-4 justify-items-center place-items-center" ref={featuresRef}>
          {features.map((feature, index) => (
            <div
              key={index}
              className=" hover-lift scroll-fade-in"
            >
              <div className="mb-4">
                {feature}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xl mt-20">or run it On-Premise.</p>
      </div>

    </section>
  );
};

export default Compatible;