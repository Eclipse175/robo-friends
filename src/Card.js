import React from 'react';

const Card = (props) => {
    const {name, id, email} = props;
    return (
        <div id = 'parent'>
        <div id = 'container'>
            <h1>{props.name}</h1>
            <img alt = 'robot' src = {`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        </div>
    );
}

export default Card;