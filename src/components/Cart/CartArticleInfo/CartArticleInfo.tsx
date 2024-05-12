import { FC} from 'react'

import { Stars } from "../../../components"

interface IProps {
    articleName: string;
    rating: number;
    category: string;
    brand: string;
}

const CartArticleInfo: FC<IProps> = ({ articleName, rating, category, brand }): JSX.Element => {
    return (
        <div className='flex flex-col gap-1'>
            <h4>{articleName}</h4>
            <div className='flex'>
                <Stars rating={rating} size={20}/>
            </div>
            <div className='leading-4'>
                <p className='text-sm text-gray-400'>Category: {category}</p>
                <p className='text-sm text-gray-400'>Brand: {brand}</p>
            </div>
        </div>
    )
}

export default CartArticleInfo