import { FC, useRef } from 'react'

import { CardsView, ListsView, ProductsSearch, Sort, View } from '../../components';
import { useAppSelector } from '../../hooks/useAppSelector';
import { RootState } from '../../ts/types/RootState';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { VIEW_CHANGE } from '../../features/slices/viewSlice';
import { PAGINATION_RESET_TO_FIRST_PAGE } from '../../features/slices/paginationProductsSlice';

interface IProps {
    productRoute: string;
}

const ProductsContainer: FC<IProps> = ({ productRoute }): JSX.Element => {
    const { view } = useAppSelector((state: RootState) => state.view);
    const dispatch = useAppDispatch();
    const searchRef = useRef<HTMLInputElement>(null);

    const handleChangeProductsView = (view: "grid" | "list") => {
        dispatch(VIEW_CHANGE(view));
        dispatch(PAGINATION_RESET_TO_FIRST_PAGE());
    };

    return (
        <div className='w-5/6 border border-gray-400 h-full'>
            <div className='border border-b-gray-300 px-4 py-3'>
                <div className='flex justify-between items-center'>
                    <ProductsSearch
                        searchRef={searchRef}
                    />
                    <div className='flex items-center gap-4'>
                        <View
                            activeView={view}
                            handleChangeProductsView={handleChangeProductsView}
                        />
                        <Sort
                            searchRef={searchRef}
                        />
                    </div>
                </div>
            </div>
            <div className='p-2'>
            {
                view === "grid" 
                    ? <CardsView productRoute={productRoute}/>
                    : <ListsView productRoute={productRoute}/>
            }
            </div>
        </div>
    )
}

export default ProductsContainer