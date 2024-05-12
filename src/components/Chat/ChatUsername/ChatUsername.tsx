import { FC } from 'react'

// interface IProps {
//     username: string;
// }

const ChatUsername: FC = (): JSX.Element => {
    return (
        <div className='text-center py-4 border-b border-b-gray-400'>
            <p>$username</p>
        </div>
    )
}

export default ChatUsername