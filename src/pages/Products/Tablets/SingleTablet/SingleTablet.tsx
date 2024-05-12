import { FC, useEffect } from 'react'

import { ProductDetails, Spinner } from "../../../../components"
import { useParams } from 'react-router-dom';
import { useGetSingleTabletQuery } from '../../../../features/API/tabletsAPI';
import { Routes } from '../../../../router/Routes';

const SingleTablet: FC = (): JSX.Element | null => {
    const { productId } = useParams();

    const { data: singleTablet } = useGetSingleTabletQuery(Number(productId));

    useEffect(() => window.scrollTo(0, 0), []);
    
    if (singleTablet) {
        return <ProductDetails 
                    productRoute={`${Routes.PRODUCTS}${Routes.TABLETS}`}
                    productName='Tablet' 
                    product={singleTablet} 
                    category='tablets'
                />
    }

    return (
        <>
            <div className='h-screen bg-gray-900'></div>
            <Spinner/>
        </>
    );
}

export default SingleTablet