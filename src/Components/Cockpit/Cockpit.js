import React, { useEffect } from "react";


const Cockpit = (props)=>{
    useEffect(()=>{
        console.log('[cockpit.js] useEffect');

         const timer=setTimeout(()=>{
            alert('Saved data to cloud');
         },1000);
         return ()=>{
             clearTimeout(timer);
             console.log('[cockpit.js] cleanup work in use Effect');
         }
    },[]);


    useEffect(()=>{
        console.log('[cockpit.js] 2nd useEffect');
        return ()=>{
            console.log('[cockpit.js] cleanup work in 2nd use Effect');
        }
    });
    

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


    if (props.personsLength<=2){
        classes.push('red');
    }

    if (props.personsLength<=1){
        classes.push('bold');
    }


    return (
        <div>
            <h1>{props.title}</h1>
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


export default React.memo(Cockpit);