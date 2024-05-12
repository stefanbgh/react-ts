import { ICart } from "../ts/interfaces/ICart/ICart";

export const findCartId: Function = (cart: ICart[], userId: string, articleId: number, category: string): number => {
    const cartId = cart.find(
        (c) =>
            c.userId === userId &&
            c.articleId === articleId &&
            c.category === category
    );

    if (cartId) {
        return cartId.cartId;
    }
    
    return 0;
}