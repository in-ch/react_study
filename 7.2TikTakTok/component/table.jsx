const React = require('react');
const { useState, useRef, Component } = React;
import Tr from './Tr';

const Table = ({ tableData, dispatch }) => {
    
    return (
            <table>
                <tbody>
                    {
                        Array(tableData.length).fill().map((tr, i)=>(<Tr  key={i} rowIndex= {i} rowData={tableData[i]} dispatch={dispatch} />))
                    }
                </tbody>
            </table>
        );
};

export default Table;