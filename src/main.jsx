import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import Dashboard from "./pages/Dashboard.jsx";
import Packages from "./pages/Packages.jsx";
import Orders from "./pages/Orders.jsx";
import Login from "./pages/Login.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

//apollo
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql";
import { NavigationProgress } from "@mantine/nprogress";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/packages",
        element: <Packages />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <NavigationProgress />

        <RouterProvider router={router} />
      </MantineProvider>
    </ApolloProvider>
  </React.StrictMode>
);
