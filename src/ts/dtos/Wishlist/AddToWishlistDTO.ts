export interface AddToWishlistDTO {
    articleId: number;
    userId: string;
    articleName: string;
    category: string;
    price: number;
    status: string;
    image: string;
}