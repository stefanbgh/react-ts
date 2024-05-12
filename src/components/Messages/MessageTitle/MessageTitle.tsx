import { FC} from 'react'
import { timestampToLocalString } from '../../../utils/helpers/timestampToLocalString';

interface IProps {
    title: string;
    timestamp: number;
}

const MessageTitle: FC<IProps> = ({ title, timestamp }): JSX.Element => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-1'>
                <h4>Title:</h4>
                <p>{title}</p>
            </div>
            <div className='flex items-center gap-1'>
                <h4>Date:</h4>
                <p>{timestampToLocalString(timestamp)}</p>
            </div>
        </div>
    )
}

export default MessageTitle