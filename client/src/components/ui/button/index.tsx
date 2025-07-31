import { Button as ShadCnButton } from "@/lib";
import type { ReactNode } from "react";

interface IButton {
    label: string;
    variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
    icon?: ReactNode;
    isDisabled?: boolean;
    customClasses?: string;
}

const Button: React.FC<IButton> = ({
    label,
    variant = "default",
    icon,
    isDisabled = false,
    customClasses = "",
}) => {
    return (
        <ShadCnButton
            variant={variant}
            disabled={isDisabled}
            className={`relative overflow-hidden text-white border-none before:absolute before:inset-0 before:bg-accent-brand before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 hover:text-bg-dark ${customClasses}`}
        >
            <span className="relative z-10 flex items-center gap-2">
                {label}
                {icon && icon}
            </span>
        </ShadCnButton>
    );
};

export default Button;