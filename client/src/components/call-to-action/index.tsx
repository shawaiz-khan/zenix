import { useTheme } from "@/hooks";
import { Button } from "../ui";

const CallToAction: React.FC = () => {
    const { theme } = useTheme();

    return (
        <section className={`${theme === "dark" ? "bg-bg-dark-secondary text-secondary" : "bg-bg-light text-primary"} p-6 sm:p-8 md:p-16`}>
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                    Your Events. On Your Terms.
                </h2>
                <p className={`text-base sm:text-lg mb-8 ${theme === "dark" ? "text-secondary/65" : "text-muted-foreground"}`}>
                    Zenix puts powerful tools in your hands. Manage events, send real-time notifications, and keep everything under control.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-center gap-4 w-full">
                    <Button label="Create an Account" />
                    <Button
                        label="Contact Support"
                        variant="outline"
                    />
                </div>
            </div>
        </section>
    );
};

export default CallToAction;