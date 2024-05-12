import { FC, ChangeEvent, useEffect, useState } from 'react'

import phonesImage from "../../../assets/phones.webp";
import { Banner, Filter, ProductsContainerSkeleton } from '../../../components'
import { ProductsContainer, Container } from '../../../containers';
import { RootState } from '../../../ts/types/RootState';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useGetPhonesQuery } from '../../../features/API/phonesAPI';
import { FILTERED_PRODUCTS, FILTER_BY_PRICE, RESET_FILTER_CURRENT_PRICE } from '../../../features/slices/filterProductsSlice';
import { PAGINATION_RESET_TO_FIRST_PAGE } from '../../../features/slices/paginationProductsSlice';
import { Routes } from '../../../router/Routes';
import { debounce } from 'throttle-debounce';

const Phones: FC = (): JSX.Element => {
    useGetPhonesQuery();
    const { phones } = useAppSelector((state: RootState) => state.phones);

    const [ discount, setDiscount ] = useState<number>(0);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(FILTERED_PRODUCTS({
            products: phones,
        }));

        dispatch(RESET_FILTER_CURRENT_PRICE());
        
        window.scrollTo(0, 0);

        // eslint-disable-next-line
    }, [phones]);

    // filter by price
    const debounceFunc = debounce(1000, (args: number) => {
        dispatch(FILTER_BY_PRICE({
            products: phones,
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
            products: phones,
            filterName,
            isChecked,
        }));
    };  

    return (
        <div>
            <Banner
                title="Phones"
                bgPosition="bg-center"
                bgNoRepeat="bg-no-repeat"
                image={phonesImage}
            />
            <Container>
                <div className='flex w-full gap-6 pt-6'>
                    <Filter 
                        discount={discount}
                        setDiscount={setDiscount}
                        products={phones}
                        handleFilterChange={handleFilterChange}
                    />
                    {
                        phones.length > 0
                            ? <ProductsContainer productRoute={Routes.PHONES}/>
                            : <ProductsContainerSkeleton/>
                    }
                </div>
            </Container>
        </div>
    )
}

export default Phones