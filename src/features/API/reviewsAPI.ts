import { AddReviewDTO } from "../../ts/dtos/Review/AddReviewDTO";
import { IReview } from "../../ts/interfaces/IReview/IReview";
import rootAPI from "./rootAPI";

export const reviewsAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getReviews: builder.query<IReview[], number>({
            query: (phoneId) => `/phones/${phoneId}/reviews`,
            providesTags: ["reviews"],
        }),
        
        addReview: builder.mutation<{}, AddReviewDTO>({
            query: (dto) => ({
                url: `/phones/${dto.phoneId}/reviews`,
                method: "POST",
                body: dto
            }),
            invalidatesTags: ["reviews"]
        })
    })
})

export const {
    useGetReviewsQuery,
    useAddReviewMutation
} = reviewsAPI;