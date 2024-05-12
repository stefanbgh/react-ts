import { FC, Dispatch, SetStateAction, RefObject } from 'react'

import { debounce } from 'throttle-debounce';
import { PAGINATION_RESET_TO_FIRST_PAGE } from '../../../features/slices/paginationProductsSlice';
import { IProduct } from '../../../ts/interfaces/IProduct/IProduct';
import { IScreen } from '../../../ts/interfaces/IProduct/IScreen';
import { AllProducts } from '../../../ts/types/AllProducts';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { BiSearchAlt2 } from 'react-icons/bi';

interface IProps {
    searchRef: RefObject<HTMLInputElement>
    setSortBy: Dispatch<SetStateAction<string>>;
    allProducts: AllProducts[];
    setProducts: Dispatch<SetStateAction<AllProducts[]>>;
}

const AdminSearch: FC<IProps> = ({ allProducts, setProducts, searchRef, setSortBy }): JSX.Element => {
    const dispatch = useAppDispatch();

    const debounceFunc = debounce(1000, (args: string) => {
        dispatch(PAGINATION_RESET_TO_FIRST_PAGE());

        if (args === "") {
            setProducts(allProducts);
            setSortBy("all");

            return;
        }

        const search = allProducts.filter((product: IProduct<IScreen | string>) => {
            return product.articleName.toLowerCase().indexOf(args.toLowerCase()) !== -1;
        });

        setProducts(search);
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

export default AdminSearch