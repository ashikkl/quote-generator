import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-bg-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to ='/'/>}/>
        <Route path="/" element={<Home />} />
        <Route path="bookmarks" element={<Bookmarks />} />
      </Routes>
    </div>
  );
}

export default App;
