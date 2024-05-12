import { FC, MouseEventHandler } from 'react'

import { RiDeleteBin6Line } from 'react-icons/ri';

interface IProps {
    handleCloseModal: MouseEventHandler<HTMLButtonElement>;
    handleRemoveFromCart: (cId: number) => void;
    cartId: number;
    darkTheme: boolean;
}

const RemoveFromCart: FC<IProps> = ({ handleCloseModal, handleRemoveFromCart, cartId, darkTheme }): JSX.Element => {
    return (
        <>
            <div className={`
                    ${ darkTheme ? "bg-gray-900" : "bg-white" }
                    z-50 w-[500px] h-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col p-8 gap-8 transition-all outline-none
                `}
            >
                <div className='flex flex-col items-center gap-2'>
                    <RiDeleteBin6Line size={50} className={ darkTheme ? "text-red-600" : "text-red-400"}/>
                    <h2 className='text-center'>Are you sure you want to remove this product from the cart?</h2>
                 </div>
                <div className='flex gap-2 items-center'>
                    <button 
                        className={`
                            ${ darkTheme ? "bg-gray-800 hover:bg-gray-700 text-gray-100" : "hover:bg-gray-400 text-gray-600 hover:text-white" }
                            border border-gray-400  transition-all  py-1.5 px-3
                        `}
                        onClick={handleCloseModal}
                    >
                        Close
                    </button>
                    <button 
                        className={`
                            ${ darkTheme ? "bg-red-600 hover:bg-red-700" : "bg-red-400 hover:bg-red-500" }
                             transition-all text-white py-1.5 px-3
                        `}
                        onClick={() => handleRemoveFromCart(cartId)}
                    >
                        Yes, I'm sure
                    </button>
                </div>
            </div>
        </>
    )
}

export default RemoveFromCart