import React, {useCallback, useEffect, useRef, memo} from 'react';
import { CLICK_CELL } from './TikTakTok';


const Td = memo(({ rowIndex, cellIndex, cellData ,dispatch }) => {
    const onClickTd = useCallback(()=>{
        if(cellData){
            // 만약 기존에 cellData가 있다면, return false 해준다.
            return;
        }
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    }, [cellData]);   // 여기서 cellData가 들어간 부분이 inputs인데, 왜 쓰냐면 useCallback의 기억력이 너무 강해서 cellData가 바뀔 때 마다 함수를 새로 만들어 주는 거임.

    const ref = useRef([]);
    useEffect(() => {
        console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3]);
        ref.current = [rowIndex, cellIndex, dispatch, cellData]; // 아래에 두는 이유는 최근 자료로 최신화 하기 위해서..
        console.log(cellData, ref.current[3]);  // 근데 확인해 보니깐 여기는 문제가 없음, 그럴 때는 부모를 확인해야 함.
    },[rowIndex,cellIndex,cellData,dispatch]);  // 이렇게 하면 어떤 게 바뀌고 어떤 게 안 바뀌는 지 확인 가능함 

    return (
            <>
                <td onClick={onClickTd}>{cellData}</td>
            </>
        )
});

export default Td;