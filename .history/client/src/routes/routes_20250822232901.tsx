
import type { RouteObject } from "react-router-dom";
<<<<<<< HEAD
import { ContactLayout, RootLayout } from "@/layouts";
import { Developer, ErrorPage, Landing, Login, Register, Support,Event } from "@/pages";

import { ContactLayout, RootLayout, UserLayout } from "@/layouts";
import { Developer, ErrorPage, Landing, Login, Profile, Register, Support } from "@/pages";
>>>>>>> 8ffaa11f833ee16ed9e09d838fcec1a7fea5610e
import { Navigate } from "react-router-dom";

const authRoutes: RouteObject[] = [
    {
        path: "/auth",
        element: <RootLayout />, // can be changed if required
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

<<<<<<< HEAD
const eventRoutes:RouteObject[] = [
    {
        path:"events",
        element:<RootLayout />,
        children:[
            { index: true, element: <Event /> },
=======
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
>>>>>>> 8ffaa11f833ee16ed9e09d838fcec1a7fea5610e
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
<<<<<<< HEAD
    ...eventRoutes
=======
    ...userRoutes,
>>>>>>> 8ffaa11f833ee16ed9e09d838fcec1a7fea5610e
]

export default routes;
