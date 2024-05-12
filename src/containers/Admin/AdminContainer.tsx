import { FC, ReactNode } from 'react'

import "./AdminContainer.scss";

interface IProps {
    children: ReactNode;
    darkTheme: boolean;
}

const AdminContainer: FC<IProps> = ({ children, darkTheme }): JSX.Element => {
    return (
        <div className={ darkTheme ? "admin__container-dark" : "admin__container" }>
            {children}
        </div>
    )
}

export default AdminContainer