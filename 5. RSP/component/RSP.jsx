const { useEffect } = require('react');
const React = require('react');
const { useState, useRef, Component } = React;


const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
      return v[1] === imgCoord; 
    })[0];
  };

const RSP = () => {
    const [result, setResult] = useState('');
    const [score, setScore] = useState(0);
    const [imgCoord, setImgCoord] = useState(rspCoords.바위);
    const interval = useRef();
    
    useEffect(() => {
        // componentDidMount, componentDidUpdate 역할 (1대1 대응은 아님, 둘의 기능을 합쳐 놓은 것과 같음.)
        interval.current = setInterval(() => {
            changeHand();
        }, 100)
        return () => { // componentWillUnmount 역할
            clearInterval(interval.current);
        }
    },[imgCoord]);  // 배열에 바뀌는 변수 적어줘야함


    const changeHand = () => {
        if(imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위);
        } else if (imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보);
        } else {
            setImgCoord(rspCoords.바위);
        }
    };

    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;  // 내가 낸 것과 컴퓨터가 낸 것을 숫자로 변환해서 빼서 그 값을 비교
        
        if (diff === 0) {
            setResult('비겼습니다.');
        } else if([-1, 2].includes(diff)){
            setResult('이겼습니다');
            setScore((prevScore)=> prevScore + 1);
        } else {
            setResult('졌습니다.');
            setScore((prevScore)=> prevScore - 1);
        }

        setTimeout(() => {
            interval.current = setInterval(changeHand, 100);
        }, 1000)
    }

    /*
    const componentDidMount = () => {
        // 처음 랜더가 성공적으로 수행되면 실행할 수 있는 메소드 
        interval = setInterval(() => {
            let imgCoord = this.imgCoord;
            console.log('asdf');
        },1000);
    }

    const componentWillUnmount = () => {
        // 컴포넌트가 제거되기 직전
        clearInterval(interval);
    }

    const componentDidUpdate = () => {
        // 재 렌더링 된 후
    }

    const onClickBtn = (choice) => {

    }
    */
    return (
        <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
            <div>
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    );
}


module.exports = RSP;