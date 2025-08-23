/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
    icon?: ReactNode;
    iconDirection?: "right" | "left";
    isDisabled?: boolean;
    customClasses?: string;
    onClick?: (parameter?: any) => void;
}