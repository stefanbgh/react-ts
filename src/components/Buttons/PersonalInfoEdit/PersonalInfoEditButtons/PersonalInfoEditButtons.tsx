import { FC, MouseEventHandler } from 'react'

import "./PersonalInfoEditButtons.scss";

interface IProps {
    handleCloseModal: MouseEventHandler<HTMLButtonElement>;
    darkTheme: boolean;
}

const PersonalInfoEditButtons: FC<IProps> = ({ handleCloseModal, darkTheme }): JSX.Element => {
    const closeBtn = darkTheme ? "personal-info-edit-button__close-dark" : "personal-info-edit-button__close";
    const updateBtn = darkTheme ? "personal-info-edit-button__update-dark" : "personal-info-edit-button__update";

    return (
        <div className='personal-info-edit-button'>
            <button 
                className={closeBtn}
                onClick={handleCloseModal}
                type="button"
            >
                Close
            </button>
            <button 
                className={updateBtn}
            >
                Update
            </button>
        </div>
    )
}

export default PersonalInfoEditButtons