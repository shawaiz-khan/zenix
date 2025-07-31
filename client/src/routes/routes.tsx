import type { RouteObject } from "react-router-dom";
import { RootLayout } from "@/layouts";
import { ErrorPage, Landing } from "@/pages";

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
    }
]

export default routes;