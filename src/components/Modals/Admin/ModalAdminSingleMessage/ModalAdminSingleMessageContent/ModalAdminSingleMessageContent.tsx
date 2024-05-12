import { FC, Dispatch, SetStateAction } from 'react'

import { ISupportMessage } from '../../../../../ts/interfaces/ISupport/ISupportMessage'
import { timestampToLocalString } from '../../../../../utils/helpers/timestampToLocalString';
import { FaTimesCircle } from "react-icons/fa"

import "../ModalAdminSingleMessage.scss"

interface IProps {
    singleMessageForSupport: ISupportMessage;
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
    darkTheme: boolean;
}

const ModalAdminSingleMessageContent: FC<IProps> = ({ singleMessageForSupport: { firstName, timestamp, email, title, message }, setModalIsOpen, darkTheme }): JSX.Element => {
    const calcTimestamp = timestampToLocalString(timestamp);

    const handleCloseModal = () => setModalIsOpen(false);
    
    return (
        <>
            <h3>Message from {firstName}</h3>
            <FaTimesCircle
                size={20}
                className={ darkTheme ? "modal__admin-single-message-x_dark" : "modal__admin-single-message-x" }
                onClick={handleCloseModal}
            />
            <div className='modal__admin-single-message-content'>
                <div className='modal__admin-single-message-content-gap'>
                    <div className='modal__admin-single-message-content-between'>
                        <h4>Email:</h4>
                        <p>{calcTimestamp}</p>
                    </div>
                    <p>{email}</p>
                </div>
                <div className='modal__admin-single-message-content-gap'>
                    <h4>Title:</h4>
                    <p>{title}</p>
                </div>
                <div className='modal__admin-single-message-content-gap'>
                    <h4>Message:</h4>
                    <p>{message}</p>
                </div>
            </div>
        </>
    )
}

export default ModalAdminSingleMessageContent