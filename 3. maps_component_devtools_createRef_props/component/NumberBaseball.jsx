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
                    <input ref={inputRef} maxLength='4' value= {value} onChange= {onChangeInput} />
                </form>
                <div>시도: {tried.length}</div>
                <ul>
                    {[
                        ['사과','맛있다'],
                        ['바나나','밋앖디'],
                        ['포도','시다'],
                        ['귤','시다'],
                        ['감','시러'],
                        ['까마귀','날다'],
                        ['배','떨어진다'],
                        {fruit: '사과', taste: '맛있다.'}  
                    ].map((v,i)=> {
                        return (  // return 생략 가능
                            <li key= {v[0]+v[1]}><b>{v[0]}</b> - <b>{v[1]} - {i}</b></li>
                        );
                    })}
                </ul>
            </>
        )
}
module.exports = NumberBaseball;