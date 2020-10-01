const React = require('react');
const { Component } = React;

const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random()*9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random()*9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    // 무조건 구구단 컴포넌트 안에 넣어 줘야 한다.

    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        
        if(parseInt(value) === first*second){
            //setResult('정답: ' + value);
            setResult((prevState)=> {
                return '정답 : ' + value;
            });
            setFirst(Math.ceil(Math.random()*9));
            setSecond(Math.ceil(Math.random()*9));
            setValue('');
            inputRef.current.focus();
        } else{
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    }

    return (
            <>
                <div>
                    {first} 곱하기 {second}는? 
                    <div>
                        <form onSubmit= {onSubmitForm}>
                            <input ref= {inputRef} onChange= {onChangeInput} type="number" value={value}/>   
                            
                            <button>입 력</button>
                        </form>
                    </div>
                    <div>
                        {result}
                    </div>
                </div>
            </>
        );
}

module.exports = GuGuDan;