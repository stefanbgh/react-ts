import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Banner, Filter, ProductsContainerSkeleton } from '../../../components'

import tabletsImage from "../../../assets/tablets.webp"
import { useGetTabletsQuery } from '../../../features/API/tabletsAPI';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { FILTERED_PRODUCTS, FILTER_BY_PRICE, RESET_FILTER_CURRENT_PRICE } from '../../../features/slices/filterProductsSlice';
import { PAGINATION_RESET_TO_FIRST_PAGE } from '../../../features/slices/paginationProductsSlice';
import { Container, ProductsContainer } from '../../../containers';
import { Routes } from '../../../router/Routes';
import { debounce } from 'throttle-debounce';

const Tablets: FC = (): JSX.Element => {
    useGetTabletsQuery();
    const { tablets } = useAppSelector((state: RootState) => state.tablets);

    const [ discount, setDiscount ] = useState<number>(0);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(FILTERED_PRODUCTS({
            products: tablets,
        }));

        dispatch(RESET_FILTER_CURRENT_PRICE());

        window.scrollTo(0, 0);

        // eslint-disable-next-line
    }, [tablets]);

    // filter by price
    const debounceFunc = debounce(1000, (args: number) => {
        dispatch(FILTER_BY_PRICE({
            products: tablets,
            price: args,
            discount
        }));
    });

    // filter
    const handleFilterChange = (e: ChangeEvent<HTMLFormElement>) => { 
        const isChecked = e.target.checked;
        const filterName = e.target.id;
        const filterPrice = e.target.value;

        dispatch(PAGINATION_RESET_TO_FIRST_PAGE());

        if (filterName === "price") {
            debounceFunc(filterPrice);

            return;
        }

        // filter by checked
        dispatch(FILTERED_PRODUCTS({
            products: tablets,
            filterName,
            isChecked,
        }));
    };  

    return (
        <div>
            <Banner
                title="Tablets"
                bgPosition="bg-center"
                bgNoRepeat="bg-no-repeat"
                image={tabletsImage}
            />
            <Container>
                <div className='flex w-full gap-6 pt-6'>
                    <Filter 
                        discount={discount}
                        setDiscount={setDiscount}
                        products={tablets}
                        handleFilterChange={handleFilterChange}
                    />
                    {
                        tablets.length > 0
                            ? <ProductsContainer productRoute={Routes.TABLETS}/>
                            : <ProductsContainerSkeleton/>
                    }
                </div>
            </Container>
        </div>
    )
}

export default Tablets