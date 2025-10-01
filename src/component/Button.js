import './Button.css';

//Button 컴포넌트 props-> 버튼의 text, type, onClick 을 부모에게서 받아와서 처리
const Button = ({text, type, onClick}) => {
    const btnType = ["positive", "negative"].includes(type) ? type : "default";
    return(
        <button className={["Button" , `Button_${btnType}`].join(" ")} onClick={onClick}>{text}</button>
    );
};
export default Button;