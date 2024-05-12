import { FC} from 'react'

interface IProps {
    articleName: string;
    category: string;
}

const WishlistArticleName: FC<IProps> = ({ articleName, category }): JSX.Element => {
    return (
        <div className='w-7/12'>
            <div className='flex flex-col justify-between'>
                <p>{articleName}</p>
                <p className='text-gray-400 text-sm'>Category: {category}</p>
            </div>
        </div>
    )
}

export default WishlistArticleName