import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Service from "./pages/Service";
import Insights from "./pages/Insights";
import Home from "./pages/Home";
// Import the Industry component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industries />} />

        {/* Sub-route for each industry */}
        <Route path="/services" element={<Service />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/about" element={<About />} />
        {/* Add other routes here */}
      </Routes>
    </>
  );
}

export default App;
