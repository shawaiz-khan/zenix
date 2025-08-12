import { Footer, NavBar } from "@/components";
import { Outlet } from "react-router-dom"

const ContactLayout: React.FC = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default ContactLayout;