import { FC} from 'react'

import { ProductTable } from '../../../components'
import { Skeleton } from '@mui/material';
import { useGetAllProductsQuery } from '../../../features/API/allProductsAPI';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { tableSkeleton } from '../../../constants/skeletons/tableSkeleton';

const AdminProducts: FC = (): JSX.Element => {
    useGetAllProductsQuery();

	const { allProducts } = useAppSelector((state: RootState) => state.allProducts);

	return (
		<>
			{
				allProducts.length > 0 ? (
					<ProductTable
                        allProducts={allProducts}
                    />
				) : (
					tableSkeleton.map((skeleton) => {
						const { skeletonId, skeletonHeight } = skeleton;
					
						return (
							<Skeleton 
								animation="wave"
								className='mb-1 last:mb-0'
								key={skeletonId} 
								variant="rectangular" 
								width="100%"
								height={skeletonHeight} 
							/>
						)
					})
				)
			}
		</>
	);
}

export default AdminProducts