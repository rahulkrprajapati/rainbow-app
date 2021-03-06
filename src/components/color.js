import React from 'react';


const Color = (props) => {
    console.log("background-color:" + String(props.name));
    
    return(

        <div>
            <h4 style={{backgroundColor: props.name}}>
            {props.name}
            </h4>

        </div>
    )
}

export default Color