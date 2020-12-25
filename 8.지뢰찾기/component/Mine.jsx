import React, {useReducer, createContext, useMemo} from 'react';
import Table from './Table';
import Form from './Form';

export const CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MIN: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0,
};

export const TableContext = createContext({
    tableData: [
        [-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1],
        [-1,-7,-1,-1,-7,-7,-1],
        [-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1],
    ],
    dispatch: () => {}, // dispatch는 함수니깐..
});

const initialState = {
    tableData: [],
    timer: 0,
    result: 0,
};

export const START_GAME = 'START_GAME';

const reducer = (state, action) => {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                tableData: plantMine(action.row, action.cell, action.mine),
            }
        default:
            return state;
    }
}

const Mine = () => {
    const [state, dispatch] = useReducer(reducer, initialState);    
    const value = useMemo(() => ({
        tableData: state.tableData, dispatch
    },[state.tableData]));  // 이렇게 contextAPI 쓸 때 캐싱처리 해야 성능 저하가 일어 나지 않는다.

    return (
        <TableContext.Provider value= {{ value }}>
            <Form />
            <div>{state.timer}</div>
            <Table />
            <div>{state.result}</div>
        </TableContext.Provider>
    );
}

export default Mine;