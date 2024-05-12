import { FC, MouseEventHandler } from 'react'

import { BsBookmarkX } from 'react-icons/bs';

interface IProps {
    handleCloseModal: MouseEventHandler<HTMLButtonElement>;
    darkTheme: boolean;
}

const WishlistRemovedProduct: FC<IProps> = ({ handleCloseModal, darkTheme }): JSX.Element => {
    return (
        <>
            <div className={`
                    ${ darkTheme ? "bg-gray-900" : "bg-white" }
                    z-50 w-[500px] h-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col p-8 gap-8 transition-all outline-none
                `}>
                <div className='flex flex-col items-center gap-2'>
                    <BsBookmarkX size={50} className={ darkTheme ? "text-red-600" : "text-red-400"}/>
                    <h2 className='text-center'>You have removed this product from your wishlist.</h2>
                 </div>
                <div className='flex gap-2 items-center'>
                    <button 
                        className={`
                            ${ darkTheme ? "bg-red-600 hover:bg-red-700" : "bg-red-400 hover:bg-red-500" }
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

export default WishlistRemovedProduct