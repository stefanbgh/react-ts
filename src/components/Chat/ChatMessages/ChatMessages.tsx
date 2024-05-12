import { FC} from 'react'

import { ChatSenderMessage, ChatRecipientMessage } from "../../../components"
import { chatMessagesData } from './chatMessagesData'

const ChatMessages: FC = (): JSX.Element => {
    // const userId = localStorage.getItem("userId");
    const userId = 10;

    return (
        <>
            {
                chatMessagesData.map((chatSingleMessage) => {
                    const { messageId, senderId, text } = chatSingleMessage;

                    return (
                        senderId === userId 
                            ? <ChatSenderMessage key={messageId} text={text}/> 
                            : <ChatRecipientMessage key={messageId} text={text}/>
                    )
                })
            }
        </>
    )
}

export default ChatMessages