import { FC, useContext, Context } from 'react'

import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    text: string;
}

const ChatSenderMessage: FC<IProps> = ({ text }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className='w-full border-gray-400 flex justify-end mb-2 last:mb-0'>
            <div className='w-1/3 flex justify-end'>
                <p className={`
                    ${ darkTheme ? "bg-gray-700" : "bg-gray-300" }
                     py-1 px-3
                `}>{text}</p>
            </div>
        </div>
    )
}

export default ChatSenderMessage