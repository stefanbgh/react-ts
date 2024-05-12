import { FC, useEffect, useContext, Context } from 'react'

import { useAppSelector } from '../../../hooks/useAppSelector'
import { RootState } from '../../../ts/types/RootState'
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { UPDATE_TOTAL_AMOUNT } from '../../../features/slices/cartSlice';
import { shippingCharge } from '../../../constants/shippingCharge';
import numeral from 'numeral';
import { calculationEstimatedTax } from '../../../utils/calculationEstimedTax';
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

const CartSummary: FC = (): JSX.Element => {
    const { totalAmount, myCart } = useAppSelector((state: RootState) => state.cart);
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    const numeralTotalAmount = numeral(totalAmount).format("0,00.00");
    const estimatedTax = calculationEstimatedTax(totalAmount);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (myCart.length > 0) {
            dispatch(UPDATE_TOTAL_AMOUNT(myCart));
        }

        // eslint-disable-next-line
    }, [myCart]);

    return (
        <>
            <div className='border border-gray-300 '>
                <div className='p-4 border border-b-gray-300'>
                    <p>Cart Summary:</p>
                </div>
                <div className='p-4 border border-b-gray-200'>
                    <div className='flex justify-between mb-4'>
                        <p>Shipping Charge:</p>
                        <p>${shippingCharge}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Estimated Tax (12.5%) :</p>
                        <p>${estimatedTax}</p>
                    </div>
                </div>
                <div className={`
                    ${ darkTheme ? "bg-gray-800" : "bg-gray-200" }
                     p-4
                `}>
                    <div className='flex justify-between font-bold text-slate-500'>
                        <p>Total amount:</p>
                        <p>${numeralTotalAmount}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end mt-4'>
                <button className='w-1/2 bg-green-400 text-white py-1 px-3'>Order</button>
            </div>
        </>
    )
}

export default CartSummary