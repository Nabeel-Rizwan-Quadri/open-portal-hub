import { useState } from "react";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PricingSection from "@/components/PricingSection";
const tabClass = "cursor-pointer inline-block p-6 text-xl border-b-2 rounded-t-lg hover:text-customGreen dark:hover:text-gray-300 align-self-start"

const Pricing = () => {

    const [active, setActive] = useState(1)

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

        const elements = document.querySelectorAll(".scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-zoom-in, .scroll-rotate-in, .scroll-bounce");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="pt-16">
            {/* Section One: Overview */}
            <section className="py-20 px-4 gradient-bg relative overflow-hidden ">
                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center scroll-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Pricings
                            <span className="bg-clip-text text-customGreen">
                                {" "}Tailored {" "}
                            </span>
                            To Your Needs
                        </h1>
                        <p className="text-xl text-gray-400  px-4 sm:px-0">
                            Choose a plan that fits your unique requirements, whether you’re just starting or scaling up. Our pricing adapts to your needs, ensuring you get the best value at every stage.
                        </p>
                        <p className="text-xl text-gray-400 mb-8 px-4 sm:px-0">
                            Unlock efficiency and drive growth effortlessly.
                        </p>
                        <Button className="hover-lift" size="lg" onClick={() => window.open('https://docs.openiap.io/docs/Accessing-for-the-First-Time.html', '_blank', 'noopener,noreferrer')} >
                            Get Started <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
            </section>

            {/* <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <div className="text-customGreen mb-4 text-xl">
                        OPENRPA
                    </div>
                    <div className="text-gray-400 mb-10">
                        OpenRPA is released as open source, with no commercial model around it. You are free to use it however and as much as you want, also for commercial use. OpenIAP ApS does not offer any additional services or features for OpenRPA. By default, OpenRPA will connect to OpenIAP's cloud offering at app.openiap.io.
                    </div>
                    <div className="text-customGreen mb-4 text-xl">
                        OPENIAP FLOW
                    </div>
                    <div className="text-gray-400 mb-10">
                        OpenFlow is released as open source, but OpenIAP ApS also offers additional features and services that are not part of the open source offering. You are free to use the open source version however and as much as you want, also for commercial use. Click the "Premium License" tab to see features enabled with a premium license.
                    </div>
                    <div className="text-customGreen mb-4 text-xl">
                        OPENIAP CLOUD OFFERING
                    </div>
                    <div className="text-gray-400 mb-10">
                        OpenIAP ApS runs an instance of OpenIAP Flow at app.openiap.io. You can use this instance for free, but with some limitations. You can also buy more resources at a very low price (see below).
                    </div>

                </div>
            </section> */}

            <section className="px-4 gradient-bg relative overflow-hidden ">
                <PricingSection />
            </section>

            <section className="py-20 px-4 gradient-bg">
                <div className="container mx-auto text-center">
                    <div className="text-customGreen mb-4 text-xl">
                        OPENRPA
                    </div>
                    <div className="text-gray-400 mb-10">
                        OpenRPA is released as open source, with no commercial model around it. You are free to use it however and as much as you want, also for commercial use. OpenIAP ApS does not offer any additional services or features for OpenRPA. By default, OpenRPA will connect to OpenIAP's cloud offering at app.openiap.io.
                    </div>
                    <div className="text-customGreen mb-4 text-xl">
                        OPENCORE
                    </div>
                    <div className="text-gray-400 mb-10">
                        OpenFlow is released as open source, but OpenIAP ApS also offers additional features and services that are not part of the open source offering. You are free to use the open source version however and as much as you want, also for commercial use. Click the "Premium License" tab to see features enabled with a premium license.
                    </div>
                    <div className="text-customGreen mb-4 text-xl">
                        OPENIAP CLOUD OFFERING
                    </div>
                    <div className="text-gray-400 mb-10">
                        OpenIAP ApS runs an instance of OpenCore at app.openiap.io. You can use this instance for free, but with some limitations. You can also buy more resources see price listing.
                    </div>

                </div>
            </section>

            <section className="py-20 px-4">
                <div className="text-sm font-medium text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mx-20">
                    <ul className="flex flex-wrap -mb-px">
                        <li>
                            <a onClick={() => setActive(1)} className={`${tabClass} ${active === 1 ? "text-customGreen border-customGreen" : "border-transparent"}`}>Cloud Offering</a>
                        </li>
                        <li>
                            <a onClick={() => setActive(2)} className={`${tabClass} ${active === 2 ? "text-customGreen border-customGreen" : "border-transparent"}`}>Premium Licence</a>
                        </li>
                        <li>
                            <a onClick={() => setActive(3)} className={`${tabClass} ${active === 3 ? "text-customGreen border-customGreen" : "border-transparent"}`}>Consulting</a>
                        </li>
                    </ul>
                </div>
                <div className="container mx-auto">
                    {
                        active === 1 && <div className="mt-10">
                            <div className="text-customGreen mb-4 text-xl">
                                OpenIAP Cloud only Services
                            </div>
                            <div className="text-gray-400 mb-10">
                                OpenIAP offers access to OpenIAP Flow at app.openiap.io. You get 25MB of disk space for free, and you can start a RAM-limited agent that gets turned off after 8 hours. If you enable multi-tenancy for your user, you can add multiple users and roles.
                            </div>
                            <div className="text-gray-400 mb-10">
                                After enabling multi-tenancy, on your customer page, you can purchase additional disk space at 3 DKK per 50MB a month (Approx. 0.43 USD as of November 6, 2023), dedicated agent(s) that do not get turned off; see prices below.
                            </div>
                            <div className="text-gray-400 mb-10">
                                To avoid these restrictions, you can run OpenIAP Flow on-premise or at your own cloud free of any charge.
                            </div>
                        </div>
                    }
                    {
                        active === 2 && <div className="mt-10">
                            <div className="text-customGreen mb-4 text-xl">
                                Enable enterprise tooling for scaling

                            </div>
                            <div className="text-gray-400 mb-10">
                                When you want to deploy on premise, your local hosting center or using your own cloud provider ( like Azure, AWS, Google, IBM, Alibaba etc. ) you can buy one or more license keys. Deploying openflow on premise is easy using docker compose for docker or our helm chart for kubernetes. After purching a license, please send an email to info@openiap.io with your customer name, and the domain name you wish to use for your openflow installation. Once updated in our system you can get your license on your customer page A license does not come with any support, but you can buy consulting hours as needed.


                            </div>

                            <div className="text-customGreen mb-4 text-xl">
                                Product elements
                            </div>
                            <div className="text-gray-400 mb-10">
                                <ul>
                                    <li>
                                        Access to monitoring using OpenTelemetry. Collection of both performance data for monitoring and spans for detailed logging of all events.
                                        Custom grafana dashboards on any (un)structured data saved in the openflow database.
                                        Easy design custom reports and dashboard, using same security model as in OpenFlow.
                                        Kubernetes agent driver (with limited OpenShift support)
                                    </li>
                                    Custom grafana dashboards for OpenTelemtry data (if collected).
                                    <li>
                                        The first license purchase, will also allows you an ekstra license that may only be used for a development envoriment
                                    </li>
                                    <li>

                                        A license is per api domain. Therefor if it used in multitenant mode you will only need one license
                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                    <li>

                                    </li>
                                </ul>
                            </div>

                            <div className="text-customGreen mb-4 text-xl">
                                Learn More
                            </div>
                            <div className="text-gray-400 mb-10">
                                Contact us at info at openiap.io
                                Or Book a meeting to learn more.
                            </div>
                        </div>
                    }
                    {
                        active === 3 && <div className="mt-10">
                            <div className="text-customGreen mb-4 text-xl">
                                Consulting Service
                            </div>
                            <div className="text-gray-400 mb-10">
                                You can purchase per hour consulting services from OpenIAP ApS. Hours are limited to the offerings below. If you are looking for a company to build or monitor your flows and installation, please contact one of our partners. Hours are billed in 30-minute increments and must be pre-paid before work begins. You can buy a single ad-hoc hour when booking a meeting with us, or purchase packages of hours on your customer page. Buying packages will offer a discount on the hourly rate.
                            </div>
                            <div className="text-customGreen mb-4 text-xl">
                                Price: 1500 DKK/hour
                            </div>
                            <div className="text-gray-400 mb-10">
                                (Approx. 216 USD as of November 6, 2023)
                            </div>
                        </div>
                    }

                </div>
            </section>

        </div>
    );
};

export default Pricing;
