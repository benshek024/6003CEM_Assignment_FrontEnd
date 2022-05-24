import React, {  useContext, useState } from 'react';
import UserContext from '../contexts/user';
import { PageHeader, Input, message } from 'antd';
import { status, json } from './RequestHandlers';
import {Table, Alert, Select,Col} from 'antd';
import { Tag, Space } from 'antd';

const { Column} = Table;
const { Search } = Input;

const dogidRules = [
    { required: true, message: 'Please input an ID for dog!', }
]

function DeleteDog(props){
  const [press, setPress] = useState("");
  const[isDeleteOK, setDelete]=useState(false);
  const authbasic = props.authbasic;
  
const onSearch = value => {
  console.log("value ",value)
  console.log("press ",`${press}`)
 let urlPath="https://6003CEMAssignmentBackEnd.benshek024.repl.co/api/v1/dogs";

  if (press === "delete") {
    urlPath+=`/${value}`
  }
  console.log("urlPath ",urlPath)
  return(fetch(`${urlPath}`,{
        method: "DELETE",
        headers:{"Authorization": "Basic " +`${authbasic}`}
  })
  .then(status)
  .then(json => { 
    setDelete(true);
    value="";
  })
  .catch(err => console.log("Error fetching dogs", err)) 
  ) 
}

const { Option } = Select;

function handleChange(value) {
  message.info("Pls. enter a number to delete by dog's ID, otherwise it will throw an error")
  
  setPress(value);
  console.log(`selected ${value}`);
}
  return (
   <>
     <Col span={16}>   
        <PageHeader title="Delete Dogs Record"/>       
       <Search placeholder="Delete Dogs by Dog ID"
            allowClear
            enterButton="Delete"
            size="large"
            onSearch={onSearch}/>
        <Select defaultValue="" style={{ width: 300 }} onChange={handleChange}>
        <Option value="delete">Delete a Dog</Option>
        </Select>
  {isDeleteOK&& <h1>Dog Deleted</h1>}
   </Col>  

    </>  
  );
  }


export default DeleteDog;