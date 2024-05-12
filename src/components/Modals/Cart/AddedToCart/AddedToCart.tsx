import { FC, MouseEventHandler, useContext, Context } from 'react'

import { Routes } from '../../../../router/Routes'
import { BsCartCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import DarkThemeContext from '../../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    handleCloseModal: MouseEventHandler<HTMLButtonElement>;
}

const AddedToCart: FC<IProps> = ({ handleCloseModal }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <>
            <div 
                className={`
                    ${darkTheme ? "bg-gray-900" : "bg-white"}
                    z-50 w-[500px] h-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col p-8 gap-8 transition-all outline-none
                `}
            >
                <div className='flex flex-col items-center gap-2'>
                    <BsCartCheck size={50} className='text-slate-500'/>
                    <h2 className='text-center'>You have successfully added this product to the cart!</h2>
                 </div>
                <div className='flex gap-2 items-center'>
                    <Link 
                        className={`
                            ${ darkTheme ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-500"}
                            transition-all text-white py-1.5 px-3
                        `}
                        to={Routes.CART}
                    >
                        View cart
                    </Link>
                    <button 
                        className={`
                            ${ darkTheme ? "bg-red-600 hover:bg-red-700" : "bg-red-400 hover:bg-red-500"}
                            transition-all text-white py-1.5 px-3
                        `}
                        onClick={handleCloseModal}
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddedToCart