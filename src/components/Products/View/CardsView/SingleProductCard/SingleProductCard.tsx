import { FC, useContext, Context } from 'react'

import { Link } from 'react-router-dom';
import { Routes } from '../../../../../router/Routes';

import { AddToCart, Bookmark, RoundColors, Stars } from "../../../.."
import { TColors } from '../../../../../ts/types/TColors';
import { tooLongString } from '../../../../../utils/helpers/tooLongString';
import { calculationDiscount } from '../../../../../utils/helpers/calculationDiscount';
import DarkThemeContext from '../../../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    articleId: number;
    articleName: string;
    brand: string;
    status: string;
    colors: TColors[];
    price: number;
    discount: number;
    rating: number;
    images: string[];
    productRoute: string;
    category: string;
    quantity: number;
}

const SingleProductCard: FC<IProps> = ({ articleId, articleName, brand, colors, price, discount, rating, images, productRoute, status, category, quantity }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    const newPrice = calculationDiscount(price, discount);

    return (
        <div className='h-[465px] w-1/4 p-2'>
            <div className='border border-gray-400 h-full'>
                <div className='h-3/5'>
                    <Link to={`${Routes.PRODUCTS}${productRoute}/${articleId}`}>
                        <div className='border-b border-b-gray-400 h-full bg-transparent'>
                            <img className='w-full h-full p-2' src={images[0]} alt="img" loading="lazy"/>
                        </div>
                    </Link>
                </div>
                <div className='p-2 flex flex-col justify-between h-2/5'>
                    <div className='flex flex-col gap-2'>
                        <div className="flex justify-between items-center">
                            <div className='flex items-center gap-2'>
                                <RoundColors articleId={articleId} colors={colors} largeSize={false}/>
                            </div>
                            <Bookmark 
                                articleId={articleId} 
                                articleName={articleName}
                                price={newPrice}
                                status={status}
                                category={category}
                                image={images[0]}
                                size={20}
                            />
                        </div>
                        <h4>{tooLongString(articleName, 42)}</h4>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-end justify-between'>
                            <div>
                                <div className='flex items-end gap-2'>
                                    <p className='text-xs text-gray-400 line-through'>${price}</p>
                                    <p className='text-xs text-red-400 font-bold'>({discount}% off)</p>
                                </div>
                                <h4>${newPrice}</h4>
                            </div>
                            <div className='flex items-center'>
                                { <Stars rating={rating} size={20}/> }
                            </div>
                        </div>
                        <div className='w-full'>
                            <AddToCart
                                articleId={articleId}
                                articleName={articleName}
                                brand={brand}
                                image={images[0]}
                                price={price}
                                quantity={quantity}
                                rating={rating}
                                category={category}
                                cartType={ darkTheme ? "card-dark" : "card"}
                                iconSize={16}
                                count={1}
                                discount={discount}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductCard