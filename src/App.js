import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LandPage from "./components/LandPage";
import MoreFeatures from "./components/MoreFeatures";
import Download from "./components/Download";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import UpdateProfile from "./components/UpdateProfile";
import NoMobile from "./components/NoMobile";
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
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<ResetPassword />} />
          <Route path="/update" element={<UpdateProfile />} />
          <Route path="/no" element={<NoMobile />} />
        </Routes>

        <CssBaseline />
      </Router>
    </>
  );
}

export default App;
