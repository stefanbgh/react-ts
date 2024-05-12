import { FC, useContext, Context } from 'react'

import { MdKeyboardArrowDown } from 'react-icons/md'
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

import { faqCheckActiveQuestion } from '../../../utils/faqCheckActiveQuestion';
import { IFaqCheckActiveQuestion } from '../../../ts/interfaces/IFaq/IFaqCheckActiveQuestion';

import "./FaqQuestion.scss";

interface IProps {
    currentActive: number;
    handleFaqToggle: any;
    question: string;
    id: number;
}

const FaqQuestion: FC<IProps> = ({ currentActive, handleFaqToggle, question, id }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    const { faqQuestion, faqTitle, faqIcon }: IFaqCheckActiveQuestion = faqCheckActiveQuestion(currentActive, id, darkTheme);

    return (
        <div className={` faq__question ${faqQuestion}`}>
            <p className={` faq__title ${faqTitle}`}> {question} </p>
            <div>
                {
                    currentActive === id ? (
                        <MdKeyboardArrowDown 
                            onClick={() => handleFaqToggle(id)}
                            className={faqIcon}
                            size={24}
                        />
                    ) : (
                        <MdKeyboardArrowDown 
                            onClick={() => handleFaqToggle(id)}
                            className='faq__icon-transition'
                            size={24}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default FaqQuestion