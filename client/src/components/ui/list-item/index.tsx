import { useTheme } from "@/hooks"
import { NavigationMenuLink } from "@/lib"
import type { IListItem } from "./types";

const ListItem: React.FC<IListItem> = ({
    title,
    description,
    href,
    customClasses = "",
}) => {
    const shortDescription = description && description?.length > 70 ? description?.slice(0, 70) + "..." : description;
    const { theme } = useTheme();

    return (
        <NavigationMenuLink asChild>
            <a href={href} className={`${customClasses} ${theme === "dark" ? "hover:bg-bg-dark-hover hover:text-secondary" : ""}`}>
                <h1 className="font-medium">{title}</h1>
                {description && <p className="text-muted-foreground">{shortDescription}</p>}
            </a>
        </NavigationMenuLink>
    )
}

export default ListItem;