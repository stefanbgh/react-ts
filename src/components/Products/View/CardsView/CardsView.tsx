import { FC} from 'react'

import { ProductCards } from '../../../../components'

interface IProps {
    productRoute: string;
}

const CardsView: FC<IProps> = ({ productRoute }): JSX.Element => {
    return (
        <div className='flex flex-wrap'>
            <ProductCards productRoute={productRoute}/>
        </div>
    )
}

export default CardsView