/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input as ShadCnInput } from "@/lib";
import Button from "../button";
import type { InputHTMLAttributes } from "react";

interface IInput extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    button?: {
        buttonLabel: string;
        buttonVariant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
        buttonOnclick?: (value?: any) => void;
    };
    inputType?: string;
    customClasses?: string;
}

const Input: React.FC<IInput> = ({
    label,
    button,
    inputType = "text",
    placeholder,
    name,
    value,
    onChange,
    customClasses = "",
    ...rest
}) => {
    return (
        <div className={`${label ? "grid" : "flex"} w-full max-w-sm items-center gap-3`}>
            {label && <label htmlFor={name}>{label}</label>}
            <ShadCnInput
                type={inputType}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className={`focus-visible:ring-accent-brand ${customClasses}`}
                {...rest}
            />
            {button && (
                <Button
                    variant={button.buttonVariant}
                    label={button.buttonLabel}
                    onClick={() => button.buttonOnclick?.(value)}
                />
            )}
        </div>
    );
};

export default Input;