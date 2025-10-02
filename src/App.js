import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import { useEffect, useReducer, useRef } from 'react';

const reducer = (state, action) => {
  // state => 기존 일기객체들이 들어있는 배열
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
      // 기존 일기들이 들어있는(...state)배열 앞에 새로 작성한 일기(action.data) 삽입
    case "UPDATE":
      return state.map((it)=> String(it.id) === String(action.data.id) ? {...action.data} : it);
      // 기존 일기 배열 의 id 값(it.id)이 선택한 id 값(action.data.id) 와 같으면 선택된 id값의 data를 action.data(id, date, content, emotionId)로 교체  
    case "DELETE":
      return state.filter((it)=> String(it.id) !== String(action.targetId));
      // 일기 배열에서 id 값(it.id)이 선택된 id 값(action.targetId)과 같지 않은 일기들만 필터링해서 보여줌
    case "INIT":
      return action.data;
    default:
      return state;
  }
  
}

function App() {
  const mockData = [{
    id: "mock1",
    date: new Date().getTime(),
    content: "mock1이 쓴 글 ~",
    emotionId: 1
  },{
    id: "mock2",
    date: new Date().getTime(),
    content: "mock2가 쓴 글 ~",
    emotionId: 3
  },{
    id: "mock3",
    date: new Date().getTime(),
    content: "mock3이 쓴 글 ~",
    emotionId: 4
  }];

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData
    })
  },[]);
  const [data, dispatch] = useReducer(reducer, []);
  // data = 일기(일기객체)들이 들어있는 배열 (초기값 []빈배열)
  const idRef = useRef(0); // 일기의 유니크값(id) 생성 변수
  const onCreate = (date, content, emotionId) => {
    dispatch ({
      type: "CREATE",
      data: {
         id: idRef.current,
         date: new Date(date).getTime(),
         content, 
         emotionId
      }
    });
    idRef.current += 1;
  };
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data : {
        id: targetId,
        date : new Date(date).getTime(),
        content,
        emotionId
      }
    })
  };
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId
    })
  };
  return (
    <div className="App">
      <div>
      </div>
      <hr></hr>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/new' element={<New />}></Route>
        <Route path='/diary/:id' element={<Diary />}></Route>
        <Route path='/edit' element={<Edit />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
