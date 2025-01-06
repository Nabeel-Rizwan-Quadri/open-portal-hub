import { useEffect, useState } from "react";

const CalendlyWidget = () => {

  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 450);
  const [isScreenSmallTab, setIsScreenSmallTab] = useState(window.innerWidth < 769 && window.innerWidth > 540);
  const [isScreenMedium, setIsScreenMedium] = useState(window.innerWidth < 1160 && window.innerWidth > 769);
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth > 1160);

  useEffect(() => {
    // Define a handler to check the window width
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 540);
      setIsScreenSmallTab(window.innerWidth > 540 && window.innerWidth < 769);
      setIsScreenMedium(window.innerWidth > 769 && window.innerWidth < 1160);
      setIsScreenLarge(window.innerWidth > 1160);
    };
    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Call the handler initially in case the screen is already small
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Dynamically load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section className="py-20 px-4 gradient-bg">
        <div className="md:container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Book a Meeting Now 
          </h2>
          <div
            // className="calendly-inline-widget "
            className={`calendly-inline-widget min-w-80 ${isScreenSmall && "h-[66rem]"} ${isScreenSmallTab && "h-[70rem]"} ${isScreenMedium && "h-[70rem]"}  ${isScreenLarge && "h-[50rem]"} `}
            data-url="https://calendar.app.google/aoU5qv1gX6ocHnAH8"
            // style={{ minWidth: 320, height: 700 }}
          ></div>
        </div>
      </section >
    </>
  );
};

export default CalendlyWidget;
