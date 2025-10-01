import { useState } from 'react';
import './Editor.css';

// initData => 입력창 또는 수정창에서 다르게 보여질 입력 내용
// 수정 => 기존 입력 내용 , 입력 => placeholder 
const Editor = ({initData,onSubmit}) => {
    const[state, setState] = useState({
        date: "",
        emotionId: 3,
        content: ""
    });
    const handelChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value
        })
    };
    return(
        <div className='Editor'>
            <div className='editor_section'>
                {/* 날짜  */}
                <h4>오늘의 날짜</h4>
                <input type='date'value={state.date} onChange={handelChangeDate}></input>
            </div>
            <div className='editor_section'>
                {/* 감정  */}
                <h4>오늘의 감정</h4>
            </div>
            <div className='editor_section'>
                {/* 일기  */}
                <h4>오늘의 일기</h4>
            </div>
            <div className='editor_section'>
                {/* 작성 완료 , 취소 */}
            </div>
        </div>
    );
};
export default Editor;