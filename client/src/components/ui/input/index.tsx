/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input as ShadCnInput } from "@/lib";
import Button from "../button";

interface IInput {
    label?: string;
    button?: {
        buttonLabel: string;
        buttonVariant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
        buttonOnclick?: (value?: any) => void;
    };
    inputType?: "default" | "file" | "disabled";
    placeholder: string;
    name: string;
    value: string;
    customClasses?: string;
}

const Input: React.FC<IInput> = ({
    label,
    button,
    inputType,
    placeholder,
    name,
    value,
    customClasses = "",
}) => {
    return (
        <div className={`${label ? "grid" : "flex"} w-full max-w-sm items-center gap-3`}>
            {label && <label>{label}</label>}
            <ShadCnInput type={inputType} placeholder={placeholder} name={name} value={value} className={`focus-visible:ring-accent-brand ${customClasses}`} />
            {button && <Button variant={button.buttonVariant} label={button.buttonLabel} onClick={() => button.buttonOnclick} />}
        </div>
    );
}

export default Input;