import { Button } from "@/components";
import { hero_img } from "../data";
import { useTheme } from "@/hooks";

const Hero: React.FC = () => {
    const { theme } = useTheme();

    return (
        <section className={`${theme === "dark" ? "bg-bg-dark-secondary" : "bg-bg-light"} min-h-96 max-h-screen p-5 md:py-5 md:px-28 flex flex-col md:flex-row justify-center md:justify-between items-center gap-5`}>
            <img
                src={hero_img}
                alt="Event illustration"
                className="w-72 md:w-96 h-72 md:h-96 object-cover -mt-5 md:order-2 drop-shadow-xl"
            />
            <div className="flex flex-col gap-4">
                <h1 className={`${theme === "dark" ? "text-secondary" : "text-primary"} text-3xl md:text-6xl md:max-w-[40rem] font-bold text-center md:text-left`}>
                    Host Events & Chat with People Live.
                </h1>
                <p className={`hidden md:block max-w-xl ${theme === "dark" ? "text-secondary/65" : "text-muted-foreground"}`}>
                    Zenix helps you run events and talk to people while they&apos;re happening.
                    You can plan, share, and stay in control without any confusion. It&apos;s
                    made for anyone who wants to bring people together and keep things simple.
                </p>
                <div className="space-x-2 w-full flex justify-center items-center">
                    <Button label="Create an Event" customClasses="md:py-5" />
                    <Button label="Explore Features" variant="outline" customClasses="md:py-5" />
                </div>
            </div>
        </section>
    );
};

export default Hero;