import React, {useCallback} from 'react';
import { CLICK_CELL } from './TikTakTok';


const Td = ({ rowIndex, cellIndex, cellData ,dispatch }) => {
    const onClickTd = useCallback(()=>{
        if(cellData){
            // 만약 기존에 cellData가 있다면, return false 해준다.
            return;
        }
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    }, [cellData]);

    return (
            <>
                <td onClick={onClickTd}>{cellData}</td>
            </>
        )
};

export default Td;