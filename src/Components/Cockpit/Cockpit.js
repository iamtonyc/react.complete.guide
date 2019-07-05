import React, { Component } from "react";


const cockpit = (props)=>{
    const style = {
        backgroundColor: "green",
        color: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer"
    };
    
    let classes=[];

    if (props.showPersons){
        classes.push('red');  
    }


    if (props.persons.length<=2){
        classes.push('red');
    }

    if (props.persons.length<=1){
        classes.push('bold');
    }


    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button
            style={style}
            onClick={()=>props.clicked()}
            >
            Toggle Person
            </button>
        </div>
    );
};


export default cockpit;