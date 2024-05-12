export interface AddCommentDTO {
    postId: number;
    username: string;
    content: string;
    timestamp: number;
    likes: string[];
    userId: string;
}