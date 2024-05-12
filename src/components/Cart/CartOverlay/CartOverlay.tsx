import { FC, MouseEventHandler, useContext, Context } from 'react'

import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    displayCart: boolean;
    handleHideCart: MouseEventHandler<HTMLDivElement>
}   

const CartOverlay: FC<IProps> = ({ displayCart, handleHideCart }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div 
			onClick={handleHideCart}
			className={`
                ${ displayCart ? "opacity-80" : "opacity-0 hidden" } 
                ${ darkTheme ? "bg-gray-900" : "bg-white" }
                fixed top-0 left-0 w-full h-screen transition-all duration-500 z-20
            `}>
        </div>
    )
}

export default CartOverlay