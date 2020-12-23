const React = require('react');
const { useState, useRef, Component } = React;
import Td from './Td';

const Tr = ({ rowData, rowIndex, dispatch }) => {

    return (
            <tr>
                {
                    Array(rowData.length).fill().map((td, i) => (<Td rowIndex= {rowIndex} cellIndex={i} cellData={rowData[i]}  dispatch={dispatch} >{''}</Td>))
                }
            </tr>
        )
}

export default Tr;