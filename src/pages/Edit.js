import Button from "../component/Button";
import Editor from "../component/Editor";
import Header from "../component/Header";

const Edit = () => {
    return (
        <div>
            <Header
                title={"일기 수정하기"} 
                leftChild={<Button text={"긍정 버튼"} type="positive" onClick={() => {alert("positive button")}} />}
                rightChild={<Button text={"부정 버튼"} type="negative" onClick={() => {alert("negative button")}} />}
            />
            <Editor />
        </div>
    );
};
export default Edit;