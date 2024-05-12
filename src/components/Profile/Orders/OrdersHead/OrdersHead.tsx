

import { ordersHeadData } from './ordersHeadData'

const OrdersHead = () => {
    return (
        <>
            {
                ordersHeadData.map((orderHead) => {
                    const { orderId, text, width } = orderHead;

                    return (
                        <div key={orderId} className={`w-${width}/6`}>
                            <p>{text}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default OrdersHead