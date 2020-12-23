const React = require('react');
const { useState, useRef, Component } = React;
import Tr from './Tr';

const Table = ({ onClick, tableData }) => {
    //alert(tableData);
    return (
            <table onClick={onClick}>
                <tbody>
                    {
                        Array(tableData.length).fill().map((tr, i)=>(<Tr rowData={tableData[i]} />))
                    }
                </tbody>
            </table>
        );
};

export default Table;