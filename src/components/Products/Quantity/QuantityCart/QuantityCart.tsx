import { FC} from 'react'

import { QuantityDecrement, QuantityOfArticle, QuantityIncrement } from "../../../../components"
import { IQuantity } from '../../../../ts/interfaces/IQuantity/IQuantity'
import "./QuantityCart.scss"

const QuantityCart: FC<IQuantity> = ({ handleDecrement, disabledDecrement, quantity, handleIncrement, disabledIncrement }): JSX.Element => {
    return (
        <div className='quantity-cart'>
            <div className="quantity-cart__button">
                <QuantityDecrement
                    disabledDecrement={disabledDecrement}
                    handleDecrement={handleDecrement}
                />
                <QuantityOfArticle
                    quantity={quantity}
                />
                <QuantityIncrement
                    disabledIncrement={disabledIncrement}
                    handleIncrement={handleIncrement}
                />
            </div>
        </div>
    ) 
}

export default QuantityCart