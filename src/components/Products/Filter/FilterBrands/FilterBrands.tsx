import { FC, useContext, Context } from 'react'
import { firstCapitalLatter } from '../../../../utils/helpers/capitalFirstLetter';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { RootState } from '../../../../ts/types/RootState';
import DarkThemeContext from '../../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

interface IProps {
    uniqueBrands: string[];
}

const FilterBrands: FC<IProps> = ({ uniqueBrands }): JSX.Element => {
    const { filtersChecked } = useAppSelector((state: RootState) => state.filters);

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className='border border-b-gray-400 p-4'>
            <div className="flex flex-col items-start">
                <p className='mb-2 text-gray-400'>Brands</p>
                {
                    uniqueBrands.length > 0 ? (
                        uniqueBrands.map((brand, index) => {
                            return (
                                <div key={index} className='flex items-center mb-1'>
                                    <label className='flex items-center gap-2 relative' htmlFor={brand}>
                                        <input 
                                            type="checkbox" 
                                            id={brand} 
                                            defaultChecked={filtersChecked[brand]}
                                            className={`
                                                ${darkTheme ? "filter__checkbox-dark" : "filter__checkbox-light"}
                                                appearance-none w-3 h-3 rounded-sm cursor-pointer
                                            `}
                                        />
                                        {firstCapitalLatter(brand)}
                                    </label>
                                </div>
                            )
                        })
                    ) : null
                }
            </div>
        </div>
    )
}

export default FilterBrands