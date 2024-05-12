import { FC, useEffect } from 'react'

import { Banner, Categories } from '../../components'
import products from "../../assets/products.webp";
import { Container } from '../../containers';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { RESET_FILTER_CURRENT_PRICE } from '../../features/slices/filterProductsSlice';
import { RESET_SORT_TO_RECOMMENDED } from '../../features/slices/sortProductsSlice';
import { RESET_VIEW_TO_GRID } from '../../features/slices/viewSlice';
import { PAGINATION_RESET_TO_FIRST_PAGE } from '../../features/slices/paginationProductsSlice';

const Products: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(RESET_FILTER_CURRENT_PRICE());
        dispatch(RESET_SORT_TO_RECOMMENDED());
        dispatch(RESET_VIEW_TO_GRID());
        dispatch(PAGINATION_RESET_TO_FIRST_PAGE());

        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Banner
                title="All Product Categories"
                bgPosition="bg-bottom"
                bgNoRepeat="bg-no-repeat"
                image={products}
            />
            <Container>
                <Categories/>
            </Container>
        </div>
    )
}

export default Products