const React = require('react');
const { useState, useRef, Component } = React;

const RSP = () => {
    const [result, setResult] = useState('');
    const [score, setScore] = useState(0);
    const [imgCoord, setImgCoord] = useState(0);

    const componentDidMount = () => {
        // 처음 랜더가 성공적으로 수행되면 실행할 수 있는 메소드 
    }

    const componentWillUnmount = () => {
        // 컴포넌트가 제거되기 직전
    }

    const componentDidUpdate = () => {
        // 재 렌더링 된 후
    }


    return (
        <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
            <div>
                <button id="scissor" className="btn" onClick={()=> onClickBtn('가위')}>가위</button>
                <button id="rock" className="btn" onClick={()=> onClickBtn('바위')}>바위</button>
                <button id="paper" className="btn" onClick={()=> onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    );
}


module.exports = RSP;