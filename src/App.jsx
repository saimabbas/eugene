import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page";
import Trip from "./Trip";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip" element={<Trip />} />
      </Routes>
    </>
  );
}

export default App;
