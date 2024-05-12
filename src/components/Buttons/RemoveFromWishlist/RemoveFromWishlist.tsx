import { FC, useState } from 'react'

import { Modal } from '@mui/material';
import { QuestionRemoveFromWishlist, Spinner } from "../../../components";
import { useDeleteFromWishlistMutation } from '../../../features/API/wishlistAPI';
import { toast } from 'react-toastify';

interface IProps {
    wishlistId: number;
    darkTheme: boolean;
}

const RemoveFromWishlist: FC<IProps> = ({ wishlistId, darkTheme }): JSX.Element => {
    const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ deleteFromWishlist ] = useDeleteFromWishlistMutation();
    
    const theme = darkTheme ? "dark" : "light";

    const handleRemoveFromWishlist = async (wId: number) => { 
        setModalIsOpen(false);
        setLoading(true);

        const { success } = await deleteFromWishlist(wId).unwrap();
        if (success) setLoading(false);

        toast.success("You successfully removed article from your wishlist", { theme });
        setModalIsOpen(false);
    };

    const handleOpenModal = () => setModalIsOpen(true);
    const handleCloseModal = () => setModalIsOpen(false);

    return (
        <>
            <div className='w-1/12 flex justify-center'>
                <button 
                    className={`
                        ${ darkTheme ? "bg-red-600 hover:bg-red-700" : "bg-red-400 hover:bg-red-500" }
                        transition-all py-1 px-2 text-white rounded-md
                    `}
                    onClick={handleOpenModal}
                    >
                    Remove
                </button>
            </div>
            <Modal
                open={modalIsOpen}
                onClose={handleCloseModal}
                className={ darkTheme ? "bg-gray-900 bg-opacity-80" : "bg-white bg-opacity-80"}
                children={
                    <QuestionRemoveFromWishlist
                        wishlistId={wishlistId}
                        handleCloseModal={handleCloseModal}
                        handleRemoveFromWishlist={handleRemoveFromWishlist}
                        darkTheme={darkTheme}
                    />
                }
            />
            { loading && <Spinner/> }
        </>
    )
}

export default RemoveFromWishlist