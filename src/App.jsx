import React from 'react';
import './App.css';
import Navbar from "./components/NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <main>
      <div className = "App">
        <NavBar />
      </div>
    </main>
  );
}

export default App;