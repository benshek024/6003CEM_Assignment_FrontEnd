import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.css';
import bgImage from "../assets/dogbg.jpg"

function Home() {
  return (
    <div className = "home" style = {{ backgroundImage: `url(${bgImage})`}}>
      <div className = "homeHeader">
        <h1>The Canine Shelter</h1>
        <p>Report dogs in need of help or help them find a permanent home</p>
        <Link to = "/contact">
          <button>CONTACT US</button>
        </Link>
        
      </div>
      Testing 1234
    </div>
  )
}

export default Home