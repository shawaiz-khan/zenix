import { NavBar } from "@/components";
import { Outlet } from "react-router-dom";

/**
 *  The `RootLayout` function is a React functional component that renders a navigation bar and an
 *  outlet component.
*/
const RootLayout: React.FC = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default RootLayout;