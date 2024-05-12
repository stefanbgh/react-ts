import { FC, Dispatch, SetStateAction, useContext, Context } from 'react'

import { timeAgo } from '../../../utils/helpers/timeAgo';
import { tooLongString } from '../../../utils/helpers/tooLongString';
import { useUpdateSeenInSingleMessageForSupportMutation } from '../../../features/API/supportMessagesAPI';
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    title: string;
    messageId: number;
    message: string;
    changeTimestamp: number;
    activeMessage: number;
    setActiveMessage: Dispatch<SetStateAction<number>>;
    adminResponse: boolean;
    seen: boolean;
}

const MessageSidebarNotifications: FC<IProps> = ({ title, message, messageId, changeTimestamp, activeMessage, setActiveMessage, adminResponse, seen }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
    
    const [ updateSeenInSingleMessageForSupport ] = useUpdateSeenInSingleMessageForSupportMutation();
    
    const handleClickSingleNotification = (messageId: number) => { 
        updateSeenInSingleMessageForSupport({
            messageId,
            seen: true
        });
        setActiveMessage(messageId);
    };

    return (
        <div 
            className={`
                ${
                    activeMessage === messageId 
                        ? darkTheme 
                            ? "bg-gray-800"
                            : "bg-blue-50"
                        : ""
                }
                flex border-b border-b-gray-400 cursor-pointer
            `}
            onClick={() => handleClickSingleNotification(messageId)}
        >
            <div className='h-[75px] w-1/5 p-2'>
                <div className='bg-blue-400 rounded-full h-[40px] w-[40px]'></div>
            </div>
            <div className='p-2 w-full'>
                <div className='flex items-center justify-between'>
                    <p>{tooLongString(title, 16)}</p>
                    {
                        adminResponse ? (
                            !seen
                                ? <div className='bg-green-400 text-white text-xs font-bold py-0.5 px-1.5 rounded-md'>new</div> 
                                : null
                        ) : null
                    }
                </div>  
                <p className='text-sm'>{tooLongString(message, 20)}</p>
                <p className='text-sm text-gray-500 pt-2'>{timeAgo(changeTimestamp)}</p>
            </div>
        </div>
    )
}

export default MessageSidebarNotifications