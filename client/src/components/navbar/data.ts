import type { INavLinks } from "./types";

export { default as logo_dark } from "@/assets/images/logos/logo-without-tag_black.png";
export { default as logo_light } from "@/assets/images/logos/logo-without-tag_white.png";

export const navLinks: INavLinks[] = [
    {
        link: "/",
        label: "Home",
    },
    {
        link: "/events",
        label: "Events",
    },
    {
        link: "/contact",
        label: "Contact",
        children: [
            {
                link: "/contact/support",
                label: "Support"
            },
            {
                link: "/contact/developer",
                label: "Developer"
            },
        ]
    },
];