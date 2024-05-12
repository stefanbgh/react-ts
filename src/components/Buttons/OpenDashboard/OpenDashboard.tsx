import { FC, useContext, Context } from 'react'

import { Link } from 'react-router-dom'
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';
import { Routes } from '../../../router/Routes';

const OpenDashboard: FC = (): JSX.Element => {
    const token = localStorage.getItem("token");
	const checkToken = token === import.meta.env.VITE_ADMIN_TOKEN ? true : false;

	const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className="flex items-center">
            {
                checkToken && (
                    <Link to={Routes.DASHBOARD}>
                        <button className={`
                            ${ darkTheme ? "bg-gray-700 hover:bg-gray-800" : "bg-red-400 hover:bg-red-500" }
                                py-1 px-3 rounded-lg text-gray-100 transition-all
                            
                        `}>
                            Dashboard
                        </button>
                    </Link>
                )
            }
        </div>
    )
}

export default OpenDashboard