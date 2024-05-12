import { FC} from 'react'

import { BsCart3 } from 'react-icons/bs'

interface IProps { 
    iconSize: number;
}

const ContentAddToCart: FC<IProps> = ({ iconSize }): JSX.Element => {
    return (
        <>
            <p>Add to Cart</p>
            <BsCart3 className='text-white' size={iconSize} />
        </>
    )
}

export default ContentAddToCart