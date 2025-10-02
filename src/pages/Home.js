import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "../util";
import DiaryList from "../component/DiaryList";

const Home = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // searchParams.get("memberid") -> (http://localhost:3000/?memberid=tiger)  => tiger
    // console.log(searchParams.get("memberid"));
    const data = useContext(DiaryStateContext); // context에서 일기 데이터 가져오기

    const [pivotDate, setPivotDate] = useState(new Date()); // 초기값 => 현재날짜(new Date()) 
    const [filterData, setFilterData] = useState([]);
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    };
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    };
    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`;
    
    useEffect(()=> {
        if (data.length >= 1) {
            const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);
            setFilterData(
                data.filter((it) =>beginTimeStamp <= it.date && endTimeStamp >= it.date)
            )
        } else {
            setFilterData([]);
        }
    },[data, pivotDate]);

    return (
        
        <div>
            <Header
                title={headerTitle} 
                leftChild={<Button text={"<"}  onClick={onDecreaseMonth} />}
                rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
            />
            <DiaryList data={filterData} />
        </div>
    );
};
export default Home;