import { useState, type ChangeEvent, type FormEvent } from "react";
import useTheme from "./useTheme";

interface IOnboardingForm {
    stepOne: string;
    stepTwo: string;
    stepThree: string;
}

type OnboardingField = keyof IOnboardingForm;

const useRegister = () => {
    const [activeStep, setActiveStep] = useState<number>(1);
    const [onboardingForm, setOnboardingForm] = useState<IOnboardingForm>({
        stepOne: "",
        stepTwo: "",
        stepThree: "",
    });

    const { theme } = useTheme();

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (!["stepOne", "stepTwo", "stepThree"].includes(name)) return;

        setOnboardingForm((prev) => ({
            ...prev,
            [name as OnboardingField]: value,
        }));
    };

    const resetForm = () => {
        setOnboardingForm({
            stepOne: "",
            stepTwo: "",
            stepThree: "",
        });
        setActiveStep(1);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted: ", onboardingForm)
        resetForm();
    }

    const preventFormReload = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return {
        activeStep,
        setActiveStep,
        theme,
        handleOnChange,
        onboardingForm,
        handleSubmit,
        preventFormReload,
    };
};

export default useRegister;