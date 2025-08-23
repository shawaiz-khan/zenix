import { notify } from "@/utils";
import { createContext, useState} from "react";
import type { IThemeContext, ThemeProviderProps } from "./types";

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", nextTheme);
        setTheme(nextTheme);
        notify(`Theme changed to ${nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1)}`);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };