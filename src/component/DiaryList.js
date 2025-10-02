import { useEffect, useState } from 'react';
import './DiaryList.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import DiaryItem from './DiaryItem';

const DiaryList = ({data}) => {
    const [sortType, setSortType] = useState("latest");
    const [sortedData, setSortedData] = useState([]);
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    };
    const sortOptionType = [
        {value: "latest", name:"최신순"},
        {value: "oldest", name:"오래된 순"},
    ];
    const navigate = useNavigate();
    const onClickNew = () => {
        navigate("/new");
    };
    useEffect(() => {
        const compare = (a,b) => {
            if(sortType === "latest"){
                return Number(b.date) - Number(a.date);
            } else{
                return Number(a.date) - Number(b.date);
            }
        };
        const copyList = JSON.parse(JSON.stringify(data));
        // 깊은 복사 -> data 복사본 생성(sort() 시 원본의 배열도 바뀌기 때문에 복사하여 진행)
        copyList.sort(compare);
        setSortedData(copyList);
    },[data, sortType]);
    return (
        <div className="DiaryList">
            <div className='menu_wrapper'>
                <div className='left_col'>
                    <select value={sortType} onChange={onChangeSortType}>
                        {sortOptionType.map((it, idx) => (<option key={idx} value={it.value}>{it.name}</option>))}
                    </select>
                </div>
                <div className='right_col'>
                    <Button type={"positive"} text={"새 일기 쓰기"} onClick={onClickNew}></Button>
                </div>
                
            </div>
            <div className='list_wrapper'>
                {sortedData.map((it)=> <DiaryItem key={String(it.id)} {...it} /> )}
                
            </div>      
        </div>
    );
};
export default DiaryList;