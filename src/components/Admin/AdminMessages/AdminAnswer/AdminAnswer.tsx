import { FC, useContext, Context } from 'react'

import { IAnswer } from '../../../../ts/interfaces/ISupport/IAnswer'
import { timestampToLocalString } from '../../../../utils/helpers/timestampToLocalString';
import DarkThemeContext from '../../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

import "./AdminAnswer.scss"

interface IProps {
    answer: IAnswer;
}

const AdminAnswer: FC<IProps> = ({ answer: { adminName, adminMessage, adminMessageTimestamp } }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    const calcTimestamp = timestampToLocalString(adminMessageTimestamp);

    const adminAnswerContainer = darkTheme ? "admin-single-message-answer__container-dark" : "admin-single-message-answer__container";

    return (
        <div className={adminAnswerContainer}>
            <div className='admin-single-message-answer__divider'></div>
            <div className='admin-single-message-answer__sender'>
                <div className='admin-single-message-answer__sender-and-timestamp'>
                    <h4>Admin:</h4>
                    <p>{calcTimestamp}</p>
                </div>
                <p>@{adminName}</p>
            </div>
            <div className='admin-single-message-answer__content'>
                <h4>Admin Message:</h4>
                <p>{adminMessage}</p>
            </div>
        </div>
    )
}

export default AdminAnswer