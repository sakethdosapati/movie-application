import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetMovie from "./Pages/GetMovie";
import ParticularMovie from './Pages/ParticularMovie';
import "./style.css"

const App = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetMovie />} />
        <Route path="/particular" element={<ParticularMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;