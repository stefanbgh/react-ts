import { FC, useEffect, useState } from 'react'

import cartImage from "../../assets/cart.webp";
import { Banner, CartItems, CartServices, CartSummary, CartLength } from '../../components'
import { Container } from '../../containers';
import { useGetAllCartsQuery } from '../../features/API/cartAPI';
import { useAppSelector } from '../../hooks/useAppSelector';
import { RootState } from '../../ts/types/RootState';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { MY_CART, RESET_TOTAL_AMOUNT } from '../../features/slices/cartSlice';

const Cart: FC = (): JSX.Element => {
    useGetAllCartsQuery();
    const userId = localStorage.getItem("userId");

    const { cart } = useAppSelector((state: RootState) => state.cart);
    const [ len , setLen ] = useState<number>(0);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const getMyCart = cart.filter((c) => c.userId === userId);

        setLen(getMyCart.length);
        dispatch(MY_CART(getMyCart));

        if (getMyCart.length === 0) {
            dispatch(RESET_TOTAL_AMOUNT());
        }

        // eslint-disable-next-line
    }, [cart, userId]);

    return (
        <div>
            <Banner 
                title="Cart"
                bgPosition="bg-center"
                image={cartImage}
            />
            <Container>
                <div className='flex justify-between py-6'>
                    <CartServices/>
                </div>
                <div className="flex justify-between gap-6 py-6">
                    <div className='w-2/3'>
                        <CartLength
                            len={len}
                        />
                        <CartItems/>
                    </div>
                    <div className='h-full w-1/3'>
                        <CartSummary/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Cart