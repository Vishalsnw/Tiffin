import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<div>Router Working</div>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
