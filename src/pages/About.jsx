import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/About.css';
import bgImage from "../assets/dogbg.jpg"

function About() {
  return (
    <div className = "about" style = {{ backgroundImage: `url(${bgImage})`}}>
      <div className = "aboutHeader">

      </div>

    </div>
  )
}

export default About