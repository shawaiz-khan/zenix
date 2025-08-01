import { Button as ShadCnButton } from "@/lib";
import type { ReactNode } from "react";
import React from "react";

interface IButton {
    label?: string;
    variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
    icon?: ReactNode;
    iconDirection?: "right" | "left";
    isDisabled?: boolean;
    customClasses?: string;
}

const Button = React.forwardRef<HTMLButtonElement, IButton>(
    (
        {
            label,
            variant = "default",
            icon,
            iconDirection = "right",
            isDisabled = false,
            customClasses = "",
            ...props
        },
        ref
    ) => {
        return (
            <ShadCnButton
                ref={ref}
                variant={variant}
                disabled={isDisabled}
                className={`relative cursor-pointer overflow-hidden transition-colors duration-300 ease-in ${customClasses}`}
                {...props}
            >
                <span className="relative z-10 flex items-center gap-2">
                    {iconDirection === "left" ? (
                        <>
                            {icon && icon}
                            {label}
                        </>
                    ) : (
                        <>
                            {label}
                            {icon && icon}
                        </>
                    )}
                </span>
            </ShadCnButton>
        );
    }
);

Button.displayName = "Button";
export default Button;