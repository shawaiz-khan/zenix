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
        link: "/about",
        label: "About",
        children: [
            {
                link: "/about/1",
                label: "About1",
                description: "About1About1About1About1About1About1A bout1About1About1About1About1About1 About1About1About1About1Abou t1About1About1Ab out1About1 About1About1About1About1About1About1A bout1About1About1About1About1About1 About1About1About1About1Abou t1About1About1Ab out1About1",
            },
            {
                link: "/about/2",
                label: "About2",
            },
        ]
    },
];