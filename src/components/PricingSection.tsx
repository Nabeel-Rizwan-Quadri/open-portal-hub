import { Check, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const PricingSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in">
          Flexible Pricing for Everyone
        </h2>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto animate-fade-in">
          Choose the perfect plan that fits your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <Card className="scroll-fade-in hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
              <div className="text-3xl font-bold mt-4">$0</div>
            </CardHeader>
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
          <Card className="scroll-fade-in hover:scale-105 transition-all duration-300 hover:shadow-lg border-customGreen">
            <CardHeader>
              <CardTitle>Premium</CardTitle>
              <CardDescription>For power users</CardDescription>
              <div className="text-3xl font-bold mt-4">$29/mo</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
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
                  Advanced resources
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Custom integrations
                </li>
              </ul>
              <Button className="w-full mt-6">Subscribe Now</Button>
            </CardContent>
          </Card>

          {/* Enterprise Tier */}
          <Card className="scroll-fade-in hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>Custom solutions for teams</CardDescription>
              <div className="text-3xl font-bold mt-4">Custom</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Custom solutions
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Dedicated support
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  SLA guarantee
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Custom training
                </li>
              </ul>
              <Button className="w-full mt-6">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;