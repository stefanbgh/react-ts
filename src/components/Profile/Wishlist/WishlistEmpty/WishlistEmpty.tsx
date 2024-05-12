import { FC, useContext, Context } from 'react'

import empty_wishlist from "../../../../assets/empty-wishlist.webp";
import { Link } from 'react-router-dom';
import { Routes } from '../../../../router/Routes';
import DarkThemeContext from '../../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

const WishlistEmpty: FC = (): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className='p-4 flex flex-col gap-6 justify-center items-center border border-gray-300 w-full h-[350px]'>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <img width={150} src={empty_wishlist} alt="img" loading="lazy"/>
                <h2>Your wishlist is empty.</h2>
            </div>
            <Link to={Routes.PRODUCTS}>
                <button 
                    className={`
                        ${ darkTheme ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-500" }
                        py-1 px-2  text-white rounded-md
                    `}>Start Shopping</button>
            </Link>
        </div>
    )
}

export default WishlistEmpty