import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import ErrorPage from "./Pages/errorPage";
import NavigationTest from "./Pages/navigationTest";
import Bebidas from "./Pages/bebidas";
import Bebida, { loader as bebidaLoader } from "./Pages/Bebida";
import Caixas from "./Pages/caixas";

const router = createBrowserRouter([
  //Root
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{}],
  },
  //navigationTest
  {
    path: "/navigationTest",
    element: <NavigationTest />,
  },

  {
    path: "/bebidas",
    element: <Bebidas />,
  },

  {
    path: "bebida/",
    /* element: <Bebida />, */
    children: [
      {
        path: ":bebidaId",
        element: <Bebida />,
        loader: bebidaLoader,
      },
    ],
  },
  {
    path: "/caixas",
    element: <Caixas />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
