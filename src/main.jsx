import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header/header.jsx";
import HomePage from "./page/home-page/home-page.component.jsx";
import productCategories from "./page/product-categories.js";
import ShopPage from "./page/shop-page/shop-page.jsx";
import SignIn from "./page/sign-in/sign-in.jsx";
const productsCategory = productCategories.sections;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <HomePage productCategories={productsCategory} />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
