import { FC} from 'react'

interface IProps {
    adminResponse: boolean;
    adminName: string;
}

const MessageFrom: FC<IProps> = ({ adminResponse, adminName }): JSX.Element => {
    return (
        <div className='text-center py-4 border-b border-b-gray-400'>
            {
                adminResponse
                    ? <p>Message from @{adminName}</p>
                    : <p>Your Message to Us</p>
            }
        </div>
    )
}

export default MessageFrom