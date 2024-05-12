import { ChangeEvent } from 'react';

interface IFilterTooltipPrice {
    left: string;
    top: string;
}

export const filterTooltipPrice: Function = (e: ChangeEvent<HTMLInputElement>, value: number): IFilterTooltipPrice => {
    const target = e.target;

    const sliderWidth = target.clientWidth;
    const sliderLeft = target.getBoundingClientRect().left;
    const tooltipWidth = 30;

    const tooltipLeft = (sliderWidth * Number(value)) / Number(target.max) + sliderLeft - tooltipWidth / 2;
    const tooltipRight = target.offsetTop - 25;

    return {
        left: `${tooltipLeft}px`,
        top: `${tooltipRight}px`
    };
}