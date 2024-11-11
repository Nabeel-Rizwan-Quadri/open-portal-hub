import { useEffect } from "react";

const Telemetry = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="px-4 pt-20  gradient-bg md:h-screen flex justify-center items-center">
                <div className="container mx-auto text-start">
                    <div className="text-customGreen mb-4 text-3xl">
                        TELEMETRY
                    </div>
                    <div className="text-gray-400 mb-10">
                        OpenIAP applications collects telemetry data about general usage. Participation in this program is optional, and you may opt-out if you'd not like to share any information.
                    </div>
                    <div className="text-customGreen mb-4 text-xl">
                        WHY IS TELEMETRY COLLECTED?
                    </div>
                    <div className="text-gray-400 mb-10">
                        In order to document usage patterns of the different applications to help decide what features to focus on and how they are used, usage information from OpenIAP applications gets collected and sent to otel.openiap.io . Each instance generate an unique non-reversable ofid based on the domain name, to collate each client to the instance it belongs.
                    </div>
                    <div className="text-customGreen mb-4 text-xl">
                        WHY IS TELEMETRY COLLECTED?
                    </div>
                    <div className="text-gray-400 mb-10">
                        For OpenRPA we collect ofid, memory and CPU usage for OpenRPA, hostname, username, number of workflow runs, number of active running workflows, and timing information for each activity type.
                    </div>
                    <div className="text-gray-400 mb-10">
                        For OpenIAP flow we collect ofid, memory and CPU usage, database performance, online clients and client types, queue usage and number and type of packages and timing of each package.
                    </div>
                    <div className="text-gray-400 mb-10">
                        For OpenIAP Agent instances we collect memory and CPU usage, and timing information for each node type.
                    </div>
                    <div className="text-customGreen mb-4 text-xl">
                        HOW DO I OPT-OUT?
                    </div>
                    <div className="text-gray-400 mb-10">
                        For OpenRPA in settings.json set enable_analytics to false, for all other create an environment variable named enable_analytics set to value false.
                    </div>

                </div>
            </div>
        </>
    );
};

export default Telemetry;
