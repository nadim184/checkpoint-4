import React from "react" ;
import Title1 from './Title1';

function Wrapper(props){
    return(
        <div style={props.style}>
                <Title1 name="my name here"  style={{color:"red"}}/>
                <Title1 name="my my job here"/>
        </div>
    )
};
export default Wrapper ;