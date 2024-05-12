import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { reviewsAPI } from "../API/reviewsAPI";
import { IReview } from "../../ts/interfaces/IReview/IReview";

interface InitialState {
    reviews: IReview[];
};

const initialState: InitialState = {
    reviews: [],
};

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
		builder.addMatcher(reviewsAPI.endpoints.getReviews.matchFulfilled, (state, action: PayloadAction<IReview[]>) => {
			const reviews = action.payload;

			state.reviews = [...reviews].reverse();
		});
	},
})