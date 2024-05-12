import { FC, useContext, Context } from 'react'

import { Routes } from '../../../../router/Routes'
import { Link } from 'react-router-dom'
import DarkThemeContext from '../../../../context/ThemeContext'
import { IDarkThemeContext } from '../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext'

const AuthResetPasswordSwitch: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className="flex justify-end mb-4">
            <Link
                className={`
                    ${ darkTheme ? "text-blue-600 hover:text-blue-700" : "text-blue-400 hover:text-blue-500" }
                    inline-block align-baseline font-bold text-sm transition-all
                `}
                to={Routes.RESET_PASSWORD}
            >
                Forgot Password?
            </Link>
        </div>
    )
}

export default AuthResetPasswordSwitch