import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ContactLayout, RootLayout } from "@/layouts";
import { Developer, ErrorPage, Events, Landing, Login, Profile, Register, Support } from "@/pages";

const authRoutes: RouteObject[] = [
    {
        path: "/auth",
        element: <RootLayout />, // Optional: use a separate AuthLayout if needed
        children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
        ]
    }
];

const contactRoutes: RouteObject[] = [
    {
        path: "/contact",
        element: <ContactLayout />,
        children: [
            { index: true, element: <Navigate to="support" replace /> },
            { path: "support", element: <Support /> },
            { path: "developer", element: <Developer /> },
        ]
    }
];

const routes: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Landing /> },
            { path: "user/:username", element: <Profile /> },
            { path: "events", element: <Events /> },
            { path: "*", element: <ErrorPage /> },
        ]
    },
    ...authRoutes,
    ...contactRoutes
];

export default routes;