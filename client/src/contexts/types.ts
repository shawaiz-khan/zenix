import type { ReactNode } from "react";

export interface IThemeContext {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export interface ThemeProviderProps {
    children: ReactNode;
}

export interface IUser {
    username: string;
    email: string;
    role: string;
}

export interface IUserContext {
    user: IUser | null;
    setUser: (value: IUser | null) => void;
}