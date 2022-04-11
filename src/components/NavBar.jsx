import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from "../assets/dog.png";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/NavBar.css';

function NavBar() {

  const [openLinks, setOpenLinks] = useState(false)
  const toggleNavBar = () => {
    setOpenLinks(!openLinks);
  }
  
  return (
    <div className = "navbar">
      <div className = "leftSide" id = {openLinks ? "open" : "close"}>
        <img src = {Logo} />
        <div className = "hiddenLinks">
          <Link to = "/"> Home </Link>
          <Link to = "/about"> About </Link>
          <Link to = "/doglist"> Dog List </Link>
          <Link to = "/contact"> Contact </Link>
          <Link to = "/workerlogin"> Worker Login </Link>
          <Link to = "/workerregis"> Worker Register </Link>
        </div>
      </div>
      <div className = "rightSide">
        <Link to = "/"> Home </Link>
        <Link to = "/about"> About </Link>
        <Link to = "/doglist"> Dog List </Link>
        <Link to = "/contact"> Contact </Link>
        <Link to = "/workerlogin"> Worker Login </Link>
        <Link to = "/workerregis"> Worker Register </Link>
        <button onClick = {toggleNavBar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
    )
}

export default NavBar