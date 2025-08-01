export { default as logo_dark } from "@/assets/images/logos/logo-without-tag_black.png";
export { default as logo_dark_tag } from "@/assets/images/logos/logo-with-tag_black.png";

interface INavLinks {
    link: string
    label: string
    children?: {
        link: string
        label: string
        description?: string
    }[]
}

export const navLinks: INavLinks[] = [
    {
        link: "/",
        label: "Home",
    },
    {
        link: "/features",
        label: "Features",
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