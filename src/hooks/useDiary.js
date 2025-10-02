import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const[diary, setDiary] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const matchDiary = data.find((it) => String(it.id) === String(id)); // 유저가 클릭한 일기의 id 값과 같은 일기를 배열에서 찾음
        if (matchDiary) { // 유저가 클릭한 일기의 id가 존재하면 찾은 일기를 상태(state)에 저장
            setDiary(matchDiary);
        } else{
            alert("일기가 존재하지 않습니다");
            navigate('/', {replace: true}); // 홈으로 강제이동
        }
    },[id, data]);
    return diary;
};
export default useDiary;