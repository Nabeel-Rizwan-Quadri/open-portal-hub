import React, { useEffect } from "react";

const CalendlyWidget = () => {

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
    <div
      className="calendly-inline-widget gradient-bg"
      data-url="https://calendly.com/simon-openiap/30min?theme=dark"
      style={{ minWidth: 320, height: 700 }}
    ></div>
  );
};

export default CalendlyWidget;
