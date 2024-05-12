import { FC} from 'react'

import { TableSingleRow } from "../../../components"
import { AllProducts } from '../../../ts/types/AllProducts';

interface IProps {
    allProducts: AllProducts[];
}

const TableRows: FC<IProps> = ({ allProducts }): JSX.Element => {
    return (
        <>
            {
                allProducts.map((product: AllProducts) => {
                    const { articleId, articleName, quantity, category, price, discount } = product;

                    return (
                        <TableSingleRow
                            key={`${category}${articleId}`}
                            articleName={articleName}
                            quantity={quantity}
                            category={category}
                            price={price}
                            discount={discount}
                        />
                    )
                })
            }
        </>
    )
}

export default TableRows