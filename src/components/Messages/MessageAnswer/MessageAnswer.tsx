import { FC} from 'react'

import { timestampToLocalString } from '../../../utils/helpers/timestampToLocalString';
import { BiCheckDouble } from "react-icons/bi"

interface IProps {
    adminResponse: boolean;
    adminMessage: string;
    adminMessageTimestamp: number;
}

const MessageAnswer: FC<IProps> = ({ adminResponse, adminMessage, adminMessageTimestamp }): JSX.Element => {
    return (
        <>
            {
                adminResponse ? (
                    <div className='border-t border-t-gray-400 pt-2'>
                        <div className='flex justify-between items-center'>
                            <h4>Answer:</h4>
                            <div className='flex items-center gap-1'>
                                <h4>Date:</h4>
                                <p>{timestampToLocalString(adminMessageTimestamp)}</p>
                            </div>
                        </div>
                        <p>{adminMessage}</p>
                        <div className='flex justify-end items-center gap-1 text-gray-400'>
                            <p>Seen</p> 
                            <BiCheckDouble size={20}/>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default MessageAnswer