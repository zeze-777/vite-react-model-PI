import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/404";
import SignIn from "./pages/auth/sign-in";
import { Login } from "./pages/app/dashLogin/login";
import { Orders } from "./pages/app/orders/orders";
import { Home } from "./pages/app/orders/home";
import { ViewTbPay } from "./pages/app/ViewPay/viewPay";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,  // Página inicial
    errorElement: <NotFound />,  // Caso a rota não seja encontrada
  },
  {
    path: "/login",  // Caminho para Login
    element: <Login />,
  },
  {
    path: "/pedidos",  // Caminho para Pedidos
    element: <Orders />,
  },
  {
    path: "/list-orderspay",  // Caminho para a página de pagamentos
    element: <ViewTbPay />,
  },
  {
    path: "/sign-in",  // Caminho para a página de registro
    element: <SignIn />,
  },
  {
    path: "*",  // Página de erro para rotas não encontradas
    element: <NotFound />,
  },
]);