import { Check, DollarSign, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {

  const navigate = useNavigate();
  const [screen, setScreen] = useState(1);

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

    const elements = document.querySelectorAll(".scroll-fade-in, .scroll-zoom-in, .scroll-rotate-in, .scroll-bounce");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-24 md:min-h-screen px-4 gradient-bg">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in">
          Flexible Pricing Tailored To Your Needs
        </h2>
        <p className="text-xl text-gray-400 my-6 text-center max-w-2xl mx-auto animate-fade-in">
          Explore our different pricing plans
        </p>

        <div className="flex space-x-4 justify-center items-center mb-8 animate-fade-in">
          <div className={`p-2 rounded cursor-pointer hover:bg-customGreen hover:text-black ${screen === 1 && "bg-customGreen text-black"} `} onClick={() => setScreen(1)}>Licenses</div>
          <div className={`p-2 rounded cursor-pointer hover:bg-customGreen hover:text-black ${screen === 2 && "bg-customGreen text-black"} `} onClick={() => setScreen(2)}>Cloud</div>
          <div className={`p-2 rounded cursor-pointer  hover:bg-customGreen hover:text-black ${screen === 3 && "bg-customGreen text-black"} `} onClick={() => setScreen(3)}>Consulting</div>
        </div>

        <>
          {
            screen === 1 && <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mx-auto animate-fade-in">
              {/* Free Tier */}
              <Card className="md:col-span-3 lg:col-start-2 lg:col-span-2 hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
                <CardHeader className="mb-0">
                  <CardTitle>Open Source</CardTitle>
                  <CardDescription>Perfect for getting started</CardDescription>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1">
                      <div className="m-1">
                        <p className="flex items-center my-2">
                          Control and Scalability
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500 " />
                            Limited access to features
                          </li>
                        </ul>
                      </div>

                      <div className="m-1">
                        <p className="flex items-center my-2">
                          Support
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            Community support
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            Basic tutorials
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </CardHeader>
                <Button onClick={() => window.open('https://docs.openiap.io/', '_blank', 'noopener,noreferrer')} className="m-6 mt-0">Get Started</Button>
              </Card>

              {/* Enterprise Tier */}
              <Card className="md:col-span-3 lg:col-start-4 lg:col-span-2 hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
                <CardHeader >
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Custom solutions</CardDescription>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                      <div className="m-1">
                        <p className="flex items-center my-2">
                          Control
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500 " />
                            Access to OpenAI's APIs
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            Reporting
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            Performance Monitoring
                          </li>
                        </ul>
                      </div>

                      <div className="m-1">
                        <p className="flex items-center my-2">
                          Scalability
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500 " />
                            Custom AI Chatbot
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500 " />
                            Kubernetes
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500 " />
                            Git
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500 " />
                            Grafana
                          </li>
                        </ul>
                      </div>



                      <div className="m-1">
                        <p className="flex items-center my-2">
                          Support
                        </p>
                        <ul className="space-y-2 text-sm">

                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                            SLA
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500 " />
                            Priority Support
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500 " />
                            Prod Dev Roadmap
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500 " />
                            Access to Dev Team
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </CardHeader>
                <Button onClick={() => navigate("/contact/meet")} className="m-6 mt-0">Contact Sales</Button>
              </Card>
            </div>
          }

          {
            screen === 2 && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto animate-fade-in">
              {/* Free plan */}
              <Card className=" hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>Open Source</CardTitle>
                  <CardDescription>Perfect for getting started</CardDescription>
                </CardHeader>

                <div className="flex p-6 items-end">
                  <span className="text-3xl font-bold text-center">0 <span className="text-2xl">USD</span></span>
                  {/* <span className="text-md font-bold text-center justify-end text-gray-600">/Month</span> */}
                </div>

                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Runtime limited to 4 hours
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Limited disk space (25 MB)
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-red-500" />
                      Dedicated Server
                    </li>
                    {/* <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Limited access to features
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Community support
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Basic tutorials
                  </li> */}
                  </ul>
                  <Button onClick={() => window.open('https://docs.openiap.io/', '_blank', 'noopener,noreferrer')} className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>

              {/* Basic Tier */}
              <Card className=" hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>Cloud Basic</CardTitle>
                  <CardDescription>Perfect for Beginners and Small Projects</CardDescription>
                </CardHeader>
                <div className="flex px-6 items-end">
                  <span className="text-3xl font-bold text-center"><span className="text-2xl">DKK {" "}</span>277</span>
                  <span className="text-sm  font-bold text-center justify-end text-gray-400">/Month</span>
                </div>
                <div className="flex px-6 pb-6 items-end">
                  <span className="text-base font-bold text-center text-gray-400">Approx. 39 <span className="text-base text-gray-400">USD</span></span>
                </div>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Run your agents 24/7
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      256 MB RAM
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-red-500" />
                      Dedicated Server
                    </li>
                  </ul>
                  <Button onClick={() => window.open('https://app.openiap.io/ui/#/Customer', '_blank', 'noopener,noreferrer')} className="w-full mt-6">Subscribe Now</Button>
                </CardContent>
              </Card>

              {/* Premium Tier */}
              <Card className="scale-105 transition-all duration-300 hover:shadow-lg border-customGreen flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>Cloud Premium</CardTitle>
                  <CardDescription>For great value over performance</CardDescription>
                </CardHeader>
                <div className="flex px-6 items-end">
                  <span className="text-3xl font-bold text-center"><span className="text-2xl">DKK {" "}</span>915 </span>
                  <span className="text-sm font-bold text-center justify-end text-gray-400">/Month</span>
                </div>
                <div className="flex px-6 pb-6 items-end">
                  <span className="text-base font-bold text-center text-gray-400">Approx. 129 <span className="text-base text-gray-400">USD</span></span>
                </div>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Run your agents 24/7
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      1 GB RAM
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-red-500" />
                      Dedicated Server
                    </li>
                    {/* <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    All features of basic plan
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Extended usage
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Increased Connectivity
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Advanced resources
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Custom integrations
                  </li> */}
                  </ul>
                  <Button onClick={() => window.open('https://app.openiap.io/ui/#/Customer', '_blank', 'noopener,noreferrer')} className="w-full mt-6">Subscribe Now</Button>
                </CardContent>
              </Card>

              {/* Advanced Tier */}
              <Card className=" hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>Cloud Advanced</CardTitle>
                  <CardDescription>Ample resources for advanced projects</CardDescription>
                </CardHeader>
                <div className="flex px-6 items-end">
                  <span className="text-3xl font-bold text-center"><span className="text-2xl">DKK {" "}</span>1699</span>
                  <span className="text-sm font-bold text-center justify-end text-gray-400">/Month</span>
                </div>
                <div className="flex px-6 pb-6 items-end">
                  <span className="text-base font-bold text-center text-gray-400">Approx. 239<span className="text-base text-gray-400"> USD</span></span>
                </div>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Run your agents 24/7
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      2 GB RAM
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Dedicated Server
                    </li>
                  </ul>
                  <Button onClick={() => window.open('https://app.openiap.io/ui/#/Customer', '_blank', 'noopener,noreferrer')} className="w-full mt-6">Subscribe Now</Button>
                </CardContent>
              </Card>

            </div>
          }

          {
            screen === 3 && <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-4 mx-auto animate-fade-in">
              {/* Free Tier */}
              <Card className="md:col-start-2 md:col-span-3 lg:md:col-span-1 lg:col-start-2 hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>Hourly</CardTitle>
                  <CardDescription>Perfect for onboarding developers</CardDescription>
                </CardHeader>

                <div className="flex px-4 items-end">
                  <span className="text-3xl font-bold text-center"><span className="text-2xl">DKK {" "}</span>1530</span>
                  <span className="text-md font-bold text-center justify-end text-gray-400">/hour</span>
                </div>
                <div className="flex px-4 pb-4 items-end">
                  <span className="text-base font-bold text-center text-gray-400">Approx. 216 <span className="text-base text-gray-400">USD</span></span>
                </div>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Advanced support
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Troubleshooting
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Designing software architecture
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Assistance with custom infrastructure
                    </li>
                  </ul>
                  <Button onClick={() => window.open('https://calendar.app.google/9Kt9XWGRYPLTyhQF7', '_blank', 'noopener,noreferrer')} className="w-full mt-6">Book a meeting</Button>
                </CardContent>
              </Card>
            </div>
          }
        </>

        <div className="flex justify-center gap-4 py-6">
          <Button variant="secondary" className="hover-lift" size="lg" onClick={() => navigate(`details/${screen}`)}>
            Learn More
          </Button>
        </div>

      </div>
    </section >
  );
};

export default PricingSection;