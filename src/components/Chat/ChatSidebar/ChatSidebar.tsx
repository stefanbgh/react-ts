import { FC, useContext, Context } from 'react'

import DarkThemeContext from '../../../context/ThemeContext'
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext'

const ChatSidebar: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className='w-1/5 border border-gray-400 h-full'>
            <div className='w-full'>
                <button 
                    className={`
                        ${ darkTheme ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-500" }
                         text-white h-full w-full py-4 transition-all
                    `}
                >
                    + New Chat
                </button>
            </div>
            <div className='flex border-b border-b-gray-400'>
                <div className='h-[75px] w-1/5 p-2'>
                    <div className='bg-red-300 rounded-full h-[40px] w-[40px]'></div>
                </div>
                <div className='p-2'>
                    <div className='flex items-center justify-between'>
                        <p>$username</p>
                        <p>$ts</p>
                    </div>
                    <p>Lorem ipsum dolor sit...</p>
                </div>
            </div>
        </div>
    )
}

export default ChatSidebar