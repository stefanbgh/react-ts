export interface IReview {
    reviewText: string;
    username: string;
    reviewTitle: string;
    timestamp: number;
    reviewRating: number;
    reviewAnswer: {
        admin: string;
        answer: string;
        timestamp: number;
    };
    userId: string;
    adminResponse: boolean;
    reviewId: number;
    phoneId: number;
}