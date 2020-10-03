const React = require('react');
const { useState, useRef, Component } = React;


function getNumbers() {
    // 숫자 4개를 랜덤하게 겹치지 않게 뽑는 함수
}

const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [anwser, setAnwser] = useState(getNumbers());
    const [tried, setTried] = useState([]);
    const inputRef = useRef(null);

    const onSubmitForm = () => {

    };

    const onChangeInput = () => {

    };

    return (
            <>
                <h1>{result}</h1>
                <form onSubmit= {onSubmitForm}>
                    <input ref={inputRef} maxlength= {4} value= {value} onChange= {onChangeInput} />
                </form>
                <div>시도: {tried.length}</div>
                <ul>
                    {['','','','',''].map(()=> {
                        return (
                            <li>like</li>
                        );
                    })}
                </ul>
            </>
        )
}
module.exports = NumberBaseball;