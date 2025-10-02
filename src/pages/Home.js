import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";

const Home = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // searchParams.get("memberid") -> (http://localhost:3000/?memberid=tiger)  => tiger
    // console.log(searchParams.get("memberid"));
    return (
        
        <div>
            <Header
                title={"HOME"} 
                leftChild={<Button text={"긍정 버튼"} type="positive" onClick={() => {alert("positive button")}} />}
                rightChild={<Button text={"부정 버튼"} type="negative" onClick={() => {alert("negative button")}} />}
            />
        </div>
    );
};
export default Home;