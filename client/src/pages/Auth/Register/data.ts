import { StepOne, StepThree, StepTwo } from "./onboarding";

export const login_bar_items: string[] = [
    "Enter your email address",
    "Select a unique username",
    "Create your password"
];

interface IOnboarding {
    step: number;
    component: React.FC;
}

export const onboarding: IOnboarding[] = [
    {
        step: 1,
        component: StepOne
    },
    {
        step: 2,
        component: StepTwo
    },
    {
        step: 3,
        component: StepThree
    },
]