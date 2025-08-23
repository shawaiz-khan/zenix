import type { InputHTMLAttributes } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IInput extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    button?: {
        buttonLabel: string;
        buttonVariant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
        buttonOnclick?: (value?: any) => void;
    };
    inputType?: string;
    customClasses?: string;
}