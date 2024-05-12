import { IProduct } from "../../ts/interfaces/IProduct/IProduct";
import { IScreen } from "../../ts/interfaces/IProduct/IScreen";
import { SortBy } from "../../ts/types/SortBy";

export const helperSortedProducts = (sortBy: SortBy, products: IProduct<IScreen | string>[]): IProduct<IScreen | string>[] => {
    let sP: IProduct<IScreen | string>[] = [];

    switch(sortBy) {
        case "recommended": 
            sP = products;
            break;

        case "low-to-high": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IProduct<IScreen | string>, next: IProduct<IScreen | string>) => prev.price - next.price);

            sP = sortedProducts;
            break;
        };
        case "high-to-low": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IProduct<IScreen | string>, next: IProduct<IScreen | string>) => next.price - prev.price);

            sP = sortedProducts;
            break;
        };
        case "latest": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IProduct<IScreen | string>, next: IProduct<IScreen | string>) => next.timestamp - prev.timestamp);

            sP = sortedProducts;
            break;
        };
        case "oldest": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IProduct<IScreen | string>, next: IProduct<IScreen | string>) => prev.timestamp - next.timestamp);

            sP = sortedProducts;
            break;
        };
        case "a-z": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IProduct<IScreen | string>, next: IProduct<IScreen | string>) => prev.articleName.localeCompare(next.articleName));

            sP = sortedProducts;
            break;
        };
        case "z-a": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IProduct<IScreen | string>, next: IProduct<IScreen | string>) => next.articleName.localeCompare(prev.articleName));

            sP = sortedProducts;
            break;
        };
    };

    return sP;
};