const { useEffect } = require('react');
const React = require('react');
const { useState, useRef, Component } = React;

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
    const [winNumberss, setWinNumbers] = setState(getWinNumbers);
    const [winBalls, setWinBalls] = setState([]);
    const [bonus, setBonus] = setState(null);
    const [redo, setRedo] = setState(false);
    
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
                <button onClick={redo ? this.onClickRedo : () => {}}>한 번 더 </button>
            </div>
        </>
    )
}

module.exports = Lotto;