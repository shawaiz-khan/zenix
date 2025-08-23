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
import type { ISheet } from "./types";

const Sheet: React.FC<ISheet> = ({
    triggerLabel,
    triggerIcon,
    triggerClasses,
    sheetHeader,
    sheetFooter,
    children,
    theme = "light"
}) => {
    return (
        <ShadCnSheet>
            <SheetTrigger asChild>
                <Button
                    icon={triggerIcon}
                    label={triggerLabel}
                    variant="ghost"
                    customClasses={`p-0 cursor-pointer text-secondary hover:bg-transparent md:hidden text-primary shadow-none ${theme === "dark" ? "text-secondary" : "text-primary"} ${triggerClasses}`}
                />
            </SheetTrigger>
            <SheetContent className={`py-4 ${theme === "dark" ? "bg-bg-dark text-secondary border-none" : "bg-bg-light text-primary"}`}>
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
                        <SheetDescription className={theme === "dark" ? "text-secondary" : "text-primary"}>{sheetHeader.headerDescription}</SheetDescription>
                    }
                </SheetHeader>
                {children}
                <SheetFooter>
                    {sheetFooter?.buttonLabel && (
                        <Button
                            label={sheetFooter?.buttonLabel}
                            onClick={sheetFooter?.onClick}
                        />
                    )}
                    <SheetClose asChild>
                        <Button
                            variant="outline"
                            label="Close"
                            customClasses="border-dark-secondary"
                        />
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </ShadCnSheet>
    );
}

export default Sheet;