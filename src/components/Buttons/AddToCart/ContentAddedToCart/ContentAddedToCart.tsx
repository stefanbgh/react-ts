import { FC} from 'react'

import { BsCartCheck } from 'react-icons/bs'

interface IProps { 
    iconSize: number;
}

const ContentAddedToCart: FC<IProps> = ({ iconSize }): JSX.Element => {
    return (
        <>
            <p>Added to Cart</p>
            <BsCartCheck className='text-white' size={iconSize} />
        </>
    )
}

export default ContentAddedToCart