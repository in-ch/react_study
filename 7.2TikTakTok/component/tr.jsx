const React = require('react');
const { useState, useRef, Component, memo } = React;
import Td from './Td';

const Tr = memo(({ rowData, rowIndex, dispatch }) => { 
    return (
            <tr>
                {
                    Array(rowData.length).fill().map((td, i) => (
                        <Td key={i} rowIndex= {rowIndex} cellIndex={i} cellData={rowData[i]}  dispatch={dispatch} >{''}</Td>
                    ))
                }
            </tr>
        )
});

export default Tr;