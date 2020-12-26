import React, {useCallback, useContext} from 'react';
import {TableContext, CODE, OPEN_CELL} from './Mine';

const getTdStyle = (code) => {
    switch (code) {
        case CODE.NORMAL:
        case CODE.MINE: 
            return {
                background: '#444',
            }
        case CODE.OPENED:
            return {
                background: 'white',
            }
        default:
            return {
                background: 'white',
            }
    }
};

const getTdText = (code) => {
    switch (code) {
        case CODE.NORMAL:
            return '';
        case CODE.MINE:
            return 'x';
        default:
            return '';
    }
};

const  Td = ({rowIndex, cellIndex}) => {
    const {tableData} = useContext(TableContext); 

    const onClickTd = useCallback(() => {
        dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
        return;
    }, [tableData[rowIndex][cellIndex]]);

    return (
        <td onClick= {onClickTd} style={getTdStyle(tableData[rowIndex][cellIndex])}>
            {getTdText(tableData[rowIndex][cellIndex])}
        </td>
    );
};

export default Td;