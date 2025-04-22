import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/404";
import SignIn from "./pages/auth/sign-in";
import { Login } from "./pages/app/dashLogin/login";
import { Orders } from "./pages/app/orders/orders";
import {ViewTbPay} from "./pages/app/ViewPay/viewPay";


export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { path: "/", element: <Login/> },
            { path: "/pedidos", element: <Orders /> },
            { path: "/list-orderspay", element: <ViewTbPay/>}
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