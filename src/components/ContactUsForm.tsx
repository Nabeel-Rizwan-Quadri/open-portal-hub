import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Form from "./form";
import TextInput from "./form/text_input";

import "./form/styles.css";
import toast from "react-hot-toast";

const inputDivs = "mx-2"

const ContactUsForm = () => {

    const [loading, setLoading] = useState(false)
    const handleSubmit = async (data: Object) => {
        setLoading(true)
        try {
            console.log("Form data: ", data)
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            };

            const response = await fetch("https://allanopenrpadk.app.openiap.io/form", requestOptions)
            const resData = await response.json();
            console.log("resData: ", resData)
            if (resData.success) {
                toast.success("Your response has been submitted")
            }
            else {
                toast.error(resData.error)
            }
        }
        catch (e) {
            console.error("contact us form: ", e.message)
            toast.error(e.message)
        }
        setLoading(false)
    }

    const requiredValidator = val => {
        if (!val) {
            return ["This field is required"];
        }

        return [];
    };

    return (
        <section className="py-20 px-4 md:h-screen flex items-center justify-center gradient-bg ">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                        Get in Touch!
                    </h2>
                    <p className="text-xl text-gray-400 mb-8  text-center">
                        We will get back to you as soon as we can.
                    </p>
                    <div className="bg-card border border-1 rounded-xl p-4 m-2">
                        <Form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2">
                            <div className={inputDivs}>
                                <TextInput
                                    name="name"
                                    validators={[requiredValidator]}
                                    placeholder="Name"
                                    label="Name *"
                                />
                            </div>
                            <div className={inputDivs}>
                                <TextInput
                                    name="company_name"
                                    validators={[requiredValidator]}
                                    placeholder="Company Name"
                                    label="Company Name *"
                                />
                            </div>
                            <div className={`${inputDivs} md:col-span-2`}>
                                <TextInput
                                    name="phone_number"
                                    type="number"
                                    placeholder="Phone Number"
                                    label="Phone Number"
                                />
                            </div>
                            <div className={`${inputDivs} md:col-span-2`}>
                                <TextInput
                                    name="email"
                                    type="email"
                                    validators={[requiredValidator]}
                                    placeholder="Email"
                                    label="Email *"
                                />
                            </div>
                            <div className={`${inputDivs} md:col-span-2`}>
                                <TextInput
                                    name="message"
                                    validators={[requiredValidator]}
                                    placeholder="Message"
                                    label="Message *"
                                    largeInput={true}
                                />
                            </div>
                            <Button className="submit-btn col-span-1 md:col-span-2 my-2" type="submit" disabled={loading}>
                                Submit!
                            </Button>
                        </Form>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default ContactUsForm;