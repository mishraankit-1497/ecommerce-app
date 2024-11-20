import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header/header.jsx";
import HomePage from "./page/home-page/home-page.component.jsx";
import ShopPage from "./page/shop-page/shop-page.jsx";
import AuthenticationContainer from "./page/sign-in/authentication-container.jsx";
import store from "./store.js";
import DataComponentWithLoading from "./components/hoc/hoc.jsx";
import Checkout from "./page/checkout/checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/auth",
        element: <AuthenticationContainer />,
      },
      {
        path: "/true",
        element: <DataComponentWithLoading isLoading={true} data="Some Data" />,
      },
      {
        path: "/false",
        element: (
          <DataComponentWithLoading isLoading={false} data="Some Data" />
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
