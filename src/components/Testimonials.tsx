
import logo1 from "../images/testimonials/nagel.png"
import logo3 from "../images/testimonials/synerg.png"
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in">
          Customer Sucess Stories
        </h2>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto animate-fade-in">
          We work with leading comapanies in Logistics, IT Services, Financial Services, Healthcare, Energy and Infrastructure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border border-customGreen rounded-xl bg-slate-50 opacity-80  flex flex-col items-center">
            <div className="image-container">
              <img src={logo1} width={200} className="logo-img" />
            </div>
            <p className="text-black text-justify mt-6">“The most important characters of the OpenIAP suite is the functional capacity of the software, its solidity against volumes, its scalability in implementing very diverse functions, and its scalability in addressing any type of format and sources.“</p>
            <h3 className="text-test2LogoBlue text-xl place-self-start mt-6 font-bold"> - Global Head of Indirect Tax</h3>
          </div>

          <div className="p-6 border border-customGreen rounded-xl bg-slate-50 opacity-80 flex flex-col items-center ">
            <img src={logo3} width={190} />
            <p className="text-black text-justify mt-4">“The Team at OpenIAP is always available to assist us with innovative ways to solve some of the obstacles we have encountered and the Speed at which new features are added to the platform is astounding.”</p>
            <h3 className="text-test1LogoBlue text-xl place-self-start mt-6 font-bold"> - Head of ITS & HCM</h3>
          </div>
        </div>
        <Button size="lg" className="hover-lift my-10" onClick={() => navigate("/usecases")}>
          Explore Use Cases
        </Button>
        <p className="text-xl text-gray-400 text-center max-w-5xl mx-auto animate-fade-in">
          We serve our customers around the world including Denmark, Germany, Netherlands, Poland, Spain, Switzerland, United States, South Africa, Malaysia, Philippines, Taiwan, Brazil and more.
        </p>

      </div>
    </section>
  );
};

export default Testimonials;