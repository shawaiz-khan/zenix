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
        link: "/about",
        label: "About",
    },
];