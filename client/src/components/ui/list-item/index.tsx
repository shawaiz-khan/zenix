import { NavigationMenuLink } from "@/lib"

interface IListItem {
    title: string
    description?: string
    href: string
    customClasses?: string
}

const ListItem: React.FC<IListItem> = ({ title, description, href, customClasses }: IListItem) => {
    const shortDescription = description && description?.length > 70 ? description?.slice(0, 70) + "..." : description;

    return (
        <NavigationMenuLink asChild>
            <a href={href} className={customClasses}>
                <h1 className="font-medium">{title}</h1>
                <p className="text-muted-foreground">{shortDescription}</p>
            </a>
        </NavigationMenuLink>
    )
}

export default ListItem;