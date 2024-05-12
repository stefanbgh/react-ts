import { FC, useContext, Context } from 'react'

import DarkThemeContext from '../../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

const FilterClear: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <button 
            type='submit' 
            className={`
                 text-white py-1 px-2 rounded-md  transition-all
                ${darkTheme ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-500"}
            `}
        >
            Clear filter
        </button>
    )
}

export default FilterClear