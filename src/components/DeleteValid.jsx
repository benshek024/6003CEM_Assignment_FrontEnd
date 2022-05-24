import React from 'react';
import { Form, Input, Button, InputNumber, message } from 'antd';
import { status, json } from './RequestHandlers';
import UserContext from '../contexts/user';
import DeleteForm from "./Delete";


class DeleteValid extends React.Component {
  
  static contextType = UserContext;  
  
  render() { 
    if(!this.context.users.loggedIn==true) {
      return(
        <div>
        <h2>Unauthorized Access</h2>
        <p>Staff pls login to upload new dogs</p> 
        </div>)
      }
    else 
      return (
        <DeleteForm />
    );
  };
};

export default DeleteValid;