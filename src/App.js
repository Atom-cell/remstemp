import React from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import LandPage from "./components/LandPage";
import MoreFeatures from "./components/MoreFeatures";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <MoreFeatures />
      {/* <LandPage /> */}
      <CssBaseline />
    </>
  );
}

export default App;
