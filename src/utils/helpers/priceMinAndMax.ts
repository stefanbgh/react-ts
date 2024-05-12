export const priceMinAndMax = (prices: number[]): { minPrice: number, maxPrice: number } => {
    let minPrice = prices[0];
    let maxPrice = 0;
    
    let i = 0;
    for (i; i < prices.length; i++) {
        if (prices[i] < minPrice) minPrice = prices[i];
        if (prices[i] > maxPrice) maxPrice = prices[i];
    }

    return {
        minPrice,
        maxPrice
    }
};