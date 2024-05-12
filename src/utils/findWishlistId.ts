import { IWishlist } from "../ts/interfaces/IWishlist/IWishlist";

export const findWishlistId: Function = (wishlist: IWishlist[], userId: string, articleId: number, category: string): number => {
    const wishlistId = wishlist.find(
        (w) =>
            w.userId === userId &&
            w.articleId === articleId &&
            w.category === category
    );

    if (wishlistId) {
        return wishlistId.wishlistId;
    }
    
    return 0;
}