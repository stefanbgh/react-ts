import { FC} from 'react'
import { Link } from 'react-router-dom';
import { Routes } from '../../../router/Routes';

interface IProps {
    articleId: number;
    category: string;
    image: string;
}

const CartArticleImage: FC<IProps> = ({ articleId, category, image }): JSX.Element => {
    return (
        <Link to={`${Routes.PRODUCTS}/${category}/${articleId}`} className='p-4 w-1/5 h-full border border-gray-300'>
            <div className='w-full h-full flex items-center justify-center'>
                <img width={150} src={image} alt="img" loading="lazy"/>
            </div>
        </Link>
    )
}

export default CartArticleImage