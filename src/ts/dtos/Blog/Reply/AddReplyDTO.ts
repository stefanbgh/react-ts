export interface AddReplyDTO {
    postId: number;
    commentId: number;
    username: string;
    content: string;
    timestamp: number;
    likes: string[];
    userId: string;
}