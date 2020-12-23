import React, {useCallback} from 'react';
import { CLICK_CELL } from './TikTakTok';
import { SET_TURN } from './TikTakTok';


const Td = ({ rowIndex, cellIndex, cellData ,dispatch }) => {
    const onClickTd = useCallback(()=>{
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
        dispatch({ type: SET_TURN });
    }, []);

    return (
            <>
                <td onClick={onClickTd}>{cellData}</td>
            </>
        )
};

export default Td;