import React, {  useContext, useState } from 'react';
import UserContext from '../contexts/user';
import { PageHeader, Input, message } from 'antd';
import { status, json } from './RequestHandlers';
import {Table, Alert, Select,Col} from 'antd';
import { Tag, Space } from 'antd';

const { Column} = Table;
const { Search } = Input;

function SearchDog(props) {
 
 const [press, setPress] = useState("");
 const [dogsData, setDogs] = useState([]);
 const[isSearchOK,setSearch]=useState(false);
 const authbasic = props.authbasic;

const onSearch = value => {
  console.log("value ",value)
  console.log("press ",`${press}`)
  let urlPath="https://6003CEMAssignmentBackEnd.benshek024.repl.co/api/v1/dogs";

  if (press === "dogName") {
    urlPath+=`/search/dogname/${value}`
  }
  if (press === "adoptable") {
    urlPath+=`/search/adoptable/${value}`
  }
  /*
  if (press==="dogName"||press==="adoptable") 
   urlPath+=`/search/?fields=${press}&q=${value}`
  else
  if(press==="dogName&fields=adoptable"&&value==="")
     urlPath+=`/search/${press}`
 */
  console.log("urlPath ",urlPath)
  return(fetch(`${urlPath}`,{
        method: "GET",
        headers:{"Authorization": "Basic " +`${authbasic}`}
  })
  .then(status)
  .then(json)
  .then(data => { 
   console.log("dog return  ",JSON.stringify(data) );
   console.log("dog data  ",data );
   setDogs(data);
   setSearch(true); 
    value="";
  })
  .catch(err => console.log("Error fetching dogs", err)) 
  ) 
}

const { Option } = Select;

function handleChange(value) {
  message.info("Pls. enter to search by dog name or is adoptable otherwise leave the input empty")
  
  setPress(value);
  console.log(`selected ${value}`);
}

  return (
   <>
     <Col span={16}>   
        <PageHeader title="Search For Dogs "/>       
       <Search placeholder="Search Dogs"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}/>
        <Select defaultValue="all" style={{ width: 300 }} onChange={handleChange}>
        <Option value="all">Get All Dogs</Option>
        <Option value="dogName">Get by Dog Name</Option>
        <Option value="adoptable">Get by Adoptable Dog</Option>
        </Select>
  {isSearchOK&&<Table dataSource={dogsData}>
   <Column title="Dog Name" dataIndex="dogName" key="dogName" />
   <Column title="Dog Details" dataIndex="dogBody" key="dogBody" />
   <Column title="Is Adoptable" dataIndex="adoptable" key="adoptable" />
   <Column title="Dog ID" dataIndex="dogID" key="dogID" /> 
   </Table>}
   </Col>  

    </>  
  );
  }

export default SearchDog;