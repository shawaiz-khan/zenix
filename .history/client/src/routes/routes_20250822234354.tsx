
import type { RouteObject } from "react-router-dom";
import { ContactLayout, RootLayout, UserLayout } from "@/layouts";
import { Developer, ErrorPage, Landing, Login, Profile, Register, Support } from "@/pages";
import { Navigate } from "react-router-dom";

const authRoutes: RouteObject[] = [
    {
        path: "/auth",
        element: <RootLayout />, 
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


const userRoutes: RouteObject[] = [
    {
        path: "/user/:username",
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="profile" replace />
            },
            {
                path: "profile",
                element: <Profile />,
            }
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
    ...userRoutes,
]

export default routes;
