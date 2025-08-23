import { Input as ShadCnInput } from "@/lib";
import Button from "../button";
import { useTheme } from "@/hooks";
import type { IInput } from "./types";

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
    const { theme } = useTheme();

    return (
        <div className={`${label ? "grid" : "flex"} w-full max-w-sm items-center gap-2`}>
            {label && <label htmlFor={name}>{label}</label>}
            <ShadCnInput
                type={inputType}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className={`focus-visible:ring-accent-brand ${customClasses} ${theme === "dark" ? "placeholder:text-secondary/65" : ""}`}
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