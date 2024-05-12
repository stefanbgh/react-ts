import { FC, useEffect } from 'react'

import { ProductDetails, Spinner } from "../../../../components"
import { useParams } from 'react-router-dom';
import { useGetSingleTelevisionQuery } from '../../../../features/API/televisionsAPI';
import { Routes } from '../../../../router/Routes';

const SingleTelevision: FC = (): JSX.Element | null => {
    const { productId } = useParams();

    const { data: singleTelevision } = useGetSingleTelevisionQuery(Number(productId));

    useEffect(() => window.scrollTo(0, 0), []);
    
    if (singleTelevision) {
        return <ProductDetails 
                    productRoute={`${Routes.PRODUCTS}${Routes.TELEVISIONS}`}
                    productName='Television' 
                    product={singleTelevision} 
                    category='televisions'
                />
    }

    return (
        <>
            <div className='h-screen bg-gray-900'></div>
            <Spinner/>
        </>
    );
}

export default SingleTelevision