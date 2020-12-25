import React from 'react';
const { useState, useRef, useEffect,useReducer, useCallback, Component } = React;
import Table from './Table';

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const SET_TURN = 'SET_TURN';
export const RESET_GAME = 'RESET_GAME';

const initialState = {
    winner: '',
    turn: 'o',
    tableData: [['','',''],['','',''],['','','']],
    recentCell : [-1,-1], // 없는 배열로 recentCell 초기화
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
                recentCell : [action.row, action.cell],
            }
        case SET_TURN: {
            return {
                ...state,
                turn: state.turn === "o" ? "x" : "o",
            }
        }
        case RESET_GAME: {
            return {
                ...state,
                turn: 'o',
                tableData: [['','',''],['','',''],['','','']],
                recentCell : [-1,-1], // 없는 배열로 recentCell 초기화
            }
        }
        default:
            return state;
    }
};


 const TikTakTok = () => {
    //const [winner, setWinner] = useState('');
    //const [turn, setTurn] = useState('0');
    //const [tableData, setTableData] = useState([['','',''],['','',''],['','','']]);

    const [state, dispatch] = useReducer(reducer, initialState);
    const {tableData, turn, winner, recentCell} = state;  // 구조 분해를 함으로써 <> </> 안에 더이상 state같은 거 안 써도 됨.

    useEffect(()=> {
        //recentCell가 바뀔 때 마다. useEffect가 실행됨.
        const [row,cell] = recentCell;
        if(row < 0) {
            return;
        }
        let win = false;
        if(tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
            win = true;
        } 
        if(tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
            win = true;
        }
        if(tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
            win = true;
        }
        if(tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
            win = true;
        }

        if(win){
            dispatch({ type:SET_WINNER, winner: turn });
            dispatch({ type:SET_GAME });
        } else {
            let all = true;

            tableData.forEach((row) => {
                row.forEach((cell) => {
                    if (!cell){
                        all = false;
                    }
                });
            });
            if( all ) {
                dispatch({ type:SET_GAME });
            } else {
                dispatch({ type:SET_TURN });
            }
        }
    },[recentCell]);

    const onClickTable = useCallback(() => {
        dispatch({ type: 'SET_WINNER', winner: 'o'})  // dispatch 안에 있는 게 action 임 
    });

    return (
            <>
                <Table onClick={onClickTable} tableData={ tableData } dispatch={dispatch} />
               {
                 winner && <div>{winner}님의 승리</div>
               }
                
           </>
        )
}

export default TikTakTok;