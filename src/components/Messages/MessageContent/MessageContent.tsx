import { FC} from 'react'

interface IProps {
    message: string;
}

const MessageContent: FC<IProps> = ({ message }): JSX.Element => {
    return (
        <div>
            <h4>Message:</h4>
            <p>{message}</p>
        </div>
    )
}

export default MessageContent