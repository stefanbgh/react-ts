import { FC} from 'react'
import { timestampToLocalString } from '../../../utils/helpers/timestampToLocalString';

interface IProps {
    reviewAnswer: {
        admin: string;
        answer: string;
        timestamp: number;
    };
}

const ProductAdminReview: FC<IProps> = ({ reviewAnswer: { admin, answer, timestamp } }): JSX.Element => {
    return (
        <div className=' flex'>
            <div className='w-1/12 relative'>
                <div className='border-2 border-l-gray-400 border-b-gray-400 w-1/2 h-1/2 absolute top-0 right-0'></div>
            </div>
            <div className='w-11/12 flex justify-between'>
                <div className='w-1/12 border border-gray-400 flex justify-center pt-4'>
                    <div className='border border-gray-400 rounded-full w-16 h-16'>

                    </div>
                </div>
                <div className='w-11/12 border border-gray-400 py-2 px-3 flex flex-col justify-between'>
                    <div className='flex justify-between items-center mb-4'>
                        <div>
                            <p>{admin}</p>
                            <p>Admin</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <h4>Date:</h4> 
                            <p className='font-base'>{timestampToLocalString(timestamp)}</p>
                        </div>
                    </div>
                    <div>
                        <p>{answer}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductAdminReview