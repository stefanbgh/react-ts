import { FC, MouseEventHandler } from 'react'

import { RiDeleteBin6Line } from 'react-icons/ri'

interface IProps {
    wishlistId: number;
    handleCloseModal: MouseEventHandler<HTMLButtonElement>;
    handleRemoveFromWishlist: (wId: number) => void;
    darkTheme: boolean;
}

const QuestionRemoveFromWishlist: FC<IProps> = ({ wishlistId, handleCloseModal, handleRemoveFromWishlist, darkTheme }): JSX.Element => {
    return (
        <div className={`
                ${ darkTheme ? "bg-gray-900" : "bg-white" }
                z-50 w-[500px] h-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col p-8 gap-8 transition-all outline-none
            `}
        >
            <div className='flex flex-col items-center gap-2'>
                <RiDeleteBin6Line size={50} className={ darkTheme ? "text-red-600" : "text-red-400"}/>
                <h2 className='text-center'>Are you sure you want to remove this article from your wishlist?</h2>
            </div>
            <div className='flex gap-4'>
                <button
                    className={`
                        ${ darkTheme ? "bg-gray-800 hover:bg-gray-700 text-gray-100" : "bg-gray-100 hover:bg-gray-400 text-gray-600 hover:text-white" }
                        border border-gray-400 transition-all py-1 px-3
                    `}
                    onClick={handleCloseModal}
                >
                    Cancel
                </button>
                <button
                    className={`
                        ${ darkTheme ? "bg-red-600 hover:bg-red-700" : "bg-red-400 hover:bg-red-500" }
                         transition-all py-1 px-3 text-gray-100
                    `}
                    onClick={() => handleRemoveFromWishlist(wishlistId)}
                >
                    I'm sure
                </button>
            </div>
        </div>
    )
}

export default QuestionRemoveFromWishlist