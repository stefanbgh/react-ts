import { FC, useState } from 'react'

import { FaqQuestion, FaqAnswer } from "..";
import { faqData } from './faqData';

const FaqComponent: FC = (): JSX.Element => {
    const [ currentActive, setCurrentActive ] = useState(1);
    const handleFaqToggle = (id: number) => {
        if (currentActive !== id) {
            setCurrentActive(id);

            return;
        }

        setCurrentActive(0);
    };

    return (
        <>
            {
                faqData.map((faq) => {
                    const { id, question, answer } = faq;

                    return (
                        <div key={id} className='mb-2 last:mb-0'>
                            <FaqQuestion
                                id={id}
                                question={question}
                                currentActive={currentActive}
                                handleFaqToggle={handleFaqToggle}
                            />

                            <FaqAnswer
                                id={id}
                                answer={answer}
                                currentActive={currentActive}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}

export default FaqComponent