import React from "react";
import { Outlet } from "react-router-dom";

export default function App() {
    return(
        <div id="app" className="min-h-screen">
            <Outlet/>
        </div>
    )
}