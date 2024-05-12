import { FC, Dispatch, SetStateAction, useContext, Context } from 'react'

import { useGetSingleMessageForSupportQuery } from '../../../../features/API/supportMessagesAPI';
import { AdminAnswer, AdminAnswerForm, ModalAdminSingleMessageContent, Spinner } from '../../../../components';
import { IAnswer } from '../../../../ts/interfaces/ISupport/IAnswer';

import "./ModalAdminSingleMessage.scss";
import DarkThemeContext from '../../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    currentMessageId: number;
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalAdminSingleMessage: FC<IProps> = ({ currentMessageId, setModalIsOpen }): JSX.Element => {
    const { data: singleMessageForSupport } = useGetSingleMessageForSupportQuery(currentMessageId);

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <>
            {
                singleMessageForSupport ? (
                    <div className={ darkTheme ? "modal__admin-single-message_dark" : "modal__admin-single-message" }>
                        <ModalAdminSingleMessageContent
                            singleMessageForSupport={singleMessageForSupport}
                            setModalIsOpen={setModalIsOpen}
                            darkTheme={darkTheme}
                        />
                        {
                            singleMessageForSupport.adminResponse ? (
                                <AdminAnswer
                                    answer={singleMessageForSupport.answer as IAnswer}
                                />
                            ) : (
                                <AdminAnswerForm
                                    messageId={singleMessageForSupport.messageId}
                                    firstName={singleMessageForSupport.firstName}
                                    setModalIsOpen={setModalIsOpen}
                                    darkTheme={darkTheme}
                                />
                            )
                        }
                    </div>
                ) : <Spinner/>
            }
        </>
    )
}

export default ModalAdminSingleMessage