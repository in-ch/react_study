import React from 'react';

const { useState, useRef, useReducer, useCallback, Component } = React;

import Table from './Table';

const initialState = {
    winner: 'o',
    turn: '0',
    tableData: [['','',''],['','',''],['','','']],
};

const reducer = (state, action) => {  // action을 dispatch 할 때 마다 reducer가 실행됨.
    switch (action.type) {
        case 'SET_WINNER' :
            // state.winner = action.winner; 이렇게 하면 안됨. 우린 새로운 객체를 만들어서 바뀐 부분만 새롭게 바꿔줘야 함
            return {
                ...state,
                winner: action.winner,
            }
    }
};


 const TikTakTok = () => {
    //const [winner, setWinner] = useState('');
    //const [turn, setTurn] = useState('0');
    //const [tableData, setTableData] = useState([['','',''],['','',''],['','','']]);

    const [state, dispatch] = useReducer(reducer, initialState);
 
    const onClickTable = useCallback(() => {
        dispatch({ type: 'SET_WINNER', winner: '0'})  // dispatch 안에 있는 게 action 임 
    });

    return (
            <>
                <Table onClick={onClickTable} tableData={ state.tableData }/>
               {
                 state.winner && <div>{state.winner}님의 승리</div>
               }
                
           </>
        )
}

export default TikTakTok;