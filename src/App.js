import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Connections03152024 from "./pages/inputs/03-15-2024/ConnectionsPage.js";
import Connections03162024 from "./pages/inputs/03-16-2024/ConnectionsPage.js";
import Connections03172024 from "./pages/inputs/03-17-2024/ConnectionsPage.js";
import Connections03182024 from "./pages/inputs/03-18-2024/ConnectionsPage.js";
import Connections03192024 from "./pages/inputs/03-19-2024/ConnectionsPage.js";
import Connections03202024 from "./pages/inputs/03-20-2024/ConnectionsPage.js";
import Connections03212024 from "./pages/inputs/03-21-2024/ConnectionsPage.js";
import Connections03222024 from "./pages/inputs/03-22-2024/ConnectionsPage.js";
import Connections03232024 from "./pages/inputs/03-23-2024/ConnectionsPage.js";
import Connections03242024 from "./pages/inputs/03-24-2024/ConnectionsPage.js";
import Connections03252024 from "./pages/inputs/03-25-2024/ConnectionsPage.js";
import Connections03262024 from "./pages/inputs/03-26-2024/ConnectionsPage.js";
import Connections03272024 from "./pages/inputs/03-27-2024/ConnectionsPage.js";
import Connections03282024 from "./pages/inputs/03-28-2024/ConnectionsPage.js";
import Connections03292024 from "./pages/inputs/03-29-2024/ConnectionsPage.js";
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
        '04-30', '04-23', '04-16', '04-09', '04-02', '03-26
          <Route path="/" element={<Connections03292024 />} />
          <Route path="/03-19" element={<Connections03152024 />} /> 
          <Route path="/03-26" element={<Connections03162024 />} />
          <Route path="/04-02" element={<Connections03172024 />} />
          <Route path="/04-09" element={<Connections03182024 />} />
          <Route path="/04-16" element={<Connections03192024 />} />
          <Route path="/04-23" element={<Connections03202024 />} />
          <Route path="/04-30" element={<Connections03212024 />} />
          <Route path="/05-07" element={<Connections03222024 />} /> 
          <Route path="/05-14" element={<Connections03232024 />} />
          <Route path="/05-21" element={<Connections03242024 />} />
          <Route path="/05-28" element={<Connections03252024 />} />
          <Route path="/06-04" element={<Connections03262024 />} />
          <Route path="/06-11" element={<Connections03272024 />} />
          <Route path="/06-18" element={<Connections03282024 />} />
          <Route path="/06-25" element={<Connections03292024 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
