import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <BottomNav />
    </HashRouter>
  );
}

export default App;
