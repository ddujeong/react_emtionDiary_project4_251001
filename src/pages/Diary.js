import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";

const Diary = () => {
    // /const {id} = useParams();
    // @PathVariable String id 와 유사

    return(
        <div>
            <Header
                title={"DIARY"} 
                leftChild={<Button text={"긍정 버튼"} type="positive" onClick={() => {alert("positive button")}} />}
                rightChild={<Button text={"부정 버튼"} type="negative" onClick={() => {alert("negative button")}} />}
            />
        </div>
    );
};
export default Diary;