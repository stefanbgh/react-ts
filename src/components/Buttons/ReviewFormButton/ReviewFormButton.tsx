import { FC, useContext, Context } from 'react'

import DarkThemeContext from '../../../context/ThemeContext'
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext'

const ReviewFormButton: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className="flex justify-end">
            <button 
                className={`
                    ${ darkTheme ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-500" }
                    text-white py-2 px-4 rounded-lg
                `}
                type="submit"
            >
                Send review
            </button>
        </div>
    )
}

export default ReviewFormButton