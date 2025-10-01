import { useState } from 'react';
import './Editor.css';
import { getFormattedDate } from '../util';
import Button from "./Button";
import { useNavigate } from 'react-router-dom';

// initData => 입력(New) 또는 수정(Edit)에서 다르게 보여질 입력 내용
// 수정 => 기존 입력 내용 , 입력 => placeholder 
const Editor = ({initData,onSubmit}) => {
    const[state, setState] = useState({
        date: getFormattedDate(new Date()), // util.js 에 만든 날짜포맷형식 사용 
        emotionId: 3,
        content: ""
    });
    const handleChangeDate = (e) => { // 객체내의 속성값 변경 (state 객체 내의 date속성값을 e.target.value로 변경) 
        setState({
            ...state,
            date: e.target.value
        })
    };
    const handleChangeContent = (e) => {
        setState({
            ...state,
            content: e.target.value
        })
    };
    const handleSubmit = () => {
        onSubmit(state);
    };
    const navigate = useNavigate();
    const handleOnGoBack = () => { // 뒤로가기
        navigate(-1);
    }
    return(
        <div className='Editor'>
            <div className='editor_section'>
                {/* 날짜  */}
                <h4>오늘의 날짜</h4>
                <div className='input_wrapper'>
                    <input type='date' value={state.date} onChange={handleChangeDate}></input>
                </div>
            </div>
            <div className='editor_section'>
                {/* 감정  */}
                <h4>오늘의 감정</h4>
            </div>
            <div className='editor_section'>
                {/* 일기  */}
                <h4>오늘의 일기</h4>
                <div className='input_wrapper'>
                    <textarea value={state.content} placeholder='오늘은 어땠나요?' 
                            onChange={handleChangeContent}></textarea>
                </div>
            </div>
            <div className='editor_section bottom_section'>
                {/* 작성 완료 , 취소 */}
                    <Button text={"취소하기"} onClick={handleOnGoBack}></Button>
                    <Button text={"작성완료"} type={"positive"} onClick={handleSubmit}></Button>
            </div>
        </div>
    );
};
export default Editor;