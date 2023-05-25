import React from "react";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )

}

export default App;
