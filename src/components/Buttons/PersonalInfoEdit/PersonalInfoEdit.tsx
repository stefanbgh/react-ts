import { FC, useState, useContext, Context } from 'react'

import { Modal } from '@mui/material';
import {ModalPersonalInfoEdit} from '../../../components';
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';
import { IUser } from '../../../ts/interfaces/IUser/IUser';

interface IProps {
    user: IUser;
}

const PersonalInfoEdit: FC<IProps> = ({ user }): JSX.Element => {
    const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false);

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
    const theme = darkTheme ? "dark" : "light"

    const handleOpenModal = () => setModalIsOpen(true);
    const handleCloseModal = () => setModalIsOpen(false);

    return (
        <>
            <button 
                className={ darkTheme ? "personal-info-edit__dark" : "personal-info-edit" }
                onClick={handleOpenModal}
            >
                Edit
            </button>
            <Modal
                open={modalIsOpen}
                onClose={handleCloseModal}
                className={ darkTheme ? "bg-gray-900 bg-opacity-80" : "bg-white bg-opacity-80" }
                children={
                    <ModalPersonalInfoEdit 
                        handleCloseModal={handleCloseModal}
                        setModalIsOpen={setModalIsOpen}
                        darkTheme={darkTheme}
                        toastTheme={theme}
                        user={user}
                    />
                }
            />
        </>
    )
}

export default PersonalInfoEdit