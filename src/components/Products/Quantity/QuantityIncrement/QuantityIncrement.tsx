import { FC, MouseEventHandler } from 'react'

interface IProps {
    disabledIncrement: boolean;
    handleIncrement: MouseEventHandler<HTMLButtonElement>;
}

const QuantityIncrement: FC<IProps> = ({ disabledIncrement, handleIncrement }): JSX.Element => {
    return (
        <button 
            className="quantity-cart__button-increment"
            disabled={disabledIncrement} 
            onClick={handleIncrement}
        >
            +
        </button>
    )
}

export default QuantityIncrement