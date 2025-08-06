import { useTheme } from "@/hooks";
import { features } from "../data";

const Features: React.FC = () => {
    const { theme } = useTheme();

    return (
        <section className={`p-5 md:py-12 ${theme === "dark" ? "bg-bg-dark text-secondary" : "bg-white"} min-h-screen flex flex-col justify-center items-center`}>
            <div className="max-w-6xl mx-auto">
                <div className="mb-10 flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h1>
                    <p className={`text-sm md:text-base max-w-3xl ${theme === "dark" ? "text-secondary/65" : "text-muted-foreground"}`}>
                        With Zenix you can create an event in minutes, send out invites, add a Zoom or Google Meet link, and let people join with a single click.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-5 text-center border border-border rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <h2 className="text-lg font-semibold mb-2">{feature.title}</h2>
                            <p className={`text-sm ${theme === "dark" ? "text-secondary/65" : "text-muted-foreground"}`}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;