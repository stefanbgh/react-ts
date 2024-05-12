import { FC} from 'react'

import { ProductRatingAverage, ProductRatingsProgress, ProductRatingsTitle, ProductRatingsTotal } from "../../../../components"

interface IProps {
    totalRatings: number;
    averageRating: number;
}

const ProductRatings: FC<IProps> = ({ totalRatings, averageRating }): JSX.Element => {
    return (
        <div className='border border-gray-300 mb-6'>
            <ProductRatingsTitle/>
            <div className='flex justify-between w-full'>
                <ProductRatingsTotal totalRatings={totalRatings}/>
                <ProductRatingAverage averageRating={averageRating}/>
                <ProductRatingsProgress ratingReviews={averageRating}/>
            </div>
        </div>
    )
}

export default ProductRatings