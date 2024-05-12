import { FC} from 'react'
import { calculationDiscount } from '../../../utils/helpers/calculationDiscount';

interface IProps {
    articleName: string;
    quantity: number;
    category: string;
    price: number;
    discount: number;
}

const TableSingleRow: FC<IProps> = ({ articleName, quantity, category, price, discount }): JSX.Element => {
    const calcDiscount = calculationDiscount(price, discount);

    return (
        <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-200 text-blue-400">
            <td className="px-6 py-4">{articleName}</td>
            <td className="px-6 py-4">{quantity}</td>
            <td className="px-6 py-4">{category}</td>
            <td className="px-6 py-4">${calcDiscount}</td>
            <td className="px-6 py-4">
                <button className="bg-blue-400 hover:bg-blue-500 text-white py-1 px-3">Edit</button>
            </td>
        </tr>
    )
}

export default TableSingleRow