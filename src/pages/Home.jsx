import React from 'react';
import {Link} from 'react-router-dom';
import bgImage from "../assets/dogbg.jpg"
import Grid from "../components/Grid"
import Search from "../components/Search"
import '../App.css';

function Home() {
  return (
    <> 
    <h2 style={{ color: 'green' }}> Welcome to The Canine Shelter</h2>     
      <Search />
    </>
  )
}

export default Home