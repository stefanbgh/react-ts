export const calculationDiscount: Function = (price: number, discount: number): number => {
    const convertDiscount = +`0.${discount}`;

    const oldPrice = price * convertDiscount;

    return +(price - oldPrice).toFixed(2);
};  