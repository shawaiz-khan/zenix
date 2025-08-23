import { StepOne, StepThree, StepTwo } from "./onboarding";
import type { IOnboarding } from "./types";

export const login_bar_items: string[] = [
    "Enter your email address",
    "Select a unique username",
    "Create your own password"
];

export const onboarding: IOnboarding[] = [
    { step: 1, component: StepOne, field: 'stepOne' },
    { step: 2, component: StepTwo, field: 'stepTwo' },
    { step: 3, component: StepThree, field: 'stepThree' },
];