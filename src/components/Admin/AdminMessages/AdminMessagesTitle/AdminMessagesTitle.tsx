import { FC} from 'react'

import "./AdminMessagesTitle.scss";

interface IProps {
    darkTheme: boolean;
}

const AdminMessagesTitle: FC<IProps> = ({ darkTheme }): JSX.Element => {
    return (
        <div className={ darkTheme ? "admin-messages-title_dark" : "admin-messages-title" }>
            <h3 className={ darkTheme ? "admin-messages-title__content_dark" : "admin-messages-title__content" }>
                Messages
            </h3>
        </div>
    )
}

export default AdminMessagesTitle