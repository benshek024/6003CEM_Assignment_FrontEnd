import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, message } from 'antd';
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

const dogDesRules = [
    { required: true, message: 'Please input descriptions for dog!' }
];

const dognameRules = [
    { required: true, message: 'Please input the name of dog!', whitespace: true }
]

const dogadoptRules = [
    { required: true, message: 'Please input yes or no!', }
]

const dogidRules = [
    { required: true, message: 'Please input an ID for dog!', }
]

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
  }
      
  static contextType = UserContext;  

  onFinish = (values) => { 
    console.log('Received values of form: ', values);
    let urlPath="https://6003CEMAssignmentBackEnd.benshek024.repl.co/api/v1/dogs";
    urlPath+=`/${values.dogID}`
    console.log("Update Path ", urlPath)
    const {...data} = values;
      console.log("Json  ",JSON.stringify(data))
      fetch(urlPath, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(status)
    .then(json)
    .then(data => {
      console.log(data);
      message.info("Dog Updated!")
    })
    .catch(errorResponse => {
      message.info(`Possible No Record on Dog!`)
	    console.error(errorResponse);
      alert(`Error: ${errorResponse}`);
    });  
  }
  
  render() { 
    if(!this.context.users.loggedIn==true) {
      return(
        <div>
        <h2>Unauthorized Access</h2>
        <p>Staff pls login to update dogs</p> 
        </div>)
      }
    else 
     return (    
        <Form {...formItemLayout} name="updatedog" scrollToFirstError onFinish={this.onFinish}>
        <h1>Update Dog Information</h1>
        <p></p>
        <Form.Item name="dogName" label="Dog Name" rules={dognameRules}>
            <Input />
        </Form.Item>
        
        <Form.Item name="dogBody" label="Dog Description" rules={dogDesRules}>
            <Input />
        </Form.Item>
          
        <Form.Item name="adoptable" label="Adoptable" rules={dogadoptRules} >
            <Input />
        </Form.Item>

        <Form.Item name="dogID" label="Dog ID" rules={dogidRules}>
            <InputNumber min={1} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit"  >
                Update Dog
            </Button>
        </Form.Item>
      </Form>
    );
  };
};

export default UpdateForm;