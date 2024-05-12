import { Skeleton } from '@mui/material'


const ProductsContainerSkeleton = () => {
    return (
        <Skeleton 
            animation="wave"
            className='mb-1 last:mb-0'
            variant="rectangular" 
            width="100%"
            height={1280} 
        />
    )
}

export default ProductsContainerSkeleton