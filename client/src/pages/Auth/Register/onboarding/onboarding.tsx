import { Input } from "@/components"
import type { ChangeEvent } from "react"

interface IOnboardingSteps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

export const StepOne: React.FC<IOnboardingSteps> = ({ onChange, value }) => (
    <Input
        name="stepOne"
        value={value ?? ""}
        onChange={onChange}
        placeholder="e.g, zenix@gmail.com"
    />
);

export const StepTwo: React.FC<IOnboardingSteps> = ({ onChange, value }) => (
    <Input
        name="stepTwo"
        value={value ?? ""}
        onChange={onChange}
        placeholder="e.g, awesome123"
    />
);

export const StepThree: React.FC<IOnboardingSteps> = ({ onChange, value }) => (
    <Input
        name="stepThree"
        value={value ?? ""}
        onChange={onChange}
        placeholder="e.g, 123@456"
    />
);