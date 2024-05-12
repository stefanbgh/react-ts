import { FC} from 'react'

import { timestampToLocalString } from '../../../../utils/helpers/timestampToLocalString';

interface IProps {
    timestamp: number;
}

const PersonalSinceMember: FC<IProps> = ({ timestamp }): JSX.Element => {
    const sinceMember = timestampToLocalString(timestamp);

    return (
        <div className='flex w-full'>
            <p className='w-1/2'>Since Member:</p>
            <p className='w-1/2'>{sinceMember}</p>
        </div>
    )
}

export default PersonalSinceMember