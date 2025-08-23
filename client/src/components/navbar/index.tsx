import {
    NavigationMenu as ShadCnNavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/lib";
import { logo_dark, logo_light, navLinks } from "./data";
import { Button, ListItem, Sheet, ThemeToggle, UserMenu } from "@/components";
import { Menu } from "lucide-react";
import { useTheme, useUser } from "@/hooks";
import { useNavigate } from "react-router-dom";

const UserNavbar = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const { user } = useUser();

    return (
        <header className={`w-full border-b ${theme === "dark" ? "bg-bg-dark border-bg-dark-secondary" : "bg-white"} shadow sticky top-0 z-50`}>
            <div className="mx-auto flex items-center justify-between px-6 py-4">
                <img
                    src={theme === "light" ? logo_dark : logo_light}
                    alt="Zenix"
                    className="w-full max-w-24 transition-all duration-300 ease-in"
                />

                <ShadCnNavigationMenu viewport={false} className="hidden md:block">
                    <NavigationMenuList className="flex gap-4">
                        {navLinks.map((item) => (
                            <NavigationMenuItem key={item.label}>
                                {item.children ? (
                                    <>
                                        <NavigationMenuTrigger className={navigationMenuTriggerStyle({ theme })}>
                                            {item.label}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent theme={theme}>
                                            <ul className="grid w-48 gap-2">
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
                                        className={navigationMenuTriggerStyle({ theme })}
                                    >
                                        <a href={item.link}>{item.label}</a>
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </ShadCnNavigationMenu>

                <div className="flex items-center gap-3">
                    <Sheet
                        triggerIcon={<Menu />}
                        theme={theme}
                        sheetHeader={{
                            headerImg: theme === "light" ? logo_dark : logo_light,
                            headerTitle: "Explore Zenix",
                            showHeaderTitle: false,
                            headerDescription: "Plan events, manage guests, and send updates.",
                        }}
                        sheetFooter={{
                            buttonLabel: "Get Started",
                            onClick: () => navigate("/auth/register")
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
                        {user?.username ? (
                            <UserMenu user={user} />
                        ) : (
                            <Button
                                label="Get Started"
                                customClasses="hidden md:block"
                                onClick={() => navigate("/auth/register")}
                            />
                        )}
                    </div>
                </div>

            </div>
        </header>
    );
};

export default UserNavbar;