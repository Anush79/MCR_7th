
import { useState } from "react";
import "./App.css";
import Landing from "./pages/landing";
function App() {

  return (
    <div className="App">
    <h1 className="text-3xl font-bold ">
      Welcome to Trip Advisor
    </h1>
    <h3>Top continents for your next holiday</h3>
    <Landing/>
    </div>
  );
}


export default App;
