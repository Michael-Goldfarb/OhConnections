import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Connections03152024 from "./pages/inputs/03-15-2024/ConnectionsPage.js";
import Connections03162024 from "./pages/inputs/03-16-2024/ConnectionsPage.js";
import Connections03172024 from "./pages/inputs/03-17-2024/ConnectionsPage.js";
import Connections03182024 from "./pages/inputs/03-18-2024/ConnectionsPage.js";
import Navbar from "./pages/components/NavBar.js";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#2D3748";
    document.body.style.color = "#FFF";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <div className="app">
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Connections03182024 />} />
          <Route path="/03-15-2024" element={<Connections03152024 />} />
          <Route path="/03-16-2024" element={<Connections03162024 />} />
          <Route path="/03-17-2024" element={<Connections03172024 />} />
          <Route path="/03-18-2024" element={<Connections03182024 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
