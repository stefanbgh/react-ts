import { FC} from 'react'

import { Link } from 'react-router-dom';
import { Routes } from '../../../../router/Routes';

interface IProps {
    category: string;
    articleId: number;
}

const WishlistDetails: FC<IProps> = ({ category, articleId }): JSX.Element => {
    return (
        <Link 
            className='w-1/12 flex justify-center text-blue-400 hover:text-blue-500 transition-all' 
            to={`${Routes.PRODUCTS}/${category}/${articleId}`}>
                View
        </Link>
    )
}

export default WishlistDetails