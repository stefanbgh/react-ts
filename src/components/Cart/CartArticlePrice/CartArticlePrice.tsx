import { FC, useEffect } from 'react'

import numeral from 'numeral';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { UPDATE_SINGLE_ARTICLE } from '../../../features/slices/cartSlice';

interface IProps {
    cartId: number;
    price: number;
    count: number;
}

const CartArticlePrice: FC<IProps> = ({ cartId, price, count }): JSX.Element => {
    const numeralPrice = numeral(price).format("0,0.00");
    const numeralTotalPrice = numeral(price * count).format("0,0.00");

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(UPDATE_SINGLE_ARTICLE({ cartId, count, price }));

        // eslint-disable-next-line
    }, [count, cartId, price]);
    
    return (
        <div className='w-1/5 h-full border border-gray-300 p-4 flex flex-col items-end justify-between'>
            <div>
                <p>Article Price:</p>
                <h4>${numeralPrice}</h4>
            </div>
            <div className='flex items-center gap-1'>
                <p>Total:</p>
                <h4>${numeralTotalPrice}</h4>
            </div>
        </div>
    )
}

export default CartArticlePrice