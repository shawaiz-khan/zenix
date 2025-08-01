import {
    Sheet as ShadCnSheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/lib";
import { Button } from "../ui";
import type { ReactNode } from "react";

interface ISheet {
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
    }
}

const Sheet: React.FC<ISheet> = ({
    triggerLabel,
    triggerIcon,
    triggerClasses,
    sheetHeader,
    sheetFooter,
    children
}) => {
    return (
        <ShadCnSheet>
            <SheetTrigger asChild>
                <Button
                    icon={triggerIcon}
                    label={triggerLabel}
                    variant="ghost"
                    customClasses={`p-0 cursor-pointer text-secondary hover:bg-transparent md:hidden text-primary shadow-none ${triggerClasses}`}
                />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className={sheetHeader.showHeaderTitle ? "block" : "hidden"}>{sheetHeader.headerTitle}</SheetTitle>
                    {sheetHeader.headerImg &&
                        <img
                            src={sheetHeader.headerImg}
                            alt="Zenix"
                            className={`w-full max-w-20 ${sheetHeader.headerImgClasses}`}
                        />
                    }
                    {sheetHeader.headerDescription &&
                        <SheetDescription>{sheetHeader.headerDescription}</SheetDescription>
                    }
                </SheetHeader>
                {children}
                <SheetFooter>
                    {sheetFooter?.buttonLabel && (
                        <Button
                            label={sheetFooter?.buttonLabel}
                        />
                    )}
                    <SheetClose asChild>
                        <Button
                            variant="outline"
                            label="Close"
                            customClasses="text-primary"
                        />
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </ShadCnSheet>
    );
}

export default Sheet;