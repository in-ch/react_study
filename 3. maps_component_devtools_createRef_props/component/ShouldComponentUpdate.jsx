const React = require('react');
const { useState, useRef, Component } = React;

const Test = () => {
    const { counter, setCounter} = useState(0);

    const shouldComponentUpdate = (nextProps, nextState, nextContext) => {
        if (this.state.counter !== nextState.counter) {
            return true; // 트루면 렌더링
        }
        return false; // false면 취소 
    }

    const onClick = () => {
        setCounter();
    };

    return (
        <div>
            <button onClick={onClick}>클릭</button>
        </div>
    )
    
}

module.exports = Test;