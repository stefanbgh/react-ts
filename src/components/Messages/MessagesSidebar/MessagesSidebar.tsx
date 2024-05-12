import { FC, Dispatch, SetStateAction } from 'react'

import { ISupportMessage } from '../../../ts/interfaces/ISupport/ISupportMessage';
import { MessageSidebarNotifications, MessageEmptyContainer } from "../../../components";

interface IProps {
    myMessagesForSupport: ISupportMessage[];
    activeMessage: number;
    setActiveMessage: Dispatch<SetStateAction<number>>;
}

const MessagesSidebar: FC<IProps> = ({ myMessagesForSupport, activeMessage, setActiveMessage }): JSX.Element => {
    return (
        <>
            {
                myMessagesForSupport.length > 0 ? (
                    <div className='w-1/5 border border-gray-400 flex flex-col h-[350px] overflow-auto'>
                        <div className='p-4 border-b border-b-gray-400'>Notifications</div>
                        {
                            myMessagesForSupport.map((supportSingleMessage: ISupportMessage) => {
                                const { messageId, title, message, changeTimestamp, adminResponse, seen } = supportSingleMessage;
        
                                return (
                                    <MessageSidebarNotifications
                                        key={messageId}
                                        messageId={messageId}
                                        activeMessage={activeMessage}
                                        setActiveMessage={setActiveMessage}
                                        title={title}
                                        message={message}
                                        changeTimestamp={changeTimestamp}
                                        adminResponse={adminResponse}
                                        seen={seen}
                                    />
                                )
                            })
                        }
                    </div>
                ) : <MessageEmptyContainer/>
            }
        </>
    )
}

export default MessagesSidebar