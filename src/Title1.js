import React from "react" ;
import './App.css';
function Title1(props){
    return (
        <h1 style={props.style}>
            {props.name}
           
        </h1>
    )
};
export default Title1;