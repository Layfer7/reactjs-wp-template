import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.js";

import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);