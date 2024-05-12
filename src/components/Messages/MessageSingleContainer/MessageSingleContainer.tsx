import { FC} from 'react'

import { MessageAnswer, MessageContent, MessageFrom, MessageTitle } from "../../../components"

interface IProps {
    adminResponse: boolean;
    adminName: string;
    title: string;
    timestamp: number;
    message: string;
    adminMessage: string;
    adminMessageTimestamp: number;
}

const MessageSingleContainer: FC<IProps> = ({ adminResponse, adminName, title, timestamp, message, adminMessage, adminMessageTimestamp }) => {
    return (
        <div 
            className="w-4/5 border border-gray-400 h-full"
        >
            <MessageFrom
                adminResponse={adminResponse}
                adminName={adminName}
            />
            <div className='p-4 flex flex-col gap-4'>
                <MessageTitle title={title} timestamp={timestamp}/>
                <MessageContent message={message}/>
                <MessageAnswer
                    adminResponse={adminResponse}
                    adminMessage={adminMessage}
                    adminMessageTimestamp={adminMessageTimestamp}
                />
            </div>
        </div>
    )
}

export default MessageSingleContainer