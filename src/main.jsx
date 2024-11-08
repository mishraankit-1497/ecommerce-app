import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header/header.jsx";
import HomePage from "./page/home-page/home-page.component.jsx";
import ShopPage from "./page/shop-page/shop-page.jsx";
import AuthenticationContainer from "./page/sign-in/authentication-container.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/auth",
        element: <AuthenticationContainer />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
