import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
        // static getDerivedStateFromProps(props, state){
        //         console.log('[Person.js] getDerivedStateFromProps');
        //         return state;
        // } 

        // componentWillRecievedProps(props){
        //         console.log('[Persons.js] componentWillRecievedProps', props);
        // }

        shouldComponentUpdate(nextProps, nextState){
                console.log('[Person.js] shouldComponentUpdate');
                return true;
        }

        getSnapshotBeforeUpdate(prevProps,preState){
                console.log('[Person.js] getSnapshotBeforeUpdate');
                return null;
        }

        // componentWillUpdate(){

        // }

        componentDidUpdate(prevProps, prevState){
                console.log('[Persons.js] componentDidUpdate');
        }

        render(){ 
                console.log('[Persons.js] rendering...... ');
                return this.props.persons.map((person, index)=>{
                        return(
                                <Person 
                                        click={()=>this.props.clicked(index)}
                                        name={person.name} 
                                        age={person.age}
                                        key={person.id}
                                        changed={(event)=>this.props.changed(event,person.id)}   
                                />
                        )
                });
        }

}

export default Persons;
