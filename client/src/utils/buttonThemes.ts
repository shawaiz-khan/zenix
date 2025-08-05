const getVariantThemeClass = (theme: "light" | "dark", variant: string) => {
    if (theme === "dark") {
        switch (variant) {
            case "default":
                return "bg-secondary text-primary hover:text-primary hover:bg-secondary/90";
            case "outline":
                return "bg-transparent text-secondary hover:bg-bg-dark/80 hover:text-secondary";
            case "secondary":
                return "bg-muted text-primary";
            case "destructive":
                return "bg-red-600 text-white hover:bg-red-700";
            case "ghost":
                return "bg-transparent hover:bg-transparent text-secondary hover:text-secondary";
            case "link":
                return "text-blue-500 underline hover:text-blue-600";
            default:
                return "";
        }
    }

    return "";
};

export default getVariantThemeClass;