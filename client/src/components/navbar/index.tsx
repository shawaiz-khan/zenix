import {
    NavigationMenu as ShadcnNavigationMenu,
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
            <ShadcnNavigationMenu>
                <NavigationMenuList>
                    {navLinks.map((item) => (
                        <NavigationMenuItem key={item.label}>
                            {item.children ? (
                                <>
                                    <NavigationMenuTrigger>
                                        {item.label}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        {item.children.map((child) => (
                                            <ListItem
                                                key={child.label}
                                                title={child.label}
                                                href={child.link}
                                                className="grid w-[200px] gap-4"
                                            />
                                        ))}
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
            </ShadcnNavigationMenu>
        </div>
    );
};

export default Navbar;