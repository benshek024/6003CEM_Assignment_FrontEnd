import React from 'react';
import './App.css';
import Navbar from "./components/NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import DogList from "./pages/DogList"
import About from "./pages/About"
import Contact from "./pages/Contact"
import WorkerLogin from "./pages/WorkerLogin"
import WorkerRegis from "./pages/WorkerRegis"
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <div className = "App">
       <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/doglist' exact element={<DogList />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/contact' exact element={<Contact />} />
            <Route path='/workerlogin' exact element={<WorkerLogin />} />
            <Route path='/workerregis' exact element={<WorkerRegis />} />
          </Routes>
         <Footer />
       </Router>
      </div>
    </main>
  );
}

export default App;