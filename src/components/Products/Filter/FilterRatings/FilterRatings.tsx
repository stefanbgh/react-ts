import { FC, Fragment, useContext, Context } from 'react'

import { filterRatingsData } from './filterRatingsData'
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { RootState } from '../../../../ts/types/RootState';
import DarkThemeContext from '../../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';

const FilterRatings: FC = (): JSX.Element => {
    const { filtersChecked } = useAppSelector((state: RootState) => state.filters);

    const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

    return (
        <div className='border border-b-gray-400 p-4'>
            <div className="flex flex-col items-start">
                <p className='mb-2 text-gray-400'>Ratings</p>
                {
                    filterRatingsData.map((filterRatings) => {
                        const { filterRatingId, stars } = filterRatings;

                        return (
                            <div key={filterRatingId} className='flex items-center mb-1 last:mb-0'>
                                <input 
                                    type="checkbox" 
                                    id={`${filterRatingId}`} 
                                    defaultChecked={filtersChecked[`${filterRatingId}`]}
                                    className={`
                                        ${darkTheme ? "filter__checkbox-dark" : "filter__checkbox-light"}
                                        appearance-none w-3 h-3 rounded-sm cursor-pointer
                                    `}
                                />
                                <label className='ml-2' htmlFor={`${filterRatingId}`} >
                                    <div className='flex gap-1'>
                                        { stars.map((star, index) => <Fragment key={index}>{star}</Fragment>) }
                                    </div>
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FilterRatings