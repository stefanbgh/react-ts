import { FC, useState, useContext, Context } from 'react'

import { useDeleteFromCartMutation } from '../../../features/API/cartAPI';
import { RemoveFromCart, Spinner } from "../../../components"
import { Modal } from '@mui/material';
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    cartId: number;
}

const CartArticleRemove: FC<IProps> = ({ cartId }): JSX.Element => {
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(false);

    const [ deleteSingleArticleFromCart ] = useDeleteFromCartMutation();

    const handleRemoveFromCart = async (cId: number) => { 
        setModalIsOpen(false);
        setLoading(true);

        const { success } = await deleteSingleArticleFromCart(cId).unwrap();

        if (success) {
            setLoading(false);
        };
    };

    const handleOpenModal = () => setModalIsOpen(true);
    const handleCloseModal = () => setModalIsOpen(false);

    return (
    <>
        <button 
            className={`
                ${ darkTheme ? "bg-red-600 hover:bg-red-700" : "bg-red-400 hover:bg-red-500" }
                w-1/4 text-white transition-all py-1 px-3
            `}
            onClick={handleOpenModal}
        >
            Remove
        </button>
        <Modal
            open={modalIsOpen}
            onClose={handleCloseModal}
            className={ darkTheme ? "bg-gray-900 bg-opacity-80" : "bg-white bg-opacity-80"}
        >
            <RemoveFromCart
                handleCloseModal={handleCloseModal}
                handleRemoveFromCart={handleRemoveFromCart}
                cartId={cartId}
                darkTheme={darkTheme}
            />
        </Modal>
        { loading && <Spinner/> }
    </>
    )
}

export default CartArticleRemove