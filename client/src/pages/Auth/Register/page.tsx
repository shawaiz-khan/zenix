import { Fragment } from "react";
import { login_bar_items, onboarding } from "./data";
import { Button } from "@/components";
import { useRegister } from "@/hooks";

const Register: React.FC = () => {
    const {
        activeStep,
        setActiveStep,
        theme,
        handleOnChange,
        onboardingForm,
        handleSubmit,
        preventFormReload
    } = useRegister();

    return (
        <main className={`min-h-[90vh] ${theme === "dark" ? "bg-bg-dark" : "bg-white"} flex justify-center items-center max-w-96 md:max-w-full`}>
            <div className={`${theme === "dark" ? "text-secondary" : "text-primary"} p-5 flex flex-col gap-8`}>
                <div className="text-center flex flex-col gap-2">
                    <h1 className="font-semibold text-3xl">Register at Zenix</h1>
                    <p className="text-sm">Already have an account? <span className="underline cursor-pointer">Login</span></p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center text-primary">
                    <div className="flex justify-evenly items-center w-full">
                        {login_bar_items.map((step, index) => (
                            <div className="flex flex-1 flex-col gap-3 relative items-center" key={step}>
                                <span
                                    key={step}
                                    className={`text-sm border border-accent-brand ${activeStep === index + 1 ? "bg-accent-brand" : (theme === "dark" ? "bg-bg-dark-secondary text-secondary" : "bg-white")} rounded-full w-6 h-6 flex justify-center items-center font-semibold z-10`}
                                >
                                    {index + 1}
                                </span>

                                <p className={`text-xs text-center max-w-32 ${theme === "dark" ? "text-secondary/65" : "text-muted-foreground"}`}>{step}</p>

                                {index < login_bar_items.length - 1 && (
                                    <span className="absolute top-3 border border-accent-brand -right-1/2 h-0.5 w-full"></span>
                                )}
                            </div>
                        ))}
                    </div >
                </div>
                <form className="flex flex-col gap-4" onSubmit={preventFormReload}>
                    {onboarding.map((onboardingStep) => (
                        <Fragment key={onboardingStep.step}>
                            {onboardingStep.step === activeStep && (
                                <onboardingStep.component
                                    onChange={handleOnChange}
                                    value={onboardingForm[onboardingStep.field as keyof typeof onboardingForm]}
                                />
                            )}
                        </Fragment>
                    ))}
                    <div className={`grid ${activeStep === onboarding.length ? "grid-rows-1" : "grid-cols-1"} gap-3`}>
                        <div className="grid grid-cols-2 gap-2">
                            <Button
                                onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                                label="Back"
                                isDisabled={activeStep <= 1}
                                variant="destructive"
                                customClasses="flex-grow"
                            />
                            <Button
                                onClick={activeStep === onboarding.length ? handleSubmit : () => setActiveStep((prev) => Math.min(onboarding.length, prev + 1))}
                                label={activeStep === onboarding.length ? "Submit" : "Next Step"}
                                isDisabled={activeStep >= onboarding.length && activeStep !== onboarding.length}
                                customClasses="flex-grow"
                                variant="default"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </main >
    )
}

export default Register;