import { FC, useContext, Context } from 'react'

import { Link } from 'react-router-dom'
import DarkThemeContext from '../../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    question: string;
    route: string;
    page: string;
}

const AuthFormSwitch: FC<IProps> = ({ question, route, page }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className="flex text-base justify-center mb-4">
            <p>{question}</p>
            <Link 
                className={`
                    ${ darkTheme ? "text-blue-600 hover:text-blue-700" : "text-blue-400 hover:text-blue-500" }
                    font-bold ml-1 transition-all
                `}
                to={route}
            >
                    {page}
            </Link>
        </div>
    )
}

export default AuthFormSwitch