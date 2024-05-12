import { FC} from 'react'

interface IProps {
    name: string;
    desc: string;
}

const ProductSingleSpecification: FC<IProps> = ({ name, desc }): JSX.Element => {
    return (
        <div className='flex justify-between mb-2'>
            <p className='w-1/2'>{name}</p>
            <p className='w-1/2'>{desc}</p>
        </div>
    )
}

export default ProductSingleSpecification