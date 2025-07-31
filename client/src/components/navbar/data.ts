interface INavLinks {
    link: string
    label: string
    children?: {
        link: string
        label: string
    }[]
}

export const navLinks: INavLinks[] = [
    {
        link: "/",
        label: "Home",
    },
    {
        link: "/about",
        label: "About",
        children: [
            {
                link: "/about/1",
                label: "About1",
            },
            {
                link: "/about/2",
                label: "About2",
            },
        ]
    },
];