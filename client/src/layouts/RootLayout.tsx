import { Footer, NavBar } from "@/components";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout;