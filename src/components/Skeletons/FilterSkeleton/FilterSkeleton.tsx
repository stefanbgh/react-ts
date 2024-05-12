import { FC} from 'react'

import { filterSkeleton } from '../../../constants/skeletons/filterSkeleton';
import { Skeleton } from '@mui/material';

const FilterSkeleton: FC = (): JSX.Element => {
    return (
    <>
        {
            filterSkeleton.map((skeleton) => {
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
        }
    </>
    )
}

export default FilterSkeleton