import { FC} from 'react'

import { Stars } from "../../../../../components"

interface IProps {
    averageRating: number;
}

const ProductRatingAverage: FC<IProps> = ({ averageRating }): JSX.Element => {
    return (
        <div className='flex flex-col p-6 gap-2 border border-r-gray-300 w-4/12'>
            <h4 className='text-slate-500'>Average Rating:</h4>
            <div className='flex'>
                <Stars rating={averageRating} size={24}/>
            </div>
        </div>
    )
}

export default ProductRatingAverage