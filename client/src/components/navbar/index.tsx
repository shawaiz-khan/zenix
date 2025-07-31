import { NavigationMenu as ShadcnNavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuContent } from "@/lib"

const Navbar = () => {
    return (
        <div>
            <ShadcnNavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                        <NavigationMenuContent>Hello</NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <a href="/docs">Documentation</a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </ShadcnNavigationMenu>
        </div>
    )
}

export default Navbar;