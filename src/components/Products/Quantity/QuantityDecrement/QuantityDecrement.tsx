import { FC, MouseEventHandler } from 'react'

interface IProps {
    disabledDecrement: boolean;
    handleDecrement: MouseEventHandler<HTMLButtonElement>;
}

const QuantityDecrement: FC<IProps> = ({ disabledDecrement, handleDecrement }): JSX.Element => {
    return (
        <button 
            className="quantity-cart__button-decrement"
            disabled={disabledDecrement} 
            onClick={handleDecrement}
        >
            -
        </button>
    )
}

export default QuantityDecrement