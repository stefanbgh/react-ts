import { FC, useState, useContext, Context } from 'react'

import { Modal } from '@mui/material';
import { ModalAdminSingleMessage } from '../../../../components';
import { timeAgo } from '../../../../utils/helpers/timeAgo';
import { BiCheckDouble } from 'react-icons/bi';
import DarkThemeContext from '../../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

import "./AdminSingleMessage.scss";

interface IProps {
    messageId: number;
    email: string;
    message: string;
    timestamp: number;
    adminResponse: boolean;
}

const AdminSingleMessage: FC<IProps> = ({ messageId, email, message, timestamp, adminResponse }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false);
    const [ currentMessageId, setCurrentMessageId ] = useState<number>(0);

    const calcTimeAgo = timeAgo(timestamp);

    const adminContainer = adminResponse 
                                ? darkTheme 
                                    ? "admin-single-message__container-answered-dark" 
                                    : "admin-single-message__container-answered"
                                : darkTheme 
                                    ? "admin-single-message__container-dark"
                                    : "admin-single-message__container";
                                    
    const adminSingleMessage = darkTheme ? "admin-single-message__content-between__text_dark" : "admin-single-message__content-between__text";

    const handleOpenModal = (mId: number) => {
        setCurrentMessageId(mId);
        setModalIsOpen(true);
    };
    const handleCloseModal = () => setModalIsOpen(false);

    return (
        <>
            <div    
                className={adminContainer}
                onClick={() => handleOpenModal(messageId)}
            >
                <div className="admin-single-message__content">
                    <div className="admin-single-message__content-between">
                        <h4>{email}</h4>
                        <p className="admin-single-message__content-between__text">{calcTimeAgo}</p>
                    </div>
                    <div className='admin-single-message__content-between'>
                        <p className={adminSingleMessage}>{message}</p>
                        { adminResponse &&  <BiCheckDouble size={20}/>}
                    </div>
                </div>
            </div>
            <Modal
                open={modalIsOpen}
                onClose={handleCloseModal}
                className={ darkTheme ? "bg-gray-900 bg-opacity-80" : "bg-white bg-opacity-80" }
                children={
                    <ModalAdminSingleMessage 
                        currentMessageId={currentMessageId}
                        setModalIsOpen={setModalIsOpen}
                    />
                }
            />
        </>
    )
}

export default AdminSingleMessage