import { FC} from 'react'

import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { calculationDiscount } from '../../../../utils/helpers/calculationDiscount'

interface IProps {
    price: number;
    discount: number;
}

const ProductPrice: FC<IProps> = ({ price, discount }): JSX.Element => {
    return (
    <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
                <h3 className='font-bold text-lg'>${calculationDiscount(price, discount)}</h3>
                <p className='line-through text-gray-400'>${price}</p>
                <h3 className='text-red-500 font-bold ml-2'>({discount}% off)</h3>
            </div>
            <div className='flex items-center gap-2'>
                <IoMdCheckmarkCircleOutline className='text-green-400' size={24}/>
                <h3>Free delivery available</h3>
            </div>
        </div>
    )
}

export default ProductPrice