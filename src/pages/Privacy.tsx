import { useEffect } from "react";

const Privacy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="px-4 pt-20 md:pt-0 gradient-bg md:h-screen flex items-center">
                <div className="container mx-auto text-start">
                    <div className="text-customGreen mb-4 text-3xl">
                        Privacy Policy
                    </div>
                    <div className="text-gray-400 mb-10">
                        We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. As part of this commitment, we align our privacy practices with the General Data Protection Regulation (GDPR). Please read below to understand how we handle your information:
                    </div>
                    <ul className="list-disc list-inside text-gray-400">
                        <li className="mb-2">We store the IP address and the time of all actions performed in our system for security and audit purposes.
                        </li>
                        <li className="mb-2">Our website uses cookies to enhance user experience when accessing from a browser.
                        </li>
                        <li className="mb-2">We do not store any data retrieved via our system; however, data saved into our system is retained.
                        </li>
                        <li className="mb-2">Users have the right to access all data stored about them in our system.
                        </li>
                        <li className="mb-2">Users have the right to delete any data they have saved in our system, with the exception of audit logs which are maintained for compliance and security reasons.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Privacy;