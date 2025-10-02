import { useNavigate, useParams } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import useDiary from "../hooks/useDiary";
import { getEmotionImgById, getFormattedDate } from "../util";
import Viewer from "../component/Viewer";

const Diary = () => {
    const {id} = useParams();
    // @PathVariable String id 와 유사
    const data = useDiary(id);
    const navigate = useNavigate();
    if (!data) {
        return <div>일기를 불러오고 있습니다...</div>;
    } else{
        const {content, date, emotionId} = data;
        const title = `${getFormattedDate(new Date(Number(date)))} 일 기록`
        const goBack = () => {
            navigate(-1);
        };
        const goEdit = () => {
            navigate(`/edit/${id}`);
        };
        return (
            <div>
                <Header
                    title={title} 
                    leftChild={<Button text= {'< 뒤로가기'} onClick={goBack} />}
                    rightChild={<Button text={"수정하기"} onClick={goEdit} />}
                 />
                <div>
                    <Viewer content={content} emotionId={emotionId} />
                </div>
            </div>
        )
    }
};
export default Diary;