import { FC, useEffect } from 'react'

import { ProductDetails, Spinner } from "../../../../components"
import { useParams } from 'react-router-dom';
import { useGetSinglePhoneQuery } from '../../../../features/API/phonesAPI';
import { Routes } from '../../../../router/Routes';

const SinglePhone: FC = (): JSX.Element | null => {
    const { productId } = useParams();

    const { data: singlePhone } = useGetSinglePhoneQuery(Number(productId));

    useEffect(() => window.scrollTo(0, 0));
    
    if (singlePhone) {
        return <ProductDetails 
                    productRoute={`${Routes.PRODUCTS}${Routes.PHONES}`} 
                    productName='Phone' 
                    product={singlePhone} 
                    category='phones'
                />
    }

    return (
        <>
            <div className='h-screen bg-gray-900'></div>
            <Spinner/>
        </>
    );
}

export default SinglePhone