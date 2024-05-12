import { FC} from 'react'

import { Banner, ChatButton, ChatField, ChatMessages, ChatSidebar, ChatStartTimestamp, ChatUsername } from '../../components'

import chat from "../../assets/chat.webp";
import Container from '../../containers/Container/Container';

const Chat: FC = (): JSX.Element => {
    return (
        <div>
            <Banner
                title='Chat'
                image={chat}
                bgPosition="bg-center"
                bgNoRepeat='bg-no-repeat'
            />
            <Container>
                <div className='py-6'>
                    <div className='flex gap-6'>
                        <ChatSidebar/>
                        <div className='w-4/5 border border-gray-400 h-full'>
                            <ChatUsername/>
                            <div className='h-[550px] overflow-auto'>
                                <ChatStartTimestamp/>
                                <div className='flex flex-col p-4'>
                                    <ChatMessages/>
                                </div> 
                            </div>
                            <div className='flex'>
                                <ChatField/>
                                <ChatButton/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Chat