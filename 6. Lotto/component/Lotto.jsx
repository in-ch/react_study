const { useEffect, useMemo, useRef, useCallback } = require('react');
const React = require('react');

function getWinNumbers() {
    console.log('hello');
    const candidate = Array(45).fill().map((v,i)=>{
        i + 1
    });
    const shuffle = [];
    while (candidate.length > 0 ){
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length -1];
    const winNumbers = shuffle.slice(0,6).sort((p,c)=> p - c);
    return [...winNumbers, bonusNumber];
}


const Lotto = () => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = setState(lottoNumbers);
    const [winBalls, setWinBalls] = setState([]);
    const [bonus, setBonus] = setState(null);
    const [redo, setRedo] = setState(false);
    const interval = useRef();

    useEffect(() => {
        for(let i=0;i < winNumbers.length -1;i++){
            interval.current[i] = setTimeout(() => {
                    setWinBalls((prevWinBalls) => {
                        [...prevWinBalls,winNumbers[i]]
                    });
            }, (i+1)* 1000);
        }

        interval.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        },7000);

        return () => {
            interval.current.forEach((v)=>{
                clearTimeout(v);
            });
        }

    },[interval.current]);

    const onClickRedo = () => {
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        interval.current = [];
    }

    return (
        <>
            <div>
                <h5>Hello, Rotto Component</h5>
                <div>당첨 숫자</div>
                <div id="resultDiv">
                    {winBalls.map((v)=> <Ball key={v} number={v} />)}
                </div>
                <p>보너스</p>
                {bonus && <Ball number={bonus}/>}
                {redo &&<button onClick={onClickRedo}>한 번 더 </button>}
            </div>
        </>
    )
}

module.exports = Lotto;