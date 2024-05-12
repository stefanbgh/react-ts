import { FC, ChangeEvent, useEffect, RefObject, useContext, Context } from 'react'

import { sortOptions } from '../../../constants/sortOptions';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { SORT_BY } from '../../../features/slices/sortProductsSlice';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { SortBy } from '../../../ts/types/SortBy';
import { PAGINATION_RESET_TO_FIRST_PAGE } from '../../../features/slices/paginationProductsSlice';
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    searchRef: RefObject<HTMLInputElement>;
}

const Sort: FC<IProps> = ({ searchRef }): JSX.Element => {
    const { filteredProducts } = useAppSelector((state: RootState) => state.filters);
    const { sortBy } = useAppSelector((state: RootState) => state.sorts);

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (sortBy === "recommended") {
            dispatch(SORT_BY({
                sortBy: "recommended",
                products: filteredProducts
            }));
        }

        // eslint-disable-next-line
    }, [filteredProducts]);

    const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => { 
        dispatch(PAGINATION_RESET_TO_FIRST_PAGE());
        dispatch(SORT_BY({
            sortBy: e.target.value as SortBy,
            products: filteredProducts
        }));
        searchRef.current!.value = "";
    };

    return (
        <div className='flex items-center'>
            <p>Sort by: </p>
            <select 
                className='ml-2 py-0.5 px-1 border border-gray-400 cursor-pointe bg-transparent cursor-pointer' 
                id="sortProducts" 
                onChange={handleSortChange}
                defaultValue={sortBy}
            >
                {
                    sortOptions.map((singleOption) => {
                        const { optionId, optionValue, text } = singleOption;

                        return (  
                            <option 
                                className={ darkTheme ? "bg-gray-900" : "bg-white" }
                                key={optionId} 
                                value={optionValue}
                            >
                                {text}
                            </option>
                        )
                    })
                }
            </select>
        </div>
  )
}

export default Sort