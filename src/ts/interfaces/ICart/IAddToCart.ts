export interface IAddToCart {
    userId: string;
    articleId: number;
    articleName: string;
    brand: string;
    price: number;
    quantity: number;
    image: string;
    rating: number;
    category: string;
    count: number;
    totalPrice: number;
}