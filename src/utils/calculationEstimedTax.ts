import numeral from "numeral";

export const calculationEstimatedTax: Function = (totalAmount: number): string => {
    const percent = 0.12;

    const estimatedTax = numeral(totalAmount * percent).format("0,00.00"); 

    return estimatedTax;
}