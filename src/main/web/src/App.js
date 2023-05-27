import React from "react";
import Dashboard from "./pages/Dashboard";
import Pacientes from "./pages/Pacientes";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import StockControl from "./pages/StockControl";
import InventoryControl from "./pages/InventoryControl";
import ProductControl from "./pages/ProductControl";
import Estoque from "./pages/Estoque";

function App() {
    return (
        <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="pacientes" element={<Pacientes />} />
              <Route path="estoque" element={<Estoque />} />
              <Route path="inventario" element={<InventoryControl />} />
              <Route path="produtos" element={<ProductControl />} />

            </Routes>
        </BrowserRouter>
    )

}

export default App;
