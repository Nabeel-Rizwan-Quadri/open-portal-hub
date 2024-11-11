import { useEffect } from "react";

const Partners = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="px-4 pt-20 md:pt-0 gradient-bg md:h-screen flex items-center">
                <div className="container mx-auto text-start">
                    <div className="text-customGreen mb-4 text-3xl">
                        Our Partners
                    </div>
                    <ul className="list-disc list-inside text-gray-400">
                        <li className="mb-2">
                            <span className="text-customGreen cursor-pointer hover:text-white" onClick={() => window.open('https://calendly.com/rjvanschoonhoven', '_blank', 'noopener,noreferrer')}>
                                Rutger van Schoonhoven{" "}
                            </span>
                            Dutch/English
                        </li>
                        <li className="mb-2">
                            {/* <span className="text-customGreen cursor-pointer hover:text-white" onClick={() => window.open('https://app.openiap.io/ui/#/Customer', '_blank', 'noopener,noreferrer')}>
                                Zhuo Song{" "}
                            </span> */}

                            <a href="mailto:zhuosong@gmail.com"  className="text-customGreen cursor-pointer hover:text-white">
                                Zhuo Song{" "}
                            </a>

                            Chinese/English
                        </li>
                        <li className="mb-2">
                            <span className="text-customGreen cursor-pointer hover:text-white" onClick={() => window.open('https://alphatrods.dk/', '_blank', 'noopener,noreferrer')}>
                                Alphatrods{" "}
                            </span>
                            Danish/English
                        </li>
                        <li className="mb-2">
                            <span className="text-customGreen cursor-pointer hover:text-white" onClick={() => window.open('https://synergerp.com/', '_blank', 'noopener,noreferrer')}>
                                SynergERP{" "}
                            </span>
                            Afrikaans/English
                        </li>

                        <li className="mb-2">
                            <span className="text-customGreen cursor-pointer hover:text-white" onClick={() => window.open('https://www.xnovis.com/', '_blank', 'noopener,noreferrer')}>
                                xnovis {" "}
                            </span>
                            German/English
                        </li>
                        <li className="mb-2">
                            <span className="text-customGreen cursor-pointer hover:text-white" onClick={() => window.open('https://automation.bpatechnologies.com/', '_blank', 'noopener,noreferrer')}>
                                BPA Technologies{" "}
                            </span>
                            Portuguese/English
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Partners;
