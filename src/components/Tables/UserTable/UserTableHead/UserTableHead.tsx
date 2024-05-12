import { FC, useContext, Context } from 'react'

import DarkThemeContext from '../../../../context/ThemeContext'
import { IDarkThemeContext } from '../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext'
import { userTableHeadData } from './userTableHeadData';

import "./UserTableHead.scss"

const UserTableHead: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <thead className={ darkTheme ? "user-table-head__dark" : "user-table-head" }>
            <tr>
            {
                userTableHeadData.map((tableHead) => {
                    const { id, text, cN } = tableHead;

                    return (
                        <th 
                            key={id}
                            scope="col" 
                            className={cN}
                        >
                            {text}
                        </th>
                    )
                })
            }
            </tr>
        </thead>
    )
}

export default UserTableHead