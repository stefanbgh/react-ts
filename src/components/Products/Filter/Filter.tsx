import { FC, useEffect, useState, FormEventHandler, Dispatch, SetStateAction } from 'react'

import { FilterBrands, FilterClear, FilterColors, FilterPrice, FilterRatings, FilterSkeleton, FilterTitle } from "../../../components"

import { TColors } from '../../../ts/types/TColors';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { FILTERS_CHECKED, RESET_FILTERS_CHECKED } from '../../../features/slices/filterProductsSlice';
import { initialRatingsForFilter } from '../../../constants/initialRatingsForFilter';
import { IProduct } from '../../../ts/interfaces/IProduct/IProduct';
import { IScreen } from '../../../ts/interfaces/IProduct/IScreen';

import "./Filter.scss"

interface IProps {
    products: IProduct<IScreen | string>[];
    handleFilterChange: FormEventHandler<HTMLFormElement>;
    discount: number;
    setDiscount: Dispatch<SetStateAction<number>>;
}

const Filter: FC<IProps> = ({ products, handleFilterChange, discount, setDiscount }): JSX.Element => {
    const [ filterBrands, setFilterBrands ] = useState<string[]>([]);
    const [ filterColors, setFilterColors ] = useState<TColors[]>([]);
    const [ filterPrice, setFilterPrice ] = useState<number[]>([]);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (products.length === 0) return;

        dispatch(RESET_FILTERS_CHECKED({ products: products }));

        const uniqueBrands = new Set();
        const uniqueColors = new Set();
        const filters: { [key: string]: boolean } = {}
        
        products.forEach((product: IProduct<IScreen | string>) => {
            uniqueBrands.add(product.brand);
            setFilterPrice((prev) => [...prev, product.price]);
            setDiscount!(product.discount);

            product.colors.forEach((color: TColors) => uniqueColors.add(color));
        })

        uniqueBrands.forEach((uniq) => {
            filters[uniq as string] = false;
            setFilterBrands((prev) => [...prev, uniq as string]);
        });

        uniqueColors.forEach((uniq) => {
            filters[uniq as TColors] = false;
            setFilterColors((prev) => [...prev, uniq as TColors])
        });

        dispatch(FILTERS_CHECKED({ 
            ...filters,
            ...initialRatingsForFilter
        }));

        // eslint-disable-next-line
    }, [products]);

    const handleFilterClear = () => { 
        dispatch(RESET_FILTERS_CHECKED({
            products
        }));
    };

    return (
        <>
            {
                products.length > 0 ? (
                    <form 
                        className='w-1/6 border border-gray-400 h-full'
                        onChange={handleFilterChange}
                        onSubmit={handleFilterClear}
                    >
                        <div className='border border-b-gray-400 flex items-center justify-between p-4'>
                            <FilterTitle/>
                            <FilterClear/>
                        </div>
                        <div>
                            <FilterBrands uniqueBrands={filterBrands}/>
                            <FilterRatings/>
                            <FilterPrice filterPrice={filterPrice} discount={discount!}/>
                            <FilterColors uniqueColors={filterColors}/>
                        </div>
                    </form>
                ) : (
                    <div className='w-1/6'>
                        <FilterSkeleton/>
                    </div>
                )
            }
        </>
    )
}

export default Filter