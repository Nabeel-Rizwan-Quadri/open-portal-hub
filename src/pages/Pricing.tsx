import { useEffect } from "react";
import PricingList from "@/components/PricingList";

const Pricing = () => {

    useEffect(() => {
        // window.scrollTo(0, 0);
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
        <>
            {/* Section One: Overview */}
            {/* <section className="py-20 px-4 gradient-bg relative overflow-hidden ">
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
            </section> */}

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

            <PricingList />

            {/* <section className="py-20 px-4 gradient-bg">
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
            </section> */}
        </>
    );
};

export default Pricing;
