import { FC} from 'react'

const ChatField: FC = (): JSX.Element => {
    return (
        <input 
            className='w-4/5 py-2 px-3 bg-transparent border border-gray-200 focus:outline-gray-500' 
            type="text" 
            placeholder='Enter your message'
        />
    )
} 

export default ChatField