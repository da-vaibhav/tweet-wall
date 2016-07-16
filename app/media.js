import React, {Component} from 'react';

class Media extends Component {
  render(){
    return( <img className="media-obj" src={this.props.src} alt={this.props.src} /> );
  }
}

export default Media;
