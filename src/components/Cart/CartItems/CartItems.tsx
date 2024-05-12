import { FC, useEffect, useState } from 'react'

import { CartSingleItem, Spinner } from "../../../components"
import { RootState } from '../../../ts/types/RootState'
import { useAppSelector } from '../../../hooks/useAppSelector'

const CartItems: FC = (): JSX.Element => {
    const { myCart } = useAppSelector((state: RootState) => state.cart);

    const [ loading, setLoading ] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    if (loading) return <Spinner/>

    return (
        <>
            {
                myCart.length > 0 ? (
                    myCart.map((cart) => {
                        const { cartId, articleId, articleName, count, image, price, category, rating, brand } = cart;

                        return (
                            <CartSingleItem
                                key={cartId}
                                cartId={cartId}
                                articleId={articleId}
                                articleName={articleName}
                                brand={brand}
                                category={category}
                                rating={rating}
                                image={image}
                                count={count}
                                price={price}
                            />
                        )
                    })
                ) : null
            }
        </>
    ) 
}

export default CartItems