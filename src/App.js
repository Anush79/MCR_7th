
import { useState } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Countries from "./pages/Countries";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className="App bg-slate-900 text-white flex flex-col justify-between h-screen items-center">
      <main>
         <h1 className="text-3xl font-bold ">
      Welcome to Trip Advisor
    </h1>
    <h3>Top continents for your next holiday</h3>
    <Routes>
      <Route path="/" element={  <Landing/>}></Route>
      <Route path="/:continent" element={  <Countries/>}></Route>
      <Route path="/:continent/:country" element={  <Landing/>}></Route>
    </Routes>
      </main>
   
  <footer>Made by Anushka</footer>
    </div>
  );
}


export default App;
