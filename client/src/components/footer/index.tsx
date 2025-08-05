import { useTheme } from "@/hooks";
import { footerLinks, logo_dark, logo_light, socialLinks } from "./data";

const Footer: React.FC = () => {
    const { theme } = useTheme();

    return (
        <footer className={`${theme === "dark" ? "bg-bg-dark text-secondary border-bg-dark-hover" : "bg-white text-primary border-border"} border-t p-6 md:p-10`}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                <div>
                    <img
                        src={theme === "light" ? logo_dark : logo_light}
                        alt="Zenix"
                        className="w-full max-w-24 transition-all duration-300 ease-in"
                    />
                    <p className={theme === "dark" ? "text-secondary/65" : "text-muted-foreground"}>
                        Smart event and notification platform to keep you in control, always.
                    </p>
                </div>

                {footerLinks.map((section) => (
                    <div key={section.title}>
                        <h3 className="font-semibold mb-2">{section.title}</h3>
                        <ul className="space-y-1 text-muted-foreground">
                            {section.links.map((link) => (
                                <li key={link.href} className={theme === "dark" ? "text-secondary/65" : "text-muted-foreground"}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <h3 className="font-semibold mb-2">Connect</h3>
                    <ul className="flex gap-4 text-muted-foreground">
                        {socialLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} aria-label={link.label} className={theme === "dark" ? "text-secondary/65" : "text-muted-foreground"}>
                                    {link.icon}
                                </a>
                            </li>
                        ))}
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