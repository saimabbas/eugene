import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page";
import Trip from "./Trip";
import TripInner from "./TripInner";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/tripinner" element={<TripInner />} />
      </Routes>
    </>
  );
}

export default App;
