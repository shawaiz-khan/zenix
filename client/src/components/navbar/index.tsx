import {
    NavigationMenu as ShadCnNavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/lib";
import { navLinks } from "./data";
import { ListItem } from "../ui";

const Navbar = () => {
    return (
        <div>
            <ShadCnNavigationMenu>
                <NavigationMenuList>
                    {navLinks.map((item) => (
                        <NavigationMenuItem key={item.label}>
                            {item.children ? (
                                <>
                                    <NavigationMenuTrigger>
                                        {item.label}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[300px] gap-4">
                                            <li>
                                                {item.children.map((child) => (
                                                    <ListItem
                                                        key={child.label}
                                                        title={child.label}
                                                        description={child.description}
                                                        href={child.link}
                                                    />
                                                ))}
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </>
                            ) : (
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <a href={item.link}>{item.label}</a>
                                </NavigationMenuLink>
                            )}
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </ShadCnNavigationMenu>
        </div>
    );
};

export default Navbar;