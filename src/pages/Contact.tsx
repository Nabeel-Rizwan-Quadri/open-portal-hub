import ContactUsForm from "@/components/ContactUsForm";
import { Button } from "@/components/ui/button";
import CalendlyWidget from "@/components/ui/CalendlyWidget";
import WriteToUs from "@/components/WriteToUs";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {

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
            {/* <div className="pt-20 px-4 gradient-bg flex justify-center items-center">
                <div className="container mx-auto text-start flex flex-col items-center scroll-fade-in">
                    <div className="text-customGreen mb-4 text-3xl text-center">
                        Contact us now!
                    </div>
                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in">
                       Get in touch via email or 
                    </p>

                </div>
            </div> */}
            <ContactUsForm />
            <WriteToUs />
            <CalendlyWidget />
        </>
    );
};

export default Contact;
