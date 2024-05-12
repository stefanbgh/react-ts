import { cartServicesData } from './cartServicesData'
import { CartSingleService } from "../../../components"

const CartServices = () => {
    return (
        <>
            {
                cartServicesData.map((singleService) => {
                    const { serviceId, icon, text, title } = singleService;

                    return  <CartSingleService
                                key={serviceId}
                                icon={icon}
                                text={text}
                                title={title}
                            />
                })
            }
        </>
    )
}

export default CartServices