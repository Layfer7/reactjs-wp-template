import React from "react";
import { createBrowserRouter } from "react-router-dom"
import { lazy } from "react";

import App from "./com/App";
const Main = lazy(() => import("./com/Main"));

const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Main/>    
        }
    ]
}]);

export default router;