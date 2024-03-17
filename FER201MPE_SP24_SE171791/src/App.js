import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";

import Contact from "./pages/Contact";
// import TopNews from "./pages/TopNews";
import FormAddEdit from "./pages/FormAddEdit";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>

        {/* <Route path="/topnews" element={<TopNews />}></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/add" element={<FormAddEdit />}></Route>
        <Route path="/update/:id" element={<FormAddEdit />}></Route>

      </Routes>

    </BrowserRouter>
  );

}

