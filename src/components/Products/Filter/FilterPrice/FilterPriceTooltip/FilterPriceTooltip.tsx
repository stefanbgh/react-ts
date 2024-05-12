import { FC } from 'react'

import { IFilterPriceTooltipStyle } from '../../../../../ts/interfaces/ITooltip/IFilterPriceTooltipStyle';

import "./FilterPriceTooltip.scss";

interface IProps {
    tooltipStyle: IFilterPriceTooltipStyle;
    darkTheme: boolean;
    currentPrice: string;
}

const FilterPriceTooltip: FC<IProps> = ({ tooltipStyle, darkTheme, currentPrice }): JSX.Element => {
    return (
        <div 
            style={tooltipStyle} 
            className={ darkTheme ? "tooltip-dark" : "tooltip" }
        >
            ${currentPrice}
        </div>
    ) 
}

export default FilterPriceTooltip