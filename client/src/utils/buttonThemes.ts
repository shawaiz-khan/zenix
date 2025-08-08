const getVariantThemeClass = (theme: "light" | "dark", variant: string) => {
    if (theme === "dark") {
        switch (variant) {
            case "default":
                return "bg-secondary text-primary hover:text-primary hover:bg-secondary/90";
            case "outline":
                return "bg-transparent text-secondary hover:bg-bg-dark/80 hover:text-secondary";
            case "secondary":
                return "bg-muted text-primary";
            default:
                return "";
        }
    }

    return "";
};

export default getVariantThemeClass;