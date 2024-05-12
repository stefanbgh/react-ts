import { FC, useContext, Context } from 'react'

import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    len: number;
}

const CartLength: FC<IProps> = ({ len }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className='flex justify-between items-center border border-gray-300 mb-6 h-[50px] p-4'>
            <p className='flex items-center gap-1'>
                There are 
                <span className={`
                    ${len === 0 ? "text-red-400" : "text-slate-500"}
                    font-bold
                `}>
                    {len}
                </span> 
                products in your cart
            </p>
            <button className={`
                ${ darkTheme ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-500" }
                text-gray-100 py-1 px-3 transition-all
            `}>
                Clear Cart
            </button>
        </div>
  )
}

export default CartLength