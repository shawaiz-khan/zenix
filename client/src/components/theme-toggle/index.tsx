import { useTheme } from "@/hooks";
import { Moon, Sun } from "lucide-react";

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            title="Toggle theme"
            className="cursor-pointer text-accent-brand-dark"
            onClick={() => toggleTheme()}
        >
            {theme === "light" ? <Sun /> : <Moon />}
        </button>
    )
}

export default ThemeToggle;