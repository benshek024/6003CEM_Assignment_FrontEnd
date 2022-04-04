import React from 'react';
import './App.css';
import Navbar from "./components/NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <div className = "App">
       <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
          </Routes>
       </Router>
      </div>
    </main>
  );
}

export default App;