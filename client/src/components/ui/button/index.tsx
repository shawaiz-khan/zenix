import { useTheme } from "@/hooks";
import { Button as ShadCnButton } from "@/lib";
import { getVariantThemeClass } from "@/utils";
import React from "react";
import type { IButton } from "./types";

const Button = React.forwardRef<HTMLButtonElement, IButton>(
    (
        {
            label,
            variant = "default",
            icon,
            iconDirection = "right",
            isDisabled = false,
            customClasses = "",
            onClick,
            ...props
        },
        ref
    ) => {
        const { theme } = useTheme();
        const variantClass = getVariantThemeClass(theme, variant);

        return (
            <ShadCnButton
                ref={ref}
                variant={variant}
                disabled={isDisabled}
                className={`relative cursor-pointer overflow-hidden ${customClasses} ${variantClass} ${(variant === "outline" && theme === "light") && "bg-transparent hover:bg-white/80"}`}
                onClick={onClick}
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