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
import { Button, ListItem, Sheet, ThemeToggle } from "@/components";
import { Menu } from "lucide-react";

const Navbar = () => {
    return (
        <header className="w-full bg-white shadow">
            <div className="mx-auto flex items-center justify-between px-6 py-4">
                <img
                    src={logo_dark}
                    alt="Zenix"
                    className="w-full max-w-24"
                />

                <ShadCnNavigationMenu viewport={false} className="hidden md:block">
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

                <Sheet
                    triggerIcon={<Menu />}
                    sheetHeader={{
                        headerImg: logo_dark,
                        headerTitle: "Explore Zenix",
                        showHeaderTitle: false,
                        headerDescription: "Plan events, manage guests, and send updates.",
                    }}
                    sheetFooter={{
                        buttonLabel: "Get Started"
                    }}
                >
                    <div className="flex flex-col gap-2 p-2">
                        {navLinks.map((item) => (
                            <div key={item.label} className="flex flex-col gap-2">
                                <a
                                    href={item.link}
                                    className="text-base font-medium hover:bg-muted py-2 px-4 rounded-md"
                                >
                                    {item.label}
                                </a>

                                {item.children && (
                                    <div className="flex flex-col gap-2">
                                        {item.children.map((child) => (
                                            <a
                                                key={child.label}
                                                href={child.link}
                                                className="text-base font-medium hover:bg-muted py-2 px-4 rounded-md"
                                            >
                                                {child.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </Sheet>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <Button
                        label="Get Started"
                        customClasses="hidden md:block"
                    />
                </div>

            </div>
        </header>
    );
};

export default Navbar;