import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../contexts/user';
import {Menu} from 'antd';


function NavBar(props) {

  const logout = useContext(UserContext);
  
  return (
    <UserContext.Consumer>
      {({logout, users}) => (
        <>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" >Home<Link to="/"></Link></Menu.Item>
            <Menu.Item key="2" >Dogs for Adoption<Link to="/dogs4adopt"></Link></Menu.Item>
            <Menu.Item key="3" >{!users.loggedIn&&<Link to="/login">Login</Link>}</Menu.Item>
            <Menu.Item key="4" >{!users.loggedIn&&<Link to="/register">Register</Link>}</Menu.Item>
            <Menu.Item key="5" onClick={logout} type="primary"  >{users.loggedIn&&<Link to="/">Logout</Link>}</Menu.Item>
            <Menu.Item key="6" >{users.loggedIn&&<Link to="/uploaddog">Upload Dog</Link>}</Menu.Item>
            <Menu.Item key="7" >{users.loggedIn&&<Link to="/deletedog">Delete Dog</Link>}</Menu.Item>
            <Menu.Item key="8" >{users.loggedIn&&<Link to="/updatedog">Update Dog</Link>}</Menu.Item>
          </Menu>
        </>
      
      )}
    </UserContext.Consumer>
    )
}

export default NavBar