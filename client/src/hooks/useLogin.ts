/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance, notify } from "@/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface UseLoginReturn {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    handleLogin: (e: React.FormEvent) => void;
    isLoading: boolean;
}

const useLogin = (): UseLoginReturn => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const validateInputs = (): boolean => {
        return !!(email.trim() && password.trim());
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        if (!validateInputs()) {
            notify("Fill all the fields");
            setIsLoading(false);
            return;
        }

        try {
            const res = await axiosInstance.post("/api/auth/login", { email, password });

            if (!res.data?.success) {
                notify(res.data?.message || "Invalid email or password");
                setIsLoading(false);
                return;
            }

            notify("User login successful");
            navigate("/dashboard")
        } catch (err: any) {
            console.error("Login failed:", err);
            notify(err.response?.data?.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    return { email, password, setEmail, setPassword, handleLogin, isLoading };
};

export default useLogin;