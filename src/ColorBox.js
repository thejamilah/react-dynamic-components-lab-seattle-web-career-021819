import React, { Component } from 'react';

export default class ColorBox extends Component {

  //a traditional if statement from JavaScript will not work in this context
  //Ternary operator will work in this instance, statements must return a value

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity -0.1} /> : null}
      </div>
    )
  }

}
