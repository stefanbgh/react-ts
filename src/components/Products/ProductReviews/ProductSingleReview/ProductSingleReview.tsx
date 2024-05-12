import { FC} from 'react'

import { ProductAdminReview, Stars } from "../../.."
import { timestampToLocalString } from '../../../../utils/helpers/timestampToLocalString';

interface IProps {
    username: string;
    reviewRating: number;
    reviewTimestamp: number;
    reviewTitle: string;
    reviewText: string;
    adminResponse: boolean;
    reviewAnswer: {
        admin: string;
        answer: string;
        timestamp: number;
    };
}

const ProductSingleReview: FC<IProps> = ({ username, reviewRating, reviewTimestamp, reviewTitle, reviewText, adminResponse, reviewAnswer }): JSX.Element => {
    return (
        <div className='w-full mb-4 last:mb-0'>
            <div className='flex'>
                <div className='w-1/12 border border-gray-400 flex justify-center pt-4'>
                    <div className='border border-gray-400 rounded-full w-20 h-20'>

                    </div>
                </div>
                <div className='w-11/12 border border-gray-400 py-2 px-3 flex flex-col justify-between'>
                    <div className='flex justify-between items-center mb-4'>
                        <div>
                            <p>@{username}</p>
                            <div className='flex'>
                                <Stars rating={reviewRating} size={24}/>
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <h4>Date:</h4> 
                            <p className='font-base'>{timestampToLocalString(reviewTimestamp)}</p>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-bold'>{reviewTitle}</h4>
                        <p>{reviewText}</p>
                    </div>
                </div>
            </div>
            {
                adminResponse
                ? <ProductAdminReview reviewAnswer={reviewAnswer}/>
                : null
            }
        </div>
    )
}

export default ProductSingleReview