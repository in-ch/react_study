import React from 'react';
const { useState, useRef, useReducer, useCallback, Component } = React;
import Table from './Table';

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const SET_TURN = 'SET_TURN';

const initialState = {
    winner: '',
    turn: '0',
    tableData: [['','',''],['','',''],['','','']],
};

const reducer = (state, action) => {  // action을 dispatch 할 때 마다 reducer가 실행됨.
    switch (action.type) {
        case SET_WINNER :
            // state.winner = action.winner; 이렇게 하면 안됨. 우린 새로운 객체를 만들어서 바뀐 부분만 새롭게 바꿔줘야 함
            return {
                ...state,
                winner: action.winner,
            }
        case CLICK_CELL:
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]]; // 나중에 immer라는 라이브러리로 가독성 해결
            tableData[action.row][action.cell] = state.turn;

            return {
                ...state,
                tableData,
            }
        case SET_TURN: {
            return {
                ...state,
                turn: state.turn === "o" ? "x" : "o",
            }
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
                <Table onClick={onClickTable} tableData={ state.tableData } dispatch={dispatch} />
               {
                 state.winner && <div>{state.winner}님의 승리</div>
               }
                
           </>
        )
}

export default TikTakTok;