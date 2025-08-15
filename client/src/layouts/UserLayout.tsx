import { Footer, NavBar } from "@/components";
import { Outlet } from "react-router-dom";

const UserLayout: React.FC = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout;