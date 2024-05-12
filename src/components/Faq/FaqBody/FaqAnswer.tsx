

import "./FaqAnswer.scss";

interface IProps {
    currentActive: number;
    answer: string;
    id: number;
}

const FaqAnswer = ({ currentActive, answer, id }: IProps) => {
    return (
        <div className={`
            faq__answer
            ${currentActive === id ? "faq__answer-active" : "faq__answer-inactive"} 
        `}>
            <p>{answer}</p>
        </div>
    )
}

export default FaqAnswer