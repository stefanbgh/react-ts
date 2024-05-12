import { FC} from 'react'

import { TColors } from '../../../../ts/types/TColors'
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { RootState } from '../../../../ts/types/RootState';
import { colors } from '../../../../constants/colors';
import { GiCheckMark } from "react-icons/gi";

interface IProps {
    uniqueColors: TColors[];
}

const FilterColors: FC<IProps> = ({ uniqueColors }): JSX.Element => {
    const { filtersChecked } = useAppSelector((state: RootState) => state.filters);

    return (
        <div className='border border-b-gray-400 p-4'>
            <p className='mb-2 text-gray-400'>Colors</p>
            {
                uniqueColors.length > 0 ? (
                    uniqueColors.map((color: TColors, index) => (
                            <label key={index} htmlFor={color} className='relative'>
                                <input 
                                    type="checkbox" 
                                    id={color} 
                                    defaultChecked={filtersChecked[color]}
                                    className={`
                                        appearance-none mr-2 w-6 h-6 rounded-full border border-gray-400 cursor-pointer ${colors[color]}
                                        `}
                                    />
                                    <GiCheckMark 
                                        className={`
                                            ${filtersChecked[color] ? "" : "hidden"} 
                                            absolute left-1.5 -top-1.5 cursor-pointer
                                        `}
                                        size={18}
                                        strokeWidth={18}
                                        stroke='#3b82f6'
                                        color="white"
                                    />
                            </label>
                    ))
                ) : null
            }
        </div>
    )
}

export default FilterColors