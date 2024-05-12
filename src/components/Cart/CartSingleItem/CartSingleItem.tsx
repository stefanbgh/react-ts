import { FC} from 'react'

import { CartArticleImage, CartArticleInfo, CartArticlePrice, CartArticleRemove, Quantity } from "../../../components"

interface IProps {
    cartId: number;
    articleId: number;
    articleName: string;
    brand: string;
    category: string;
    rating: number;
    image: string;
    count: number;
    price: number;
}

const CartSingleItem: FC<IProps> = ({ cartId, articleId, articleName, brand, category, rating, image, count, price }): JSX.Element => {
    return (
        <>
            <div className='border border-gray w-full h-[175px] flex items-center justify-between'>
                <CartArticleImage articleId={articleId} category={category} image={image}/>
                <div className='w-3/5 h-full border border-gray-300 flex flex-col justify-between p-4'>
                    <CartArticleInfo
                        articleName={articleName}
                        category={category}
                        brand={brand}
                        rating={rating}
                    />
                    <div className='flex justify-between items-center gap-1'>
                        <Quantity
                            count={count}
                            cartId={cartId}
                            quantityType='cart'
                        />
                        <CartArticleRemove 
                            cartId={cartId}
                        />
                    </div>
                </div>
                <CartArticlePrice
                    cartId={cartId}
                    count={count}
                    price={price}
                />
            </div>
        </>
    )
}

export default CartSingleItem