import Button from "../component/Button";
import Editor from "../component/Editor";
import Header from "../component/Header";

const New = () => {
    return (
        <div>
           <Header
                title={"새 일기 쓰기"} 
                leftChild={<Button text={"긍정 버튼"} type="positive" onClick={() => {alert("positive button")}} />}
                rightChild={<Button text={"부정 버튼"} type="negative" onClick={() => {alert("negative button")}} />}
            />
            <Editor onSubmit={() => {alert("작성완료")}} />
        </div>
    );
};
export default New;