import { FC} from 'react'

interface IProps {
    price: number;
}

const WishlistPrice: FC<IProps> = ({ price }): JSX.Element => {
    return (
        <div className='w-1/12'>
            <p>${price}</p>
        </div>
    )
}

export default WishlistPrice