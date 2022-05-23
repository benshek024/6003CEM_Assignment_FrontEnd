import React from 'react';
import { LikeOutlined,LikeFilled,MessageOutlined, MessageFilled,PushpinOutlined,PushpinFilled} from '@ant-design/icons';
import { status, json } from './RequestHandlers';
import UserContext from '../contexts/user';

function getIcon (theme, iconType) {
  let Icon;

  if (theme === 'filled') {
    if (iconType === 'like') {
      Icon = LikeFilled
    } else if (iconType === 'pushpin') {
      Icon = PushpinFilled
    } else if (iconType === 'message') {
      Icon = MessageFilled
    }
  } else if (theme === 'outlined') {
    if (iconType === 'like') {
      Icon = LikeOutlined
    } else if (iconType === 'pushpin') {
      Icon = PushpinOutlined
    } else if (iconType === 'message') {
      Icon = MessageOutlined
    }      
  }
 
  return Icon;
}

class PostIcon extends React.Component {
  constructor(props){  
    super(props);  
    this.state = {
      selected: props.selected,
      count:0,
      countLink:this.props.countLink
    };
  this.onClick = this.onClick.bind(this);
  }
  
  static contextType = UserContext;
  
  componentDidMount() { 
  if(this.props.type=='like'){
  fetch(this.props.countLink)
  .then(status)
  .then(json)
  .then(count => {
      console.log('this.coutLink ', this.props.countLink);
    this.setState({count:count})
  })
  .catch(err => {
   
    console.log(`${this.props.type} icon error for post ${this.props.type} `)
  });
 }
}
 

postLike() 
{
if(this.props.type=='like'&&this.context.user.username!="undefined"){ 
console.log(`logging in user: ${this.context.user.username} password: ${this.context.user.password}`)
  // Omitted
  /*
   return (fetch(this.props.countLink, {
        method: "POST",
        headers: {
            "Authorization": "Basic " + btoa(`${this.context.user.username}:${this.context.user.password}`)
        }        
    }).then(status)
      .then(json)
      .then(alert("Post liked"))
      .catch(err => {
      console.log(`${this.props.type} Check network problems pls. ${this.props.id}`);
         alert("Check network problems");
  })
 )
  */
}
};

  onClick(){
    //reverse the selected state with every click
    this.setState({selected: !this.state.selected});
    if((this.context.user.loggedIn==false)&&(this.props.type=='like'))
     alert("Pls. login before clicking 'like'")
    else this.postLike();     
}
  
  render(){
    const theme = this.state.selected ? 'filled' : 'outlined'; 
    const iconType = this.props.type;
    const Icon = getIcon(theme, iconType);
    
    return (
      <span>        
        <Icon
          onClick={this.onClick}
          style={{color:'steelblue'}}  />
          {this.state.count}
      </span>
    );
  }
}
export default PostIcon;
  