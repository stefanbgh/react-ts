import { FC} from 'react'

interface IProps {
    totalRatings: number;
}

const ProductRatingsTotal: FC<IProps> = ({ totalRatings }): JSX.Element => {
    return (
        <div className='flex flex-col p-6 gap-2 border border-r-gray-300 w-4/12'>
            <h4>Total Ratings:</h4>
            <p>{totalRatings}</p>
        </div>
    )
}

export default ProductRatingsTotal