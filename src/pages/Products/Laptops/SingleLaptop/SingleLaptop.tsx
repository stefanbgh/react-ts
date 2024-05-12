import { FC, useEffect } from 'react'

import { ProductDetails, Spinner } from "../../../../components"
import { useParams } from 'react-router-dom';
import { useGetSingleLaptopQuery } from '../../../../features/API/laptopsAPI';
import { Routes } from '../../../../router/Routes';

const SingleLaptop: FC = (): JSX.Element | null => {
    const { productId } = useParams();

    const { data: singleLaptop } = useGetSingleLaptopQuery(Number(productId));

    useEffect(() => window.scrollTo(0, 0), []);
    
    if (singleLaptop) {
        return <ProductDetails 
                    productRoute={`${Routes.PRODUCTS}${Routes.LAPTOPS}`}
                    productName='Laptop' 
                    product={singleLaptop} 
                    category='laptops'
                />
    }

    return (
        <>
            <div className='h-screen bg-gray-900'></div>
            <Spinner/>
        </>
    );
}

export default SingleLaptop