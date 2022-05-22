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
        <Menu.Item key="3" >About<Link to="/about"></Link></Menu.Item>
        <Menu.Item key="4" onClick={logout} type="primary"  >{users.loggedIn&&<Link to="/">Logout</Link>}</Menu.Item>
        <Menu.Item key="5" onClick={logout} type="primary"  >{users.loggedIn&&<Link to="/img_Page">UploadImage</Link>}</Menu.Item>
          </Menu>
        </>
      
      )}
    </UserContext.Consumer>
    )
}

export default NavBar