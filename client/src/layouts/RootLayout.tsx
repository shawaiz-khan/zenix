import { NavBar } from "@/components";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default RootLayout;