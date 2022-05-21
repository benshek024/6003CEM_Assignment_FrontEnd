import React from 'react';
import { Form, Input, Button } from 'antd';
import { status, json } from './RequestHandlers';
import UserContext from '../contexts/user';

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
};

const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
};

const emailRules = [
    {type: 'email', message: 'The input is not valid E-mail!'},
    {required: true, message: 'Please input your E-mail!' }
];

const passwordRules = [
    { required: true, message: 'Please input your password!' }
];

const uidRules = [
  {type: 'number'},
  {required: true}
]

const confirmRules = [
    { required: true, message: 'Please confirm your password!' },
    ({ getFieldValue }) => ({
        validator(rule, value) {
            if (!value || getFieldValue('usersLoginPwd') === value) {
                return Promise.resolve();
            }
            return Promise.reject('The passwords that you entered do not match!');
        }
    })
];

const telnumRules = [
  { type: 'text', pattern: "[0-9]{8}", message: 'The input is not valid phone number!'},
  { required: true, message: 'Please enter your phone number!' }
];

const usernameRules = [
    { required: true, message: 'Please input your name!', whitespace: true }
]

const useraccRules = [
    { required: true, message: 'Please input your username!', whitespace: true }
]

class RegisterForm extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected   
    };
   this.onFinish = this.onFinish.bind(this);
    
   }

  static contextType = UserContext;  
  
  onFinish = (values) => { 
  console.log('Received values of form: ', values);
  const {confirm,...data} = values;  // ignore the 'confirm' value
    console.log("Json  ",JSON.stringify(data))
    fetch('https://6003CEMAssignmentBackEnd.benshek024.repl.co/api/v1/users', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }        
    })
    .then(status)
    .then(json)
    .then(data => {
        console.log(data);  
          this.context.regComplete();
    })
    .catch(errorResponse => {
	 console.error(errorResponse);
        alert(`Error: ${errorResponse}`);
    });  
  }

render() {
 if(this.context.users.registerOK==true) 
   {
     return(<div>
      <h2> Registration Completed ! </h2>
     <p> Pls. press login or green button to continue! </p> 
    </div>)
      }
 else
 {
    return (
      <Form {...formItemLayout} name="register" scrollToFirstError onFinish={this.onFinish}>
        
        <Form.Item name="usersName" label="Name" rules={usernameRules}>
            <Input />
        </Form.Item>
        
        <Form.Item name="usersLoginAcc" label="User Account" rules={useraccRules}>
            <Input />
        </Form.Item>
        
        <Form.Item name="usersLoginPwd" label="Password" rules={passwordRules} hasFeedback >
            <Input.Password />
        </Form.Item>

        <Form.Item name="confirm" label="Confirm Password" rules={confirmRules} >
            <Input.Password />
        </Form.Item>

        <Form.Item name="usersEmail" label="E-mail" rules={emailRules} >
            <Input />
        </Form.Item>

        <Form.Item name="usersTelNum" label="Tel Number">
            <Input />
        </Form.Item>
        
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit"  >
                Register
            </Button>
        </Form.Item>
      </Form>
    );
    }
  };
}

export default RegisterForm;