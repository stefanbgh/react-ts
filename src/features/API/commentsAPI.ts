import { AddCommentDTO } from "../../ts/dtos/Blog/Comment/AddCommentDTO";
import { IComment } from "../../ts/interfaces/IBlog/IComment/IComment";
import rootAPI from "./rootAPI";

export const commentsAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getAllComments: builder.query<IComment[], number>({
            query: (postId) => `/posts/${postId}/comments`,
            providesTags: ["comments"]
        }),

        addSingleComment: builder.mutation<{}, AddCommentDTO>({
            query: (dto) => ({
                method: "POST",
                url: `/posts/${dto.postId}/comments`,
                body: dto
            }),
            invalidatesTags: ["comments"]
        }),
        
        updateLikeOnComment: builder.mutation<{}, { postId: number, commentId: number, likes: string[] | [] }>({
            query: (dto) => ({
                method: "PATCH",
                url: `/posts/${dto.postId}/comments/${dto.commentId}`,
                body: dto
            }),
            invalidatesTags: ["comments"]
        }),

        deleteSingleComment: builder.mutation<{}, { postId: number, commentId: number }>({
            query: ({ postId, commentId }) => ({
                method: "DELETE",
                url: `/posts/${postId}/comments/${commentId}`
            }),
            invalidatesTags: ["comments"]
        })
    })
})

export const {
    useGetAllCommentsQuery,
    useAddSingleCommentMutation,
    useUpdateLikeOnCommentMutation,
    useDeleteSingleCommentMutation
} = commentsAPI;