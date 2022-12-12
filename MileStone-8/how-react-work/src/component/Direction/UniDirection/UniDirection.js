import React from 'react';

const UniDirection = (props) => {
    return (
        <div style={{
            backgroundColor: 'gray',
            borderTop: '5px solid crimson'
        }}>
            <h2>Age: {props.age}</h2>
        </div>
    );
};

export default UniDirection;