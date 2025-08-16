/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import useTheme from "./useTheme";
import { axiosInstance, notify } from "@/utils";

const useSupport = () => {
    const [form, setForm] = useState<{ email: string; subject: string; message: string }>({
        email: "",
        subject: "",
        message: ""
    });
    const { theme } = useTheme();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const validate = (): boolean => {
        if (!form.email || !form.subject || !form.message) return false;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) return false;

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (!validate()) {
                alert("Please fill all fields correctly!");
                return;
            }

            console.log("Form submitted:", form);
            await axiosInstance.post("/api/contact/support", form)

            notify("Message sent");
        } catch (error: any) {
            notify(error?.message || "Cannot send message")
        }
    };

    return { form, handleChange, handleSubmit, theme };
};

export default useSupport;