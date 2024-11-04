import { Github, MessageSquare, Youtube } from "lucide-react";
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 scroll-fade-in hover:border-blue-500 transition-all duration-300">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="flex flex-col items-center space-y-4">
              <Github className="w-12 h-12 transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-semibold">GitHub</h3>
              <p className="text-gray-400 text-center">Explore our open-source code and contribute</p>
            </a>
          </Card>

          <Card className="p-6 scroll-fade-in hover:border-blue-500 transition-all duration-300">
            <a href="/forum" className="flex flex-col items-center space-y-4">
              <MessageSquare className="w-12 h-12 transition-colors duration-300 hover:text-blue-400" />
              <h3 className="text-xl font-semibold">Forum</h3>
              <p className="text-gray-400 text-center">Join discussions and get community support</p>
            </a>
          </Card>

          <Card className="p-6 scroll-fade-in hover:border-blue-500 transition-all duration-300">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
               className="flex flex-col items-center space-y-4">
              <Youtube className="w-12 h-12 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]" />
              <h3 className="text-xl font-semibold">YouTube</h3>
              <p className="text-gray-400 text-center">Watch tutorials and stay updated</p>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Community;