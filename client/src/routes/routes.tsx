
import type { RouteObject } from "react-router-dom";
import { ContactLayout, RootLayout } from "@/layouts";
import { Developer, ErrorPage, Landing, Login, Register, Support,Event } from "@/pages";
import { Navigate } from "react-router-dom";

const authRoutes: RouteObject[] = [
    {
        path: "/auth",
        element: <RootLayout />, // can be changed later
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
        ]
    }
]

const contactRoutes: RouteObject[] = [
    {
        path: "/contact",
        element: <ContactLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="support" replace />
            },
            {
                path: "support",
                element: <Support />
            },
            {
                path: "developer",
                element: <Developer />
            },
        ]
    }
]

const eventRoutes:RouteObject[] = [
    {
        path:"events",
        element:<RootLayout />,
        children:[
            { index: true, element: <Event /> },
        ]
    }
]

const routes: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "*",
                element: <ErrorPage />,
            },
            {
                path: "/",
                element: <Landing />,
            },
        ],
    },
    ...authRoutes,
    ...contactRoutes,
    ...eventRoutes
]

export default routes;
