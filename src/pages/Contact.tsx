import ContactUsForm from "@/components/ContactUsForm";
import CalendlyWidget from "@/components/ui/CalendlyWidget";
import WriteToUs from "@/components/WriteToUs";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
    const params = useParams();
    const sectionRef = useRef(null);

    const handleScroll = () => {
        const offset = -60; // Adjust this value to match your header height
        const elementPosition = sectionRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY + offset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      };

    useEffect(() => {
        if (params.id === "meet") {
            handleScroll()
        }
        else {
            window.scrollTo({
                top: 0,
                // behavior: 'smooth',
            });
        }
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
            <div ref={sectionRef}>
                <CalendlyWidget />
            </div>
        </>
    );
};

export default Contact;
