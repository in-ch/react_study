const React = require('react');
const { useState, useRef, Component } = React;

let timeout; 
let startTime;
let endTime;
const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);

    const onClickScreen = () => {
        if(state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭해주세요.');
            timeout = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭하세요.');
                startTime = new Date(); 
            }, Math.floor(Math.random()* 1000) + 2000 );
        } else if(state === 'ready') {
            setState('waiting');
            setMessage('이런 성급하셨군요.');
            clearTimeout(timeout);
        } else if(state === 'now') {
            endTime = new Date(); 

            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            setResult((prevResult) => {
                return [...prevResult, endTime - startTime];
            });
        }
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