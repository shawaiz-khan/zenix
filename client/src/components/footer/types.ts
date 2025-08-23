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