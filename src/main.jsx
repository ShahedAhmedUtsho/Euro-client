import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import Home from "./pages/Admin/Home/Home.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import Provider from "./Provider/Provider.jsx";
import Error from "./Components/Error/Error.jsx";
import SendMoney from "./Components/SendMoney/SendMoney.jsx";
import CashIn from "./Components/CashIn/CashIn.jsx";
import CashOut from "./Components/CashOut/CashOut.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Routes />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/sendmoney",
            element: <SendMoney />,
          },
          {
            path: "/cashin",
            element: <CashIn />,
          },
          {
            path: "/cashout",
            element: <CashOut />,
          },
        ],
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>,

  // </React.StrictMode>,
);
