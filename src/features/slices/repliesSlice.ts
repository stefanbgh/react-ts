import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { repliesAPI } from "../API/repliesAPI";
import { IReply } from './../../ts/interfaces/IBlog/IReply/IReply';

interface InitialState {
    replies: IReply[];
    repliesIsVisible: boolean;
};

const initialState: InitialState = {
    replies: [],
    repliesIsVisible: false
}

export const repliesSlice = createSlice({
    name: "replies",
    initialState,
    reducers: {
        REPLIES_IS_VISIBLE: (state, action: PayloadAction<boolean>) => {
            state.repliesIsVisible = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(repliesAPI.endpoints.getAllReplies.matchFulfilled, (state, action: PayloadAction<IReply[]>) => {
            state.replies = action.payload;
        })
    }
})

export const { REPLIES_IS_VISIBLE } = repliesSlice.actions;