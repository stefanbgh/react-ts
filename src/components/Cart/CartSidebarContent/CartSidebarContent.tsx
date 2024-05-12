import { FC, MouseEventHandler } from 'react'

import { Link } from 'react-router-dom'
import { Routes } from '../../../router/Routes'

import { MdOutlineCancel } from "react-icons/md";

interface IProps {
    handleHideCart: MouseEventHandler<HTMLElement>;
    darkTheme: boolean;
}

const CartSidebarContent: FC<IProps> = ({ handleHideCart, darkTheme }): JSX.Element => {
    return (
        <div>
            <div className="flex items-center justify-between p-4 border border-b-gray-200">
                <h3 className="font-bold text-xl">My Cart</h3>
                <div onClick={handleHideCart} className='cursor-pointer rounded-full'><MdOutlineCancel color="gray" size={26}/></div>
            </div>
            <div className="flex p-4 border border-b-gray-200">
                <div className="w-1/4">
                    <div className="bg-blue-300 w-[75px] h-[100px]"></div>
                </div>
                <div className='flex flex-col justify-between ml-2 w-2/4'>
                    <div>
                        <p>Article Name</p>
                        <p>$price | o status</p>
                    </div>
                    <div className="border border-gray-100 flex items-center justify-between p-1 w-3/4">
                        <div className="bg-gray-100 w-3/12 text-center">-</div>
                        <div className="w-6/12 text-center">1</div>
                        <div className="bg-gray-100 w-3/12 text-center">+</div>
                    </div>
                </div>
                <div className="ml-2 flex flex-col justify-between w-1/4">
                    <div className='flex justify-end'>
                    <MdOutlineCancel color="gray" size={22}/>
                    </div>
                    <div className='flex justify-end'>$totalPrice</div>
                </div>
            </div>
            <div className='p-4 border border-b-gray-200'>
                <div className='flex justify-between mb-4'>
                    <p>Shipping Charge :</p>
                    <p>$shipingChargePrice</p>
                </div>
                <div className='flex justify-between'>
                    <p>Estimated Tax (12.5%) :</p>
                    <p>$eslimitedTaxPrice</p>
                </div>
            </div>
            <div className='p-4'>
                <div className='flex justify-between mb-4'>
                    <p>Total Amount:</p>
                    <p>$totalAmountPrice</p>
                </div>
                <div className='flex'>
                    <Link onClick={handleHideCart} to={Routes.CART}>
                        <button 
                            className={`
                                ${ darkTheme ? "border border-gray-800 bg-gray-800 hover:bg-gray-900" : "bg-gray-200 hover:bg-gray-300" }
                                py-1 px-3 transition-all
                            `}>
                                View Cart
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartSidebarContent