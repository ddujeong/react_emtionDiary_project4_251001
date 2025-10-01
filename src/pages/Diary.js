import { useParams } from "react-router-dom";

const Diary = () => {
    const {id} = useParams();
    // @PathVariable String id 와 유사

    return(
        <div>
            <h3>{id} 번 일기</h3>
            <h4>Diary 페이지</h4>
        </div>
    );
};
export default Diary;