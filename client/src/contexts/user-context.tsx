import { fetchUser } from "@/utils";
import { createContext, useState, useEffect, type ReactNode } from "react";

interface IUser {
    username: string;
    email: string;
    role: string;
}

interface IUserContext {
    user: IUser | null;
    setUser: (value: IUser | null) => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetchUser();
                setUser(res || null);
            } catch (err) {
                console.log("Error fetching user:", err);
            }
        };

        getUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };