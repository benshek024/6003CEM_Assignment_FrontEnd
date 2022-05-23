import React from 'react';
import { Card } from 'antd';
import PostIcon from './Posticon';
const { Meta } = Card;
import { Link} from 'react-router-dom'; 

class Postcard extends React.Component {

  render() {
        return( 
      <Card
        hoverable={true}
        actions={[
        ]}>
        <Meta dogname={this.props.dogname} description={this.props.dogbody} />
        <p></p>
      </Card>
      
    );
  }
}

export default Postcard; 