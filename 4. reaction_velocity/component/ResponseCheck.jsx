const React = require('react');
const { useState, useRef, Component } = React;

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);

    const onClickScreen = () => {
    };

    return (
        <>
            <div id="screen" className={state} onClick={onClickScreen}>
                <h5>{message}</h5>
            </div>

            {
                result.length === 0 ? null : 
                <div>
                    평균 시간 : {result.reduce((a,c)=> a + c ) / result.length } ms   
                </div>
            }
            
        </>
    );
}


module.exports = ResponseCheck;