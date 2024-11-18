import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarFold } from "lucide-react";
import { useEffect, useState } from "react";
import {
    //  useNavigate,
    useParams
} from "react-router-dom";

const tabClass = "cursor-pointer inline-block p-6 text-xl border-b-2 rounded-t-lg hover:text-customGreen dark:hover:text-gray-300 align-self-start"
const tabClass1 = "cursor-pointer inline-block p-2 text-sm border-b-2 rounded-t-lg hover:text-customGreen dark:hover:text-gray-300 align-self-start"


const Privacy = () => {
    const params = useParams()
    // const navigate = useNavigate()
    const [active, setActive] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0);
        const id = params.id
        console.log(id)
        setActive(id)
    }, []);

    return (
        <>
            <section className="py-20 px-4 gradient-bg md:h-screen">
                <div className="hidden md:block text-sm font-medium text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mx-20">
                    <ul className="flex flex-wrap -mb-px">
                        <li>
                            <a onClick={() => setActive("1")} className={`${tabClass} ${active === "1" ? "text-customGreen border-customGreen" : "border-transparent"}`}>Premium license</a>
                        </li>
                        <li>
                            <a onClick={() => setActive("2")} className={`${tabClass} ${active === "2" ? "text-customGreen border-customGreen" : "border-transparent"}`}>Cloud Offering</a>
                        </li>
                        <li>
                            <a onClick={() => setActive("3")} className={`${tabClass} ${active === "3" ? "text-customGreen border-customGreen" : "border-transparent"}`}>Consulting</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row block md:hidden">
                    <div>
                        <a onClick={() => setActive("1")} className={`${tabClass1} ${active === "1" ? "text-customGreen border-customGreen" : "border-transparent"}`}>Premium license</a>
                    </div>
                    <div>
                        <a onClick={() => setActive("2")} className={`${tabClass1} ${active === "2" ? "text-customGreen border-customGreen" : "border-transparent"}`}>Cloud Offering</a>
                    </div>
                    <div>
                        <a onClick={() => setActive("3")} className={`${tabClass1} ${active === "3" ? "text-customGreen border-customGreen" : "border-transparent"}`}>Consulting</a>
                    </div>
                </div>
                <div className="container mx-auto">
                    {
                        active === "1" && <div className="mt-10">
                            <div className="text-customGreen mb-4 text-xl">
                                OpenIAP Cloud only Services
                            </div>
                            <div className="text-gray-400 mb-10">
                                OpenIAP offers access to OpenIAP Flow at app.openiap.io. You get 25MB of disk space for free, and you can start a RAM-limited agent that gets turned off after 4 hours. If you enable multi-tenancy for your user, you can add multiple users and roles.
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
                        active === "2" && <div className="mt-10">
                            <div className="text-customGreen mb-4 text-xl">
                                Enable enterprise tooling for scaling

                            </div>
                            <div className="text-gray-400 mb-10">
                                When you want to deploy on premise, your local hosting center or using your own cloud provider ( like Azure, AWS, Google, IBM, Alibaba etc. ) you can buy one or more license keys. Deploying openflow on premise is easy using docker compose for docker or our helm chart for kubernetes. Once updated in our system you can get your license on your customer page A license does not come with any support, but you can buy consulting hours as needed.


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
                                    <li>
                                        Custom grafana dashboards for OpenTelemtry data.
                                    </li>
                                    <li>
                                        The first license purchase, will also allows you an additional license that may only be used for a development envoriment.
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

                            <div className="flex flex-row space-x-4">
                                <Button variant="secondary" className="hover-lift" size="lg" onClick={() => window.open('https://docs.openiap.io/docs/Accessing-for-the-First-Time.html', '_blank', 'noopener,noreferrer')} >
                                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button className="hover-lift" size="lg" onClick={() => window.open('https://calendly.com/simon-openiap/30min', '_blank', 'noopener,noreferrer')} >
                                    Schedule a Meeting <CalendarFold className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    }
                    {
                        active === "3" && <div className="mt-10">
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
        </>
    );
};

export default Privacy;
