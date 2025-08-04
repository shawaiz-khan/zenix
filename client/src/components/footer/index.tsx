import { useTheme } from "@/hooks";
import { logo_dark, logo_light } from "./data";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
    const { theme } = useTheme();

    return (
        <footer className="bg-white border-t border-border text-primary p-6 md:p-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                <div>
                    <img
                        src={theme === "light" ? logo_dark : logo_light}
                        alt="Zenix"
                        className="w-full max-w-24 transition-all duration-300 ease-in"
                    />
                    <p className="text-muted-foreground">
                        Smart event and notification platform to keep you in control, always.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Navigation</h3>
                    <ul className="space-y-1 text-muted-foreground">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/features">Features</a></li>
                        <li><a href="/events">Events</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Support</h3>
                    <ul className="space-y-1 text-muted-foreground">
                        <li><a href="/contact/support">Contact</a></li>
                        <li><a href="/contact/developer">Developer</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Connect</h3>
                    <ul className="flex gap-4 text-muted-foreground">
                        <li><a href="#" aria-label="Twitter"><Twitter size={20} /></a></li>
                        <li><a href="#" aria-label="Instagram"><Instagram size={20} /></a></li>
                        <li><a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a></li>
                        <li><a href="#" aria-label="GitHub"><Github size={20} /></a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} Zenix. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;