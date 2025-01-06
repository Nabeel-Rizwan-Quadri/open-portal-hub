import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const Partners = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
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
        <>
            <div className="px-4 gradient-bg h-screen flex flex-col items-center justify-center ">
                <div className="container mx-auto text-start flex flex-col items-center scroll-fade-in">
                    <div className="text-customGreen mb-4 text-3xl text-center">
                        Partners
                    </div>
                    <div className="text-gray-400 mb-10 max-w-3xl text-center">
                        Our partners offer support in English, Danish, German, Dutch, Afrikaans, Mandarin, Cantonese and Portuguese, ensuring assistance is available in your preferred language.
                    </div>
                    <div className="flex justify-center">
                        <Button className="hover-lift" size="lg" onClick={() => window.open('https://calendar.app.google/aoU5qv1gX6ocHnAH8', '_blank', 'noopener,noreferrer')} >
                            Become a Partner 
                        </Button>
                    </div>
                    {/* <ul className="list-disc list-inside text-gray-400">
                        <li className="mb-2">

                        </li>
                        <li className="mb-2">

                        </li>
                    </ul> */}

                    {/* <ul className="list-disc list-inside text-gray-400">
                        <li className="mb-2">
                            <span className="text-customGreen cursor-pointer hover:text-white" onClick={() => window.open('https://calendly.com/rjvanschoonhoven', '_blank', 'noopener,noreferrer')}>
                                Rutger van Schoonhoven{" "}
                            </span>
                            Dutch/English
                        </li>
                        <li className="mb-2">
                            <a href="mailto:zhuosong@gmail.com" className="text-customGreen cursor-pointer hover:text-white">
                                Zhuo Song{" "}
                            </a>
                            Chinese/English
                        </li>
                        <li className="mb-2">
                            <span className="text-customGreen cursor-pointer hover:text-white" onClick={() => window.open('https://alphatrods.dk/', '_blank', 'noopener,noreferrer')}>
                                Alphatrods{" "}
                            </span>
                            Danish/English
                        </li>
                        <li className="mb-2">
                            <span className="text-customGreen cursor-pointer hover:text-white" onClick={() => window.open('https://synergerp.com/', '_blank', 'noopener,noreferrer')}>
                                SynergERP{" "}
                            </span>
                            Afrikaans/English
                        </li>

                        <li className="mb-2">
                            <span className="text-customGreen cursor-pointer hover:text-white" onClick={() => window.open('https://www.xnovis.com/', '_blank', 'noopener,noreferrer')}>
                                xnovis {" "}
                            </span>
                            German/English
                        </li>
                        <li className="mb-2">
                            <span className="text-customGreen cursor-pointer hover:text-white" onClick={() => window.open('https://automation.bpatechnologies.com/', '_blank', 'noopener,noreferrer')}>
                                BPA Technologies{" "}
                            </span>
                            Portuguese/English
                        </li>
                    </ul> */}
                </div>
            </div>
        </>
    );
};

export default Partners;
