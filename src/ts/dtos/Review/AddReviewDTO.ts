export interface AddReviewDTO {
    phoneId: string;
    userId: string;
    username: string;
    reviewRating: number;
    timestamp: number;
    reviewTitle: string;
    reviewText: string;
}