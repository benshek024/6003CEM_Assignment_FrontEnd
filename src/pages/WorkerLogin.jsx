import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/WorkerLogin.css';
import bgImage from "../assets/dogbg.jpg"

function WorkerLogin() {
  return (
    <div className = "workerlogin" style = {{ backgroundImage: `url(${bgImage})`}}>
      <div className = "workerloginHeader">

      </div>

    </div>
  )
}

export default WorkerLogin