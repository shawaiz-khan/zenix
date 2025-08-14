import { useState } from "react";
import useTheme from "./useTheme";

const useSupport = () => {
    const [form, setForm] = useState<{ email: string, subject: string, message: string }>({
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        // TODO: Add submit logic (API call, notify, etc.)
        // TODO: The support message should be sent via email from the backend
    };

    return { form, handleChange, handleSubmit, theme }
}

export default useSupport;