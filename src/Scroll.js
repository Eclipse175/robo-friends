import React from 'react';
//the props.children basically returns all the children nested INSIDE of the element i.e in this case its the
//Scroll component within which there is the CardList.js Component.
const Scroll = (props) => {
    return (
        <div style = {{overflowY : 'scroll', border : '5px solid black', height : '500px'}}>
            {props.children} 
        </div>
    )
}

export default Scroll