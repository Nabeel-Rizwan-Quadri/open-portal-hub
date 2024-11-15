import { useEffect } from "react";
import PricingList from "@/components/PricingList";

const Pricing = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PricingList />
        </>
    );
};

export default Pricing;
