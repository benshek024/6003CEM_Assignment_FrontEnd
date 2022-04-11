import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/DogList.css';
import bgImage from "../assets/dogbg.jpg"
import 'antd/dist/antd.css'; 
import { Card, Button, DatePicker } from 'antd';

let counter = 0
function onChange(date, dateString) {
 console.log(date, dateString);
}
function onClick(event) {
 console.log(counter++)
}

function DogList() {
  return (
    <div className = "doglist" style = {{ backgroundImage: `url(${bgImage})`}}>
      <div className = "doglistHeader" style = {{textAlign: 'center'}}>
        <h1>Dog List</h1>
      </div>
      <div >
       <Card title="Default card" style={{ width: 300 }}>
         <p>Card content</p>
         <p>Card content</p>
         <p>Card content 123</p>
       </Card>

       <br/>

       <Button type="primary" onClick={onClick}>Button</Button>
       <Button type="danger">Button</Button>

       <br/>
        <DatePicker onChange={onChange} />
     </div>
    </div>
  )
}

export default DogList