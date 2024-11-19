import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const WriteToUs = () => {
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

        const elements = document.querySelectorAll(".scroll-fade-in");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto text-center">
                <div className="max-w-3xl mx-auto scroll-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Reach out to Learn More
                    </h2>
                    <p className="mb-2">
                        Write us:
                        <a className="text-customGreen hover:text-white" href="mailto:hello@openiap.io">
                            {" "}hello at openiap.io{" "}
                        </a>
                    </p>
                    <p className="mb-2">
                        Call us:
                        <a href="tel:+393899433824" className="text-customGreen hover:text-white">
                            {" "}+39 389 943 3824
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WriteToUs;