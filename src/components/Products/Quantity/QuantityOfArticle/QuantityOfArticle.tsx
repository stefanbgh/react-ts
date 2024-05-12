import { FC} from 'react'

interface IProps {
    quantity: number;
}

const QuantityOfArticle: FC<IProps> = ({ quantity }): JSX.Element => <div className="text-center w-6/12">{quantity}</div>;

export default QuantityOfArticle