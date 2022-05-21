import React from 'react';
import {Link} from 'react-router-dom';
import bgImage from "../assets/dogbg.jpg"
import '../App.css';

function NotFound() {
  return (
    <div style = {{ backgroundImage: `url(${bgImage})`}}>
    </div>
  )
}

export default NotFound