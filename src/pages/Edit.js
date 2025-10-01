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
            <Editor initData={{
                date: new Date().getTime(),
                emotionId:1,
                content:"이전에 작성했던 일기"
            }} onSubmit={() => alert("작성 완료!")} />
        </div>
    );
};
export default Edit;