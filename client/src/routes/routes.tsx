import type { RouteObject } from "react-router-dom";
import { AuthLayout, RootLayout } from "@/layouts";
import { ErrorPage, Landing, Login, Register } from "@/pages";

const authRoutes: RouteObject[] = [
    {
        path: "/auth",
        element: <AuthLayout />,
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
]

export default routes;