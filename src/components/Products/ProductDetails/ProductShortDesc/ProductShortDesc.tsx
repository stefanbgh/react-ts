import { FC} from 'react'
import { timestampToLocalString } from '../../../../utils/helpers/timestampToLocalString';
import { firstCapitalLatter } from '../../../../utils/helpers/capitalFirstLetter';

interface IProps {
    model: string;
    timestamp: number;
    brand: string;
}

const ProductShortDesc: FC<IProps> = ({ model, timestamp, brand }): JSX.Element => {
    return (
        <div className='flex flex-col gap-2 mb-2'>
            <p>Model: {model}</p>
            <p>Date: {timestampToLocalString(timestamp)}</p>
            <p>Brand: {firstCapitalLatter(brand)}</p>
        </div>
    )
}

export default ProductShortDesc