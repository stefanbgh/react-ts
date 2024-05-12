import { FC, useState, useEffect, useContext, Context, ChangeEvent } from 'react'

import { priceMinAndMax } from '../../../../utils/helpers/priceMinAndMax';
import { calculationDiscount } from '../../../../utils/helpers/calculationDiscount';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { RootState } from '../../../../ts/types/RootState';
import DarkThemeContext from '../../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';
import { IFilterPriceTooltipStyle } from '../../../../ts/interfaces/ITooltip/IFilterPriceTooltipStyle';
import { FilterPriceTooltip } from '../../../../components';
import { filterTooltipPrice } from '../../../../utils/filterTooltipPrice';

interface IProps {
    filterPrice: number[];
    discount: number;
}

const FilterPrice: FC<IProps> = ({ filterPrice, discount }): JSX.Element => {
    const { filterCurrentPrice } = useAppSelector((state: RootState) => state.filters);
    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    const [ price, setPrice ] = useState<number>();
    const [ currentPrice, setCurrentPrice ] = useState<string>();
    const [ tooltipStyle, setTooltipStyle ] = useState<IFilterPriceTooltipStyle>({ display: "none" });

    const prices = priceMinAndMax(filterPrice);
    const { minPrice, maxPrice } = prices;
    
    const calcMinPrice = calculationDiscount(minPrice, discount);
    const calcMaxPrice = calculationDiscount(maxPrice, discount);

    useEffect(() => {
        setPrice(filterCurrentPrice);
        setTooltipStyle({ display: "none" });

    }, [filterCurrentPrice]);

    const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => { 
        const value = e.target.value;

        const { left, top } = filterTooltipPrice(e, Number(value));

        setTooltipStyle({ left, top });
        setCurrentPrice(value);
    };

    return (
        <div className='border border-b-gray-400 p-4'>
            <div className='flex items-center gap-2 mb-4'>
                <p className='text-gray-400'>Price:</p>
                <p className='text-gray-400 text-sm'>${price}</p>
            </div>
            <div>
                <div className='mb-1'>
                    <input
                        onChange={handleChangePrice}
                        id='price'
                        type="range" 
                        className={`
                            w-full h-2 rounded-xl cursor-pointer appearance-none
                            ${darkTheme ? "bg-gray-700" : "bg-gray-200"}
                        `} 
                        min={calcMinPrice} 
                        max={calcMaxPrice}
                        step={1}
                    />
                    <FilterPriceTooltip
                        currentPrice={currentPrice as string}
                        darkTheme={darkTheme}
                        tooltipStyle={tooltipStyle}
                    />
                </div>
                <div className='flex justify-between'>
                    <p className='text-gray-400 text-sm relative -top-1'>${calcMinPrice}</p>
                    <p className='text-gray-400 text-sm relative -top-1'>${calcMaxPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default FilterPrice