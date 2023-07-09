
import { useState } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Countries from "./pages/Countries";
import Destinations from './pages/Places'
import Destination from "./pages/Destination";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className="App bg-slate-900 text-white flex flex-col justify-between h-screen items-center">
      <main>
         <h1 className="text-5xl font-bold m-5 ">
      Welcome to Trip Advisor
    </h1>
   
    <Routes>
      <Route path="/" element={  <Landing/>}></Route>
      <Route path="/:continent" element={  <Countries />}></Route>
      <Route path="/:continent/:country/" element={  <Destinations/>}></Route>
      <Route path="/:continent/:country/:destin" element={  <Destination/>}></Route>
    </Routes>
      </main>
   
  <footer>Made by Anushka</footer>
    </div>
  );
}


export default App;
