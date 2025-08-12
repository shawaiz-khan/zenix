export { default as logo_dark } from "@/assets/images/logos/logo-without-tag_black.png";
export { default as logo_light } from "@/assets/images/logos/logo-without-tag_white.png";

import { Twitter, Instagram, Linkedin, Github } from "lucide-react";
import type { ReactNode } from "react";

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export interface SocialLink {
    href: string;
    label: string;
    icon: ReactNode;
}

export const footerLinks: FooterSection[] = [
    {
        title: "Navigation",
        links: [
            { label: "Home", href: "/" },
            { label: "Features", href: "/features" },
            { label: "Events", href: "/events" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Contact", href: "/contact/support" },
            { label: "Developer", href: "/contact/developer" },
        ],
    },
];

export const socialLinks: SocialLink[] = [
    {
        href: "https://x.com/shawaizkhan_dev",
        label: "Twitter",
        icon: <Twitter size={20} />,
    },
    {
        href: "https://instagram.com/shawaizkhan.dev",
        label: "Instagram",
        icon: <Instagram size={20} />,
    },
    {
        href: "https://linkedin.com/in/bizshawaizkhan",
        label: "LinkedIn",
        icon: <Linkedin size={20} />,
    },
    {
        href: "https://github.com/shawaiz-khan/zenix",
        label: "GitHub",
        icon: <Github size={20} />,
    },
];