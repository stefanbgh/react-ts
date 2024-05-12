import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { commentsAPI } from "../API/commentsAPI";
import { IComment } from '../../ts/interfaces/IBlog/IComment/IComment';

interface InitialState {
    comments: IComment[];
    commentsIsVisible: boolean;
};

const initialState: InitialState = {
    comments: [],
    commentsIsVisible: false
}

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        COMMENTS_IS_VISIBLE: (state, action: PayloadAction<boolean>) => {
            state.commentsIsVisible = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(commentsAPI.endpoints.getAllComments.matchFulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments.push(...action.payload);
        })
    }
})

export const { COMMENTS_IS_VISIBLE } = commentsSlice.actions;