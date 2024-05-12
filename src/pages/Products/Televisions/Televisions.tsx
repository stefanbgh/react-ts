import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Banner, Filter, ProductsContainerSkeleton } from '../../../components'

import televisionsImage from "../../../assets/televisions.webp"
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { FILTERED_PRODUCTS, FILTER_BY_PRICE, RESET_FILTER_CURRENT_PRICE } from '../../../features/slices/filterProductsSlice';
import { PAGINATION_RESET_TO_FIRST_PAGE } from '../../../features/slices/paginationProductsSlice';
import { Container, ProductsContainer } from '../../../containers';
import { Routes } from '../../../router/Routes';
import { useGetTelevisionsQuery } from '../../../features/API/televisionsAPI';
import { debounce } from 'throttle-debounce';

const Televisions: FC = (): JSX.Element => {
    useGetTelevisionsQuery();
    const { televisions } = useAppSelector((state: RootState) => state.televisions);

    const [ discount, setDiscount ] = useState<number>(0);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(FILTERED_PRODUCTS({
            products: televisions,
        }));

        dispatch(RESET_FILTER_CURRENT_PRICE());

        window.scrollTo(0, 0);

        // eslint-disable-next-line
    }, [televisions]);

    // filter by price
    const debounceFunc = debounce(1000, (args: number) => {
        dispatch(FILTER_BY_PRICE({
            products: televisions,
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
            products: televisions,
            filterName,
            isChecked,
        }));
    };  

    return (
        <div>
            <Banner
                title="Televisions"
                bgPosition="bg-center"
                bgNoRepeat="bg-no-repeat"
                image={televisionsImage}
            />
            <Container>
                <div className='flex w-full gap-6 pt-6'>
                    <Filter 
                        discount={discount}
                        setDiscount={setDiscount}
                        products={televisions}
                        handleFilterChange={handleFilterChange}
                    />
                    {
                        televisions.length > 0
                            ? <ProductsContainer productRoute={Routes.TELEVISIONS}/>
                            : <ProductsContainerSkeleton/>
                    }
                </div>
            </Container>
        </div>
    )
}

export default Televisions