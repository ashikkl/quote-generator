import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-bg-100 min-h-[80vh]">
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to ='/'/>}/>
        <Route path="/" element={<Home />} />
        <Route path="bookmarks" element={<Bookmarks />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
