import { FC, Fragment, useContext, Context } from 'react'

import { NavLink } from 'react-router-dom'
import { navigationData } from './navigationData'
import DarkThemeContext from '../../../context/ThemeContext'
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext'

const Navigation: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <nav>
            <ul className="navbar__navigation">
                {
                    navigationData.map((nav) => {
                        const { id, route, text } = nav;

                        return (
                            <Fragment key={id}>
                                <NavLink
                                    className={({ isActive }) => (
                                        isActive 
                                            ? darkTheme 
                                                ? "navbar__navigation-single-active-dark"
                                                : "navbar__navigation-single-active"
                                            : darkTheme 
                                                ? "navbar__navigation-single-dark"
                                                : "navbar__navigation-single"
                                    )}
                                    to={route}
                                >
                                    <li>{text}</li>
                                </NavLink>
                            </Fragment>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation