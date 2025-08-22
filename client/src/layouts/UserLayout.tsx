import { Footer, UserNavbar } from "@/components";
import { Outlet } from "react-router-dom";

const UserLayout: React.FC = () => {
    return (
        <>
            <UserNavbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout;