import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "../assets/dog.png";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className = "navbar">
      <div className = "leftSide">
        <img src={Logo} />
      </div>
      <div className = "rightSide">
        <Link to = "/"> Home </Link>
        <Link to = "/about"> About </Link>
        <Link to = "/doglist"> Dog List </Link>
        <Link to = "/contact"> Contact </Link>
        <Link to = "/workerlogin"> Worker Login </Link>
        <Link to = "/workerregister"> Worker Register </Link>
        <button>
          <ReorderIcon />
        </button>
      </div>
    </div>
    )
}

export default NavBar