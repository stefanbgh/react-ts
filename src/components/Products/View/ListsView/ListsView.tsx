import { FC} from 'react'

import { ProductLists } from "../../../../components"

interface IProps {
    productRoute: string;
}

const ListsView: FC<IProps> = ({ productRoute }): JSX.Element => {
    return (
        <div className='flex flex-wrap'>
            <ProductLists productRoute={productRoute}/>
        </div>
    )
}

export default ListsView