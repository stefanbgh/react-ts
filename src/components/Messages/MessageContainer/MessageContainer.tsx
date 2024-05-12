import { FC, Fragment } from 'react'

import { MessageContainerChooseNotification, MessageSingleContainer } from "../.."
import { ISupportMessage } from '../../../ts/interfaces/ISupport/ISupportMessage';

interface IProps {
    myMessagesForSupport: ISupportMessage[];
    activeMessage: number;
}

const MessageContainer: FC<IProps> = ({ myMessagesForSupport, activeMessage }): JSX.Element => {
    return (
        <>
        {
            myMessagesForSupport.length > 0 ? (
                activeMessage !== 0 ? (
                    <>
                    {
                        myMessagesForSupport.map((singleMessage: ISupportMessage) => {
                            const { messageId, title, timestamp, message, adminResponse, answer: { adminName, adminMessage, adminMessageTimestamp } } = singleMessage;

                            return (
                                <Fragment key={messageId}>
                                    {
                                        messageId === activeMessage ? (
                                            <MessageSingleContainer
                                                title={title}
                                                timestamp={timestamp}
                                                message={message}
                                                adminResponse={adminResponse}
                                                adminName={adminName!}
                                                adminMessage={adminMessage!}
                                                adminMessageTimestamp={adminMessageTimestamp!}
                                            />
                                        ) : null
                                    }
                                </Fragment>
                            )
                        })
                    }
                    </>
                ) : <MessageContainerChooseNotification/>
            ) : null
        }
        </>
    )
}

export default MessageContainer