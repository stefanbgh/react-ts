import { FC, useContext, Context } from 'react'

import { TColors } from '../../../../../ts/types/TColors';
import { Link } from 'react-router-dom';
import { Routes } from '../../../../../router/Routes';

import { AddToCart, Bookmark, RoundColors, Stars } from "../../../.."
import { firstCapitalLatter } from '../../../../../utils/helpers/capitalFirstLetter';
import { calculationDiscount } from '../../../../../utils/helpers/calculationDiscount';
import DarkThemeContext from '../../../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    articleId: number
    articleName: string;
    brand: string;
    rating: number;
    status: string;
    description: string;
    price: number;
    discount: number;
    colors: TColors[];
    images: string[];
    productRoute: string;
    category: string;
    quantity: number;
}

const SingleProductList: FC<IProps> = ({ articleId, articleName, rating, status, description, price, discount, colors, images, productRoute, brand, category, quantity }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
    
    const newPrice = calculationDiscount(price, discount);
    
    return (
        <div className='w-full p-2'>
            <div className='border border-gray-400 h-[200px] flex'>
                <Link to={`${Routes.PRODUCTS}${productRoute}/${articleId}`}>
                    <div className='border-r border-gray-400 h-full w-[200px] bg-white'>
                        <img className='w-full h-full p-2' src={images[0]} alt="img" loading="lazy"/>
                    </div>
                </Link>
                <div className='py-2 px-4 w-full h-full flex flex-col justify-between'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <div className='flex'>
                                <Stars rating={rating} size={20}/>
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
                        <div className='flex items-center gap-1'>
                            <div className='bg-green-400 rounded-full w-2 h-2'></div>
                            <p>{firstCapitalLatter(status)}</p>
                        </div>
                    </div>
                    <h4>{articleName}</h4>
                    <p className='leading-5'>{description}</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col justify-between'>
                            <div className='flex items-center gap-2'>
                                <h4 className='font-bold'>${newPrice}</h4>
                                <p className='text-xs text-gray-400 line-through'>${price}</p>
                                <p className='text-red-400 font-bold'>({discount}% off)</p>
                            </div>
                            <div className='flex gap-2'>
                                <RoundColors articleId={articleId} colors={colors} largeSize={false}/> 
                            </div>
                        </div>
                        <AddToCart
                            articleId={articleId}
                            articleName={articleName}
                            brand={brand}
                            image={images[0]}
                            price={price}
                            quantity={quantity}
                            rating={rating}
                            category={category}
                            cartType={ darkTheme ? "list-dark" : "list"}
                            iconSize={18}
                            count={1}
                            discount={discount}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductList