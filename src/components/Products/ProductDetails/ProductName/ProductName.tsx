import { FC} from 'react'

interface IProps {
    articleName: string;
}

const ProductName: FC<IProps> = ({ articleName }): JSX.Element => <h2 className='text-3xl'>{articleName}</h2>;

export default ProductName