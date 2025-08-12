import { useState, type ChangeEvent, type FormEvent } from "react";
import useTheme from "./useTheme";
import { axiosInstance, notify } from "@/utils";

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

    const validateInputs = () => {
        const { stepOne, stepTwo, stepThree } = onboardingForm;

        if (!stepOne.trim() || !stepTwo.trim() || !stepThree.trim()) return false;

        return true;
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (!validateInputs()) {
                notify("Fill all the fields")
                return;
            }

            await axiosInstance.post("/api/auth/register", {
                email: onboardingForm.stepOne,
                username: onboardingForm.stepTwo,
                password: onboardingForm.stepThree
            });

            notify("User created successfully")
            resetForm();
        } catch (error: unknown) {
            console.log("Error:", error instanceof Error ? error.message : String(error) || "Error while submitting the form");
        }
    };

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