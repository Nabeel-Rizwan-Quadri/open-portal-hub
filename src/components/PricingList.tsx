import { Check, DollarSign, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {

  const navigate = useNavigate();
  const [screen, setScreen] = useState(1);

  return (
    <section className="pt-24 h-screen px-4 gradient-bg flex flex-col justify-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in">
          Flexible Pricing for Everyone
        </h2>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto animate-fade-in">
          {/* Choose the perfect plan that fits your needs */}

          Our pricing is designed to scale with your needs
        </p>

        <div className="flex space-x-4 justify-center items-center mb-8 ">
          <div className={`p-2 rounded cursor-pointer hover:bg-customGreen hover:text-black ${screen === 1 && "bg-customGreen text-black"} `} onClick={() => setScreen(1)}>Licences</div>
          <div className={`p-2 rounded cursor-pointer hover:bg-customGreen hover:text-black ${screen === 2 && "bg-customGreen text-black"} `} onClick={() => setScreen(2)}>Cloud</div>
          <div className={`p-2 rounded cursor-pointer  hover:bg-customGreen hover:text-black ${screen === 3 && "bg-customGreen text-black"} `} onClick={() => setScreen(3)}>Consulting</div>
        </div>

        {
          screen === 1 && <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto">
            {/* Free Tier */}
            <Card className="col-start-2 col-end-2 hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
              </CardHeader>

              <div className="flex p-6 items-end">
                <span className="text-3xl font-bold text-center">0 USD</span>
                {/* <span className="text-md font-bold text-center justify-end text-gray-600">/Month</span> */}
              </div>

              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
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
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            {/* Premium Tier */}
            {/* <Card className=" hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
              </CardHeader>

              <div className="flex p-6 items-end">
                <span className="text-3xl font-bold text-center">0 USD</span>
                <span className="text-md font-bold text-center justify-end text-gray-600">/Month</span>
              </div>

              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
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
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card> */}

            {/* Enterprise Tier */}
            <Card className=" hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>Custom solutions</CardDescription>
                <div className="text-3xl font-bold mt-4">Tailored pricing</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Custom solutions
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    scalability
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    SLA guarantee
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Performance Monitoring
                  </li>
                </ul>
                <Button className="w-full mt-6">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        }

        {
          screen === 2 && <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto">
            {/* Free plan */}
            <Card className=" hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
              </CardHeader>

              <div className="flex p-6 items-end">
                <span className="text-3xl font-bold text-center">0 USD</span>
                {/* <span className="text-md font-bold text-center justify-end text-gray-600">/Month</span> */}
              </div>

              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Run time limited to 4 hours
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Limited disk space (25 MBs)
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
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            {/* Basic Tier */}
            <Card className=" hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Cloud Basic</CardTitle>
                <CardDescription>Perfect for Beginners and Small Projects</CardDescription>
              </CardHeader>
              <div className="flex p-6 items-end">
                <span className="text-3xl font-bold text-center">39 USD</span>
                <span className="text-md font-bold text-center justify-end text-gray-600">/Month</span>
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
                  {/* <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Custom solutions
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Scalebility
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    SLA guarantee
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Performance Monitoring
                  </li> */}
                </ul>
                <Button className="w-full mt-6">Subscribe Now</Button>
              </CardContent>
            </Card>

            {/* Premium Tier */}
            <Card className="scale-105 transition-all duration-300 hover:shadow-lg border-customGreen flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Cloud Premium</CardTitle>
                <CardDescription>For great value over performance</CardDescription>
              </CardHeader>
              <div className="flex p-6 items-end">
                <span className="text-3xl font-bold text-center">129 USD</span>
                <span className="text-md font-bold text-center justify-end text-gray-600">/Month</span>
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
                <Button className="w-full mt-6">Subscribe Now</Button>
              </CardContent>
            </Card>

            {/* Advanced Tier */}
            <Card className=" hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Cloud Advanced</CardTitle>
                <CardDescription>Ample resources for advanced projects</CardDescription>
              </CardHeader>
              <div className="flex p-6 items-end">
                <span className="text-3xl font-bold text-center">239 USD</span>
                <span className="text-md font-bold text-center justify-end text-gray-600">/Month</span>
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
                  {/* <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    All features of premium plan
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Custom solutions
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Scalebility
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    SLA guarantee
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Performance Monitoring
                  </li> */}
                </ul>
                <Button className="w-full mt-6">Subscribe Now</Button>
              </CardContent>
            </Card>

          </div>
        }

        {
          screen === 3 && <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
            {/* Free Tier */}
            <Card className="col-start-2 hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Hourly</CardTitle>
                <CardDescription>Perfect for onbording developers</CardDescription>
              </CardHeader>

              <div className="flex p-4 items-end">
                <span className="text-3xl font-bold text-center">$216</span>
                <span className="text-md font-bold text-center justify-end text-gray-600">/hour</span>
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
                    Designing and creating software architechture
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Assistance with custom infrastructure
                  </li>
                </ul>
                <Button className="w-full mt-6">Book a meeting</Button>
              </CardContent>
            </Card>
          </div>
        }

        <div className="flex justify-center gap-4 my-6">
          <Button variant="secondary" className="hover-lift" size="lg" onClick={() => navigate(`details/${screen}`)}>
            Learn More
          </Button>
        </div>


      </div>
    </section>
  );
};

export default PricingSection;