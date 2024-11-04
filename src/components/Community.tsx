import { Github, MessageSquare, Users, Youtube } from "lucide-react";
import { Card } from "./ui/card";

const Community = () => {
  return (
    <section className="py-20 px-4 gradient-bg">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in">
          Join Our Community
        </h2>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto animate-fade-in">
          Be part of our vibrant community. Share knowledge, learn from others, and grow together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 scroll-fade-in hover:border-customGreen transition-all duration-300">
            <a target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center space-y-4">
              <Users className="w-12 h-12 transition-all duration-300 hover:scale-110" />
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
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Community;