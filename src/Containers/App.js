import React, { Component } from "react";
import "./App.css";
// import Person from "../Components/Persons/Person/Person";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id:'ava',    name: "Max", age: 28 },
      { id:'adfasdf', name: "Manu", age: 29 },
      { id:'11412'  , name: "Stephen", age: 27 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  static getDrivedStateFromProps(props, state){
    console.log('[App.js] getDerviedStateFromProps',props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  componentWillMount(){
    console.log('[App.js] componentWillMount');
  }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id===id;
    });

    const person={
        ...this.state.persons[personIndex]
    };
    person.name= event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons:persons});

   
  };

  deletePersonHandler=(personIndex) =>{
    
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }


  togglePersonsHandler=() => {
      const doesShow =this.state.showPersons;
      this.setState({showPersons: !doesShow});

  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons =null;
    
    if (this.state.showPersons){
      persons=(
          <div> 
            <Persons  
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
              />
          </div> 
      );
        style.backgroundColor='red';
      
    }

   



    return (
      <div className="App">
        <Cockpit 
            title={this.props.appTitle}
            showPerson={this.state.showPersons} 
            persons={this.state.persons} 
            clicked={this.togglePersonsHandler}
        >
        </Cockpit>
        {persons}
      </div>
    );
  }
}
export default App;
