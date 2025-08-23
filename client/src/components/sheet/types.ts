import type { ReactNode } from "react";

export interface ISheet {
    triggerLabel?: string;
    triggerIcon?: ReactNode;
    triggerClasses?: string;
    sheetHeader: {
        headerTitle: string;
        showHeaderTitle: boolean;
        headerDescription?: string;
        headerImg?: string;
        headerImgClasses?: string;
    };
    children: ReactNode;
    sheetFooter?: {
        buttonLabel?: string;
        onClick?: () => void;
    }
    theme?: "light" | "dark";
}