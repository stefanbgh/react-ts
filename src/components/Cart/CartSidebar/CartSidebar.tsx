import { FC, Context, MouseEventHandler, useContext } from 'react'
import CartSidebarContent from '../CartSidebarContent/CartSidebarContent';
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    displayCart: boolean;
    handleHideCart: MouseEventHandler<HTMLElement>
}

const CartSidebar: FC<IProps> = ({ displayCart, handleHideCart }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div
            className={`
                ${ displayCart ? "right-0" : "-right-full" } 
                ${ darkTheme ? "bg-gray-900" : "bg-white" }
                w-[400px] fixed top-0 h-screen transition-all duration-500 z-30
            `}>
            { displayCart ? <CartSidebarContent handleHideCart={handleHideCart} darkTheme={darkTheme}/> : null }
        </div>
    )
}

export default CartSidebar