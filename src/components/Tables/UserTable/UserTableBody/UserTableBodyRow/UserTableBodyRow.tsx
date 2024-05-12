import { FC, useContext, Context } from 'react'

import { checkRole } from '../../../../../utils/helpers/checkRole';
import DarkThemeContext from '../../../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

import "./UserTableBodyRow.scss";

interface IProps {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    token: string
}

const UserTableBodyRow: FC<IProps> = ({ firstName, lastName, email, username, token }): JSX.Element => {
    const role = checkRole(token);

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <tr className={ darkTheme ? "user-table-body-row__dark" : "user-table-body-row" }>
            <td className="px-6 py-4">{firstName}</td>
            <td className="px-6 py-4">{lastName}</td>
            <td className="px-6 py-4">{email}</td>
            <td className="px-6 py-4">@{username}</td>
            <td className="px-6 py-4">{role}</td>
            <td className="px-6 py-4">
                <button className={ darkTheme ? "user-table-body-row__button_dark" : "user-table-body-row__button" }>
                    Edit
                </button>
            </td>
        </tr>
    )
}

export default UserTableBodyRow