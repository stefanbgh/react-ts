

import { OrdersHead, OrdersList } from "../../../components"

const Orders = () => {
    return (
        <div>
            <div className='p-4 flex justify-between border border-gray-300'>
                <OrdersHead/>
            </div>
            <OrdersList/>
        </div>
    )
}

export default Orders