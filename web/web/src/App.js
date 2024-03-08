import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Connections from "./pages/ConnectionsPage.js";
import Navbar from "./pages/components/NavBar.js";

function App() {
  return (
    <div className="app bg-gray-800 text-white">
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Connections />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
