import { AddReplyDTO } from "../../ts/dtos/Blog/Reply/AddReplyDTO";
import { IReply } from "../../ts/interfaces/IBlog/IReply/IReply";
import rootAPI from "./rootAPI";

export const repliesAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getAllReplies: builder.query<IReply[], { postId: number, commentId: number }>({
            query: ({ postId, commentId }) => `/posts/${postId}/comments/${commentId}/replies`,
            providesTags: ["replies"]
        }),

        addReply: builder.mutation<{}, AddReplyDTO>({
            query: (dto) => ({
                method: "POST",
                url: `/posts/${dto.postId}/comments/${dto.commentId}/replies`,
                body: dto
            }),
            invalidatesTags: ["replies"]
        }),

        updateLikeOnReply: builder.mutation<{}, { postId: number, commentId: number, replyId: number, likes: string[] | [] }>({
            query: (dto) => ({
                method: "PATCH",
                url: `/posts/${dto.postId}/comments/${dto.commentId}/replies/${dto.replyId}`,
                body: dto
            }),
            invalidatesTags: ["replies"]
        }),

        deleteReply: builder.mutation<{}, { postId: number, commentId: number, replyId: number }>({
            query: ({ postId, commentId, replyId }) => ({
                method: "DELETE",
                url: `/posts/${postId}/comments/${commentId}/replies/${replyId}`
            }),
            invalidatesTags: ["replies"]
        })
    })
})

export const {
    useGetAllRepliesQuery,
    useAddReplyMutation,
    useUpdateLikeOnReplyMutation,
    useDeleteReplyMutation
} = repliesAPI;