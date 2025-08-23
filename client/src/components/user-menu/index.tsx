import { useTheme } from "@/hooks";
import type { UserMenuProps } from "./types";

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
    const { theme } = useTheme();

    return (
        <div className={`${theme === "dark" ? "bg-bg-dark-secondary text-bg-light" : "bg-bg-light"} rounded-full w-10 h-10 flex justify-center items-center font-semibold shadow cursor-pointer`}>
            {user.username.slice(0, 2).toUpperCase()}
        </div>
    );
};

export default UserMenu;