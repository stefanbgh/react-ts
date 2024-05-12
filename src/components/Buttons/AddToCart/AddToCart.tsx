import { FC, useEffect, useState, useContext, Context } from 'react'

import { useAddToCartMutation, useGetAllCartsQuery } from '../../../features/API/cartAPI';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { Modal } from '@mui/material';
import { AddedToCart, AlreadyAddedToCart, ContentAddToCart, ContentAddedToCart } from "../../../components"

import { findCartId } from '../../../utils/findCartId';
import { calculationDiscount } from '../../../utils/helpers/calculationDiscount';

import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

import "./AddToCart.scss"

interface IProps {
    articleId: number;
    articleName: string;
    price: number;
    discount: number;
    quantity: number;
    image: string;
    rating: number;
    category: string;
    cartType: string;
    iconSize: number;
    count: number;
    brand: string;
}

const AddToCart: FC<IProps> = ({ articleId, articleName, price, discount, quantity, image, rating, category, cartType, iconSize, count, brand }): JSX.Element => {
    useGetAllCartsQuery();

    const userId = localStorage.getItem("userId");
    const { cart } = useAppSelector((state: RootState) => state.cart);

    const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false);
    const [ isAlreadyAdded, setIsAlreadyAdded ] = useState<boolean>(false);
    const [ clickedAddToCart, setClickedAddToCart ] = useState<boolean>(false);

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    const [ addToCart ] = useAddToCartMutation();

    useEffect(() => {
        const addedToCart = findCartId(cart, userId, articleId, category);
        
        if (addedToCart) setIsAlreadyAdded(true);
    
        // eslint-disable-next-line
    }, [cart, category]);
    
    const handleAddToCart = (artId: number, c: string) => { 
        setModalIsOpen(true);

        const calcPrice = calculationDiscount(price, discount);
        const totalPrice = calcPrice * count;
    
        if (!isAlreadyAdded) {
            addToCart({ userId: userId as string, articleId: artId, articleName, category: c, image, price: calcPrice, quantity, rating, count, brand, totalPrice });
            setClickedAddToCart(true);

            return;
        };

        setClickedAddToCart(false);
    };
    

    const handleCloseModal = () => setModalIsOpen(false);

    return (
        <>
            <button 
                className={isAlreadyAdded ? `added-to-cart__${cartType}` : `add-to-cart__${cartType}`}
                onClick={() => handleAddToCart(articleId, category)}
            >
                {
                    isAlreadyAdded
                        ? <ContentAddedToCart iconSize={iconSize}/>
                        : <ContentAddToCart iconSize={iconSize}/>
                }
            </button>
            <Modal
                open={modalIsOpen}
                onClose={handleCloseModal}
                className={ darkTheme ? "bg-gray-900 bg-opacity-80" : "bg-white bg-opacity-80"}
                children={
                    clickedAddToCart
                        ? <AddedToCart handleCloseModal={handleCloseModal}/>
                        : <AlreadyAddedToCart/>
                }
            />
        </>
    )
}

export default AddToCart