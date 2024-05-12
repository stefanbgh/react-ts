import { IProduct } from "../../ts/interfaces/IProduct/IProduct";
import { IScreen } from "../../ts/interfaces/IProduct/IScreen";
import { TColors } from "../../ts/types/TColors";

export const helperFilteredProducts = (
    filtersChecked: { [key: string]: boolean }, products: IProduct<IScreen | string>[]
): IProduct<IScreen | string>[] => {
    const filters: string[] = [];
    
    Object.entries(filtersChecked).forEach((product) => {
        if (product[1]) {
            filters.push(product[0]);

            return;
        }
    });

    const filteredProducts = products.filter((product: IProduct<IScreen | string>) => {
        return (
            filters.includes(product.brand)
            || filters.includes(`${product.rating}`)
            || product.colors.some((color: TColors) => filters.includes(color))
        );
    });

    return filteredProducts;
}