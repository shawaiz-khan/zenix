import { useState } from "react";

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

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log("Logging in with:", { email, password });
            await new Promise((resolve) => setTimeout(resolve, 1000));
        } catch (err) {
            console.error("Login failed:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        email,
        password,
        setEmail,
        setPassword,
        handleLogin,
        isLoading,
    };
};

export default useLogin;