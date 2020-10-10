const React = require('react');
const { useState, useRef, Component } = React;
/*
let timeout; 
let startTime;
let endTime;
*/
const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);
    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();
    
    const onClickScreen = () => {
        if(state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭해주세요.');
            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭하세요.');
                startTime.current = new Date(); 
            }, Math.floor(Math.random()* 1000) + 2000 );
        } else if(state === 'ready') {
            setState('waiting');
            setMessage('이런 성급하셨군요.');
            clearTimeout(timeout.current);
        } else if(state === 'now') {
            endTime.current = new Date(); 

            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            });
        }
    };
    const renderAverage = () => {
    }

    const onReset = () => {
        setResult([]);
    }
    
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
            <button onClick={onReset}>리셋</button>
        </>
    );
}


module.exports = ResponseCheck;