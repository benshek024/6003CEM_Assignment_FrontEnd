import React from 'react';
import {Link} from 'react-router-dom';
import bgImage from "../assets/dogbg.jpg"
import http from '../common/http-common.js';
import { Card, Col, Row, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import '../App.css';

function DogsForAdopt() {
  const [loading, setLoading] = React.useState(true);
  const [dogs, setDogs] = React.useState(null)
  React.useEffect(()=> {
    http.get('/dogs')
    .then((response)=>{      
      setDogs(response.data)
    }).then(()=>{setLoading(false)})
  }, [])

  if(loading) {
    const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;
    return (<Spin indicator={antIcon} />)
  } else {
    if(!dogs){
      return (
        <div>There is no dog available now.</div>
      )
    } else { 
      return (
        <Row justify="space-around">    
        { 
          dogs && 
            dogs.map(({dogID, dogName, dogBody, adoptable})=> (
              <Col span={8} key={dogID}>
                <Card  title={dogName} style={{ width: 300 }} bordered={true}>       
                  <p>{dogBody}</p>  
                  <p>Adoptable? [ {adoptable} ]</p>
                </Card>
              </Col>))
        }
        </Row>);
    }
  }
}
export default DogsForAdopt;