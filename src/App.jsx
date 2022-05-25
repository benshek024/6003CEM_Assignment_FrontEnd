import React from 'react';
import {Layout, Space} from 'antd';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import DogsForAdopt from "./pages/DogsForAdopt"
import About from "./pages/About"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import NotFound from './pages/NotFound'
import UserContext from './contexts/user';
import {useNavigate } from 'react-router-dom';
import NavBar from "./components/NavBar";
import UploadDog from "./pages/UploadDog";
import DeleteDog from "./pages/DeleteDog";
import UpdateDog from "./pages/UpdateDog";
const { Header, Content, Footer } = Layout;

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    users: {loggedIn: false, usersLoginPwd: "", registerOK: false, usersID: ''}
  }
  
  this.login = this.login.bind(this);
  this.logout = this.logout.bind(this);
  this.regComplete = this.regComplete.bind(this);
}
   

login(users) {

  console.log("i m setting context")
  users.loggedIn = true;
  users.usersLoginPwd=users.usersLoginPwd; 
  this.setState({users:users});
  console.log("User is now being set on the context ", this.state.users);
  
}

logout() {
  console.log("Removing user from the app context");
  this.setState({users: {loggedIn:false}});
}   
  
regComplete() {
  console.log("Registration completed");
  this.setState({users: {registerOK:true}});
}   
  
  render(){
  const context = {
  users: this.state.users,
  login: this.login,
  logout: this.logout,
  regComplete:this.regComplete}; 
  
    
  return(
   
    <Layout className="layout">
    <UserContext.Provider value= {context}>  	
     <Router>
				<Header> 
        <NavBar/>
        </Header> 
	      <Content style={{ padding: '0 50px', height: '90%' }}>
        <Space>
        <Link to="/">Home</Link>
        <Link to="/dogs4adopt">Dogs for Adopt</Link>
        {!context.users.loggedIn&& <Link to="/login">Login</Link>}
        {!context.users.registerOK&&!context.users.loggedIn&&<Link to="/register">Register</Link>}			      
        </Space>

				<Routes>
					<Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Registration />} />
          <Route path="/dogs4adopt" element={<DogsForAdopt />} />
          <Route path="/login" element={<Login />} />
					<Route path="/about" element={<About />} />	
          <Route path="/uploaddog" element={<UploadDog />} />
          <Route path="/deletedog" element={<DeleteDog />} />
          <Route path="/updatedog" element={<UpdateDog />} />
				</Routes>			
				</Content>
        <Footer>
				  <p style={{ color: 'green' }}>VT6003CEM Assignment</p>
			  </Footer>
			</Router>	
  </UserContext.Provider>  
  </Layout> 
  );
 }
}

export default App;