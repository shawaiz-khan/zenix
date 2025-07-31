import { NavigationMenuLink } from "@/lib"
import type { ReactNode } from "react"

interface IListItem extends React.ComponentPropsWithoutRef<"li"> {
    title: string
    children?: ReactNode
    href: string
}

function ListItem({ title, children, href, ...props }: IListItem) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <a href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    {children && (
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            {children}
                        </p>
                    )}
                </a>
            </NavigationMenuLink>
        </li>
    )
}

export default ListItem