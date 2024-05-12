import { FC} from 'react'

import RoundColors from '../../RoundColors/RoundColors'
import { TColors } from '../../../../ts/types/TColors'

interface IProps {
    colors: TColors[]
}

const ProductColors: FC<IProps> = ({ colors }): JSX.Element => {
    return (
        <div className='flex items-center gap-2'>
            <p>Colors:</p>
            <RoundColors colors={colors} largeSize={true}/>
        </div>
    )
}

export default ProductColors