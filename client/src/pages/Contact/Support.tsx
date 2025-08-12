import { useState } from "react";
import { Input } from "@/components";

// TODO: The support message should be sent via email from the backend

const Support: React.FC = () => {
    const [form, setForm] = useState({
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        // TODO: Add your submit logic (API call, notify, etc.)
    };

    return (
        <main className="min-h-screen p-5 md:flex md:flex-col md:justify-center md:items-center">
            <h1 className="font-semibold text-3xl mb-4">We’d love to hear from you</h1>
            <p className="text-gray-600 mb-6">
                Have a question, feedback, or need help? Fill out the form below and our team will get back to you.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
                <Input
                    label="Email"
                    placeholder="user@mail.com"
                    onChange={handleChange}
                    name="email"
                    value={form.email}
                />
                <Input
                    label="Subject"
                    placeholder="Support subject"
                    onChange={handleChange}
                    name="subject"
                    value={form.subject}
                />
                <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="font-medium">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                        className="border rounded-md p-2 focus-visible:ring-accent-brand border-gray-200 min-h-[120px] resize-none"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-accent-brand text-white px-4 py-2 rounded-md hover:bg-accent-brand-dark transition-colors"
                >
                    Send Message
                </button>
            </form>
        </main>
    );
};

export default Support;