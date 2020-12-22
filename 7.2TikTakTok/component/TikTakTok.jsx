const React = require('react');
const Table = require('Table');
const { useState, useRef, useReducer,Component } = React;

const initialState = {
    winnder: '',
    turn: '0',
    tableData: [['','',''],['','',''],['','','']],
};

const reducer = (state, action) => {

};

const TikTakTok = () => {
    //const [winner, setWinnder] = useState('');
    //const [turn, setTurn] = useState('0');
    //const [tableData, setTableData] = useState([['','',''],['','',''],['','','']]);

    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
            <>
                <Table />
                {winnder && <div>{winnder}님의 승리</div>}
            </>
        )
}

module.exports = TikTakTok;