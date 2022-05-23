import React from 'react';
import { Col, Row } from 'antd';
import Postcard from './Postcard';
import { status, json } from './RequestHandlers';

class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    }
  }

  componentDidMount() {
  fetch('https://6003CEMAssignmentBackEnd.benshek024.repl.co/api/v1/dogs')
  .then(status)
  .then(json)
  .then(data => {
    this.setState({ dogs: data })
  })
  .catch(err => console.log("Error fetching articles", err));
}
  
  render() {
  
    if (!this.state.dogs.length) {
      return <h3>Loading dogs...</h3>
    }
    // the next line does the Array.map() operation on the dogs
    // to create an array of React elements to be rendered
    const dogList = this.state.dogs.map(dogs => {
      return (
        <div style={{padding:"10px"}} key={dogs.dogID} >
          <Col span={6}>
            <Postcard {...dogs} />  
          </Col>          
         </div>
      )
    });
    return (
      <Row type="flex" justify="space-around">
        {dogList}
      </Row>
    );
  }
}

export default Grid;