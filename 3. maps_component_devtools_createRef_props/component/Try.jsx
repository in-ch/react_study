const React = require('react');
const { useState, useRef, Component, memo } = React;

const Try = ({tryInfo}) => {
    
    const [result, setResult] = useState(tryInfo.result);
    const onClick = () => {
        setResult('1');
    }   // 3-13에 적혀 있음. props는 직접 바꾸면 안됨.
    
    return (
        <>
            <li>
                <div>{tryInfo.try}</div>
                <div onClick = {onClick}>{result}</div>
            </li>
        </>
    )
}

module.exports = Try;