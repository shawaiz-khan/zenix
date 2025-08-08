import { Button, Input } from "@/components";
import { useLogin, useTheme } from "@/hooks";

const Login: React.FC = () => {
    const { theme } = useTheme();
    const { email, password, setEmail, setPassword, handleLogin, isLoading } = useLogin();

    return (
        <main className={`min-h-[90vh] ${theme === "dark" ? "bg-bg-dark-secondary" : "bg-bg-light"} flex justify-center items-center px-8`}>
            <div className={`w-full max-w-sm md:w-[30rem] ${theme === "dark" ? "text-secondary" : "text-primary"} flex flex-col gap-8`}>
                <div className="text-center flex flex-col gap-2">
                    <h1 className="font-semibold text-3xl">Login to Zenix</h1>
                    <p className="text-sm">Don’t have an account? <span className="underline cursor-pointer">Register</span></p>
                </div>
                <form
                    onSubmit={handleLogin}
                    className="flex flex-col gap-6"
                >
                    <Input
                        label="Email"
                        inputType="email"
                        name="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Password"
                        inputType="password"
                        name="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        label={isLoading ? "Logging in..." : "Login"}
                        isDisabled={isLoading}
                        customClasses="w-full"
                    />
                </form>
            </div>
        </main>
    );
};

export default Login;