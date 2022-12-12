import React from 'react';
import UniDirection from './UniDirection/UniDirection';

const Direction = (props) => {
    return (
        <div style={{
            backgroundColor: 'gray',
            padding: '20px',
            color: 'white',
            fontSize: '2rem'
            
        }}>
            <h2>{props.name}</h2>
            <UniDirection age={props.age}></UniDirection>
        </div>
    );
};

export default Direction;