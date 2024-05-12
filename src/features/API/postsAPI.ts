import { AddPostDTO } from "../../ts/dtos/Blog/Post/AddPostDTO";
import { IPost } from "../../ts/interfaces/IBlog/IPost/IPost";
import rootAPI from "./rootAPI";

export const postsAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getAllPosts: builder.query<IPost[], void>({
            query: () => "/posts",
            providesTags: ["posts"]
        }),

        addSinglePost: builder.mutation<{}, AddPostDTO>({
            query: (dto) => ({
                method: "POST",
                url: "/posts",
                body: dto
            }),
            invalidatesTags: ["posts"]
        }),

        updateLikeOnPost: builder.mutation<{}, { postId: number, likes: string[] | [] }>({
            query: (dto) => ({
                method: "PATCH",
                url: `/posts/${dto.postId}`,
                body: dto
            }),
            invalidatesTags: ["posts"]
        }),

        deleteSinglePost: builder.mutation<{}, number>({
            query: (postId) => ({
                method: "DELETE",
                url: `/posts/${postId}`
            }),
            invalidatesTags: ["posts"]
        })
    })
})

export const {
    useGetAllPostsQuery,
    useAddSinglePostMutation,
    useUpdateLikeOnPostMutation,
    useDeleteSinglePostMutation
} = postsAPI;