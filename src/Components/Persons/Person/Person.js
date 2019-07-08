import React, { Component,Fragment } from "react";
import "./Person.css";
import Aux from '../../../hoc/Auxillary';


class Person extends Component {
  render(){
  console.log('[Person.js] rendering...... ');
  return (
      <Aux>
          <p key="i1"onClick={this.props.click}>
              I'm a {this.props.name} and I am {this.props.age} year old!
          </p>
          <p key="i2">{this.props.children}</p>
          <input 
            key="i3"
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name} 
          />
      </Aux>
  );
  }
}

export default Person;
