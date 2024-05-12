import { FC} from 'react'

import { firstCapitalLatter } from '../../../../utils/helpers/capitalFirstLetter'

interface IProps {
    status: string;
}

const ProductStatus: FC<IProps> = ({ status }): JSX.Element => {
    return (
        <div className='flex items-center gap-2 mb-2'>
            <div className='bg-green-400 w-2.5 h-2.5 rounded-full'></div>
            <h3>{firstCapitalLatter(status)}</h3>
        </div>
    )
}

export default ProductStatus