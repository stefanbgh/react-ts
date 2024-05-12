import { FC, useContext, Context } from 'react'

import DarkThemeContext from '../../../context/ThemeContext'
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext'
import { BsSend } from "react-icons/bs"

const ChatButton: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <button 
            className={`
                ${ darkTheme ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-500" }
                w-1/5 py-1 px-3 text-gray-100 flex items-center justify-center gap-2 transition-all
            `}>
            <p>Send</p>
            <BsSend size={18} className='text-gray-100'/>
        </button>
    )
} 

export default ChatButton