import React from 'react';
import { Form, Input, Button } from 'antd';
import { status, json } from './RequestHandlers';
import UserContext from '../contexts/user';
import HttpCommon from '../common/http-common';
import { RollbackOutlined } from '@ant-design/icons';
import axios from 'axios'


const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
};
const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
};

const passwordRules = [
    { required: true, message: 'Please input your password!' }
];

const usernameRules = [
    { required: true, message: 'Please input your username!', whitespace: true }
]

class LoginForm extends React.Component {
    constructor(props) {
    super(props);
    this.login = this.login.bind(this);
   
}
      
static contextType = UserContext;  
  
  /*
  login(values) {
    const {usersLoginAcc, usersLoginPwd} = values;
    console.log(`logging in user: ${usersLoginAcc}`)
    console.log("Json  ",JSON.stringify(values))
    fetch('https://6003CEMAssignmentBackEnd.benshek024.repl.co/api/v1/users/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(status)
    .then(json)
    .then(users => {
        console.log('Logged in successfully');
        console.log("just login  ", users);  
        users.usersLoginPwd=usersLoginPwd;
        this.context.login(users);    
    })
    .catch(error => {
        console.log('Login failed');
        console.log(error)
        alert(`Sorry,  ${usersLoginAcc} login failed !`);
    });        
}
*/
  
  login(values) {
    const {usersLoginAcc, usersLoginPwd} = values;
    console.log(`logging in user: ${usersLoginAcc}`)
    console.log("Json  ",JSON.stringify(values))
    console.log('Logged in successfully');
    console.log("just login  ", values);  
    values.usersLoginPwd=usersLoginPwd;
    this.context.login(values);
  }

  render() 
  { if(this.context.users.loggedIn==true) 
   {
    return(<div>
      <h2>Welcome {this.context.users.usersLoginAcc} ! </h2>
     <p> Pls. press green button to continue! </p> 
    </div>)
      
      }
    else 
     return (
        <Form {...formItemLayout} name="login" scrollToFirstError onFinish={this.login}>
            <Form.Item name="usersLoginAcc" label="Username" rules={usernameRules} >
                <Input />
            </Form.Item>
            <Form.Item name="usersLoginPwd" label="Password" rules={passwordRules} hasFeedback >
                <Input.Password />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
           <Button type="primary" htmlType="submit">Login</Button>        
 
           </Form.Item>
        </Form>
        
    );
  };
};

export default LoginForm;