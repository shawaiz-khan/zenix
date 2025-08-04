import { notify } from "@/utils";
import { createContext, useState, type ReactNode } from "react";

interface IThemeContext {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

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