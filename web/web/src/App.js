import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Connections from "./pages/ConnectionsPage.js";
import Connections03152024 from "./pages/inputs/03-15-2024/ConnectionsPage.js";
import Connections03162024 from "./pages/inputs/03-16-2024/ConnectionsPage.js";
import Navbar from "./pages/components/NavBar.js";

function App() {
  return (
    <div className="app bg-gray-800 text-white">
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Connections />} />
          <Route path="/03-15-2024" element={<Connections03152024 />} />
          <Route path="/03-16-2024" element={<Connections03162024 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
