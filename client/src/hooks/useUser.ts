import { UserContext } from "@/contexts";
import { useContext } from "react";

const useUser = () => {
    const context = useContext(UserContext);

    if (!context) throw new Error("useTheme must be used within a UserProvider");

    return context;
};

export default useUser;