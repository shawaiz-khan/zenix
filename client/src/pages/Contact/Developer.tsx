import { Button, Input } from "@/components";
import useDeveloper from "@/hooks/useDeveloper";

const Developer: React.FC = () => {
    const {
        form,
        handleChange,
        handleSubmit,
        theme
    } = useDeveloper();

    return (
        <main className={`min-h-[90vh] p-5 flex flex-col md:justify-center md:items-center w-full ${theme === "dark" ? "bg-bg-dark-secondary text-secondary" : "bg-bg-light"}`}>
            <div className="w-full md:max-w-lg flex flex-col md:justify-center md:items-center">
                <h1 className="font-bold text-3xl mb-4 md:text-center">
                    Get in Touch
                </h1>
                <p className={`${theme === "dark" ? "text-secondary/65" : "text-gray-600"} mb-6 md:text-center`}>
                    I&apos;m always open to new opportunities and collaborations.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
                    <Input
                        label="Email"
                        placeholder="user@mail.com"
                        onChange={handleChange}
                        name="email"
                        value={form.email}
                    />
                    <Input
                        label="Subject"
                        placeholder="Subject for developer"
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
                            className={`w-full border border-gray-200 rounded-md p-2 min-h-[120px] resize-none focus:border-accent-brand focus:ring-2 focus:ring-accent-brand focus:outline-none ${theme === "dark" ? "placeholder:text-secondary/65" : ""}`}
                        />
                    </div>
                    <Button label="Send Message" onClick={handleSubmit} />
                </form>
            </div>
        </main>
    );
};

export default Developer;