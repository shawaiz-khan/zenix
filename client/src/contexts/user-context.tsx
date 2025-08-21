import { createContext, useState, type ReactNode } from "react";

interface IUser {
    username: string;
    email: string;
    role: string;
}

interface IUserContext {
    user: IUser | null;
    setUser: (value: IUser) => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };