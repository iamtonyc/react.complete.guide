import React, { Component,Fragment } from "react";
import "./Person.css";
import Aux from '../../../hoc/Auxillary';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-type';

class Person extends Component {
  constructor(props){ 
    super(props);
    this.inputElementRef =React.createRef();
  }


  componentDidMount(){
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

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
              //ref={(inputEl)=>{this.inputElement=inputEl}}
              ref={this.inputElementRef}
              type="text" 
              onChange={this.props.changed} 
              value={this.props.name} 
            />
        </Aux>
    );
  }
}
Person.propTypes ={
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default WithClass(Person,"Person");
