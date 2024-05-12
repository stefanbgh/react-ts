import { FC, useEffect, useState, RefObject } from 'react'
import { debounce } from "throttle-debounce"
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { SEARCH_PRODUCTS } from '../../../features/slices/sortProductsSlice';
import { IProduct } from '../../../ts/interfaces/IProduct/IProduct';
import { PAGINATION_RESET_TO_FIRST_PAGE } from '../../../features/slices/paginationProductsSlice';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IScreen } from '../../../ts/interfaces/IProduct/IScreen';

interface IProps {
    searchRef: RefObject<HTMLInputElement>;
}

const ProductsSearch: FC<IProps> = ({ searchRef }): JSX.Element => {
    const { sortedProducts } = useAppSelector((state: RootState) => state.sorts);
    const [ products, setProducts ] = useState<IProduct<IScreen | string>[]>([]);
    const [ isNotFirstTime, setIsNotFirstTime ] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isNotFirstTime) {
            setProducts(sortedProducts);
            setIsNotFirstTime(true);

            return;
        }

        // eslint-disable-next-line
    }, [sortedProducts]);

    const debounceFunc = debounce(1000, (args: string) => {
        dispatch(PAGINATION_RESET_TO_FIRST_PAGE());

        if (args === "") {
            dispatch(SEARCH_PRODUCTS({ products }));

            return;
        }

        const searchFilteredProducts = products.filter((product: IProduct<IScreen | string>) => {
            return product.articleName.toLowerCase().indexOf(args.toLowerCase()) !== -1;
        });

        dispatch(SEARCH_PRODUCTS({
            products: searchFilteredProducts
        }));
    });

    const handleSearchProducts = () => debounceFunc(searchRef.current!.value);

    return (
        <div className='border border-gray-300 flex items-center py-2 px-3 gap-1'>
            <input 
                className='outline-none bg-transparent'
                type="text" 
                placeholder='Search by name'
                ref={searchRef}
                onChange={handleSearchProducts}
            />
            <div>
                <BiSearchAlt2
                    size={20}
                    className='text-gray-400'
                />
            </div>
        </div>
  )
}

export default ProductsSearch