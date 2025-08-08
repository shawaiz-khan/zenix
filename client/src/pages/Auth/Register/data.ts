import type { ChangeEvent } from "react";
import { StepOne, StepThree, StepTwo } from "./onboarding";

export const login_bar_items: string[] = [
    "Enter your email address",
    "Select a unique username",
    "Create your own password"
];

interface IOnboarding {
    step: number;
    component: React.FC<{ onChange: (e: ChangeEvent<HTMLInputElement>) => void; value?: string; }>;
    field: string;
}

export const onboarding: IOnboarding[] = [
    { step: 1, component: StepOne, field: 'stepOne' },
    { step: 2, component: StepTwo, field: 'stepTwo' },
    { step: 3, component: StepThree, field: 'stepThree' },
];