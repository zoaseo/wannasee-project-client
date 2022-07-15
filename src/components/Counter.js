import React from 'react';

const Counter = ({number, onIncrease, onDecrease}) => {
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
};

export default Counter;