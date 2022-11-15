import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Welcome from "./components/Welcome";
import Dummy from "./components/Dummy";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Welcome />
      </BrowserRouter>
    </>
  );
}

export default App;
