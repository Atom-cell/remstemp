import React from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LandPage from "./components/LandPage";
import MoreFeatures from "./components/MoreFeatures";
import Download from "./components/Download";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/home" element={<LandPage />} />
          <Route path="/features" element={<MoreFeatures />} />
          <Route path="/download" element={<Download />} />
        </Routes>
        <CssBaseline />
      </Router>
    </>
  );
}

export default App;
