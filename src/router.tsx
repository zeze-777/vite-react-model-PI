import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/404";
import SignIn from "./pages/auth/sign-in";
import { DashLogin } from "./pages/app/dashLogin/dashLogin";
import { Pedidos } from "./pages/app/pedidos/pedidos";


export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { path: "/", element: <DashLogin /> },
            { path: "/pedidos", element: <Pedidos /> },
        ]
    },
    {
        path: "/",
        children: [
            { path: "/sign-in", element: <SignIn /> },
        ]
    },
    {
        path: " * ",
        element: <NotFound />
    }
])