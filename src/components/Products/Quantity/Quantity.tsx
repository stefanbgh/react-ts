import { FC, useEffect, useState, Dispatch, SetStateAction } from 'react'

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { UPDATE_SINGLE_ARTICLE } from '../../../features/slices/cartSlice';
import { QuantityDetails, QuantityCart } from "../../../components"

interface IProps {
    count: number;
    quantityType: string;
    cartId?: number;
    setCount?: Dispatch<SetStateAction<number>>;
}

const Quantity: FC<IProps> = ({ cartId, quantityType, count, setCount }): JSX.Element => {
    const [ quantity, setQuantity ] = useState<number>(1);
    const [ disabledDecrement, setDisabledDecrement ] = useState<boolean>(false);
    const [ disabledIncrement, setDisabledIncrement ] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    useEffect(() => { 
        if (cartId) dispatch(UPDATE_SINGLE_ARTICLE({ cartId, count: quantity }));

        setQuantity(count);
        
        // eslint-disable-next-line
    }, [count, cartId]);

    const handleDecrement = () => {
        setDisabledIncrement(false);
        setDisabledDecrement(false);

        if (quantity === 1) { setDisabledDecrement(true); return; }

        setQuantity((q) => {
            const newCount = q - 1;

            if (cartId) dispatch(UPDATE_SINGLE_ARTICLE({ cartId, count: newCount }));

            return newCount;
        });

        if (setCount) setCount((c) => c - 1);
    };
    const handleIncrement = () => {
        setDisabledDecrement(false);
        setDisabledIncrement(false);

        if (quantity === 20) { setDisabledIncrement(true); return; }

        setQuantity((q) => {
            const newCount = q + 1;

            if (cartId) dispatch(UPDATE_SINGLE_ARTICLE({ cartId, count: newCount }));

            return newCount;
        });

        if (setCount) setCount((c) => c + 1);
    };

    return (
        <>
            {
                quantityType === "details" && (
                    <QuantityDetails
                        disabledDecrement={disabledDecrement}
                        handleDecrement={handleDecrement}
                        quantity={quantity}
                        disabledIncrement={disabledIncrement}
                        handleIncrement={handleIncrement}
                    />
                )
            }
            {
                quantityType === "cart" && (
                    <QuantityCart
                        disabledDecrement={disabledDecrement}
                        handleDecrement={handleDecrement}
                        quantity={quantity}
                        disabledIncrement={disabledIncrement}
                        handleIncrement={handleIncrement}
                    />
                )
            }
        </>
    )
}

export default Quantity