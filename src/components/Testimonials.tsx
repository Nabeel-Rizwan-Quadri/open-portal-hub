import { Github, MessageSquare, Users, Youtube } from "lucide-react";
import { Card } from "./ui/card";
import logo1 from "../images/testimonials/nagel.png"
import logo2 from "../images/testimonials/nagel1.png"
import logo3 from "../images/testimonials/synerg.png"

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center animate-fade-in">
          Customer Sucess Stories
        </h2>
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
          {/* <Card className="p-6 scroll-fade-in hover:border-customGreen transition-all duration-300">
            <a target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center space-y-4">
              <img src={logo1} width={200}/>
              <h3 className="text-xl font-semibold">Users</h3>
              <h3 className="text-2xl">+500K Downloads</h3>
              <p className="text-gray-400 text-center">More than 750 signups per month</p>
              <p className="text-gray-400 text-center"></p>
            </a>
          </Card>
          <Card className="p-6 scroll-fade-in hover:border-customGreen transition-all duration-300">
            <a className="flex flex-col items-center space-y-4">
              <MessageSquare className="w-12 h-12 transition-colors duration-300 hover:scale-110" />
              <h3 className="text-xl font-semibold">Forum</h3>
              <h3 className="text-2xl">+5k Posts</h3>
              <p className="text-gray-400 text-center">On hundreds of different topics</p>
            </a>
          </Card>
          <Card className="p-6 scroll-fade-in hover:border-customGreen transition-all duration-300">
            <a target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center space-y-4">
              <Github className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-semibold">GitHub</h3>
              <h3 className="text-2xl">+3k Stars</h3>
              <p className="text-gray-400 text-center">Explore our OSS code and contribute</p>
            </a>
          </Card>
          <Card className="p-6 scroll-fade-in hover:border-customGreen transition-all duration-300">
            <a target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center space-y-4">
              <Youtube className="w-12 h-12 transition-all duration-300 hover:scale-110" />
              <h3 className="text-xl font-semibold">Youtube</h3>
              <h3 className="text-2xl">+500 Videos</h3>
              <p className="text-gray-400 text-center">By us and other content creators</p>
              <p className="text-gray-400 text-center"></p>
            </a>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;