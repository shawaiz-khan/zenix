const getVariantThemeClass = (theme: "light" | "dark", variant: string) => {
    if (theme === "dark") {
        switch (variant) {
            case "default":
                return "bg-secondary text-primary hover:text-secondary";
            case "outline":
                return "border border-primary";
            case "secondary":
                return "bg-muted text-primary";
            case "destructive":
                return "bg-red-600 text-white hover:bg-red-700";
            case "ghost":
                return "bg-transparent text-muted-foreground hover:bg-muted";
            case "link":
                return "text-blue-500 underline hover:text-blue-600";
            default:
                return "";
        }
    }

    return "";
};

export default getVariantThemeClass;