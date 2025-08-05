import { ArrowDown } from "lucide-react";
import { faqs } from "../data";
import { useTheme } from "@/hooks";

const FAQ: React.FC = () => {
    const { theme } = useTheme();

    return (
        <section className={`p-5 md:py-12 ${theme === "dark" ? "bg-bg-dark text-secondary" : "bg-white"} text-primary min-h-screen flex flex-col justify-center items-center`}>
            <div className="max-w-4xl w-full mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group border border-border rounded-lg p-4 bg-transparent open:shadow-sm transition duration-300 w-full max-w-xl mx-auto"
                        >
                            <summary className="cursor-pointer list-none flex justify-between items-center font-semibold text-left">
                                <span className="pr-4">{faq.question}</span>
                                <ArrowDown className="h-5 w-5 transform transition-transform duration-200 group-open:rotate-180" />
                            </summary>
                            <p className={`mt-3 text-sm ${theme === "dark" ? "text-secondary/65" : "text-muted-foreground"}`}>{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;