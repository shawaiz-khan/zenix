import {
    NavigationMenu as ShadCnNavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/lib";
import { logo_dark, navLinks } from "./data";
import { Button, ListItem } from "@/components";

const Navbar = () => {
    return (
        <header className="w-full bg-white shadow">
            <div className="mx-auto flex items-center justify-between px-6 py-4">
                <img
                    src={logo_dark}
                    alt="Zenix"
                    className="w-full max-w-24"
                />

                <ShadCnNavigationMenu viewport={false}>
                    <NavigationMenuList className="flex gap-4">
                        {navLinks.map((item) => (
                            <NavigationMenuItem key={item.label}>
                                {item.children ? (
                                    <>
                                        <NavigationMenuTrigger>
                                            {item.label}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-60 gap-2">
                                                {item.children.map((child) => (
                                                    <li key={child.label}>
                                                        <ListItem
                                                            title={child.label}
                                                            description={child.description}
                                                            href={child.link}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <NavigationMenuLink
                                        asChild
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <a href={item.link}>{item.label}</a>
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </ShadCnNavigationMenu>

                <Button label="Get Started" />

            </div>
        </header>
    );
};

export default Navbar;