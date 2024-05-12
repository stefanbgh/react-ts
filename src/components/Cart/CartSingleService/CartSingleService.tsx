interface IProps {
    icon: string;
    title: string;
    text: string;
}

const CartSingleService = ({ icon, title, text }: IProps) => {
    return (
        <div className='flex items-center gap-4'>
            <div>
                <img width={50} src={icon} alt="cart-delivery.webp" loading="lazy"/>
            </div>
            <div className='flex flex-col justify-between'>
                <p>{title}</p>
                <p className="text-gray-400">{text}</p>
            </div>
        </div>
    )
}

export default CartSingleService