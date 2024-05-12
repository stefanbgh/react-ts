import { FC} from 'react'

import { IQuantity } from '../../../../ts/interfaces/IQuantity/IQuantity'
import { QuantityDecrement, QuantityIncrement, QuantityOfArticle, QuantityWarningMessage } from "../../.."
import "./QuantityDetails.scss"

const QuantityDetails: FC<IQuantity> = ({ disabledDecrement, handleDecrement, quantity, disabledIncrement, handleIncrement }): JSX.Element => {
    return (
        <div className='quantity-details'>
            <p>Quantity:</p>
            <div className="quantity-details__button">
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
            <QuantityWarningMessage
                disabledDecrement={disabledDecrement}
                disabledIncrement={disabledIncrement}
            />
        </div>
    )
}

export default QuantityDetails