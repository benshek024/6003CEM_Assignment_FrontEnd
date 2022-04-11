import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Contact.css';
import bgImage from "../assets/dogbg.jpg"

function Contact() {
  return (
    <div className = "contact" style = {{ backgroundImage: `url(${bgImage})`}}>
      <div className = "contactHeader">

      </div>

    </div>
  )
}

export default Contact