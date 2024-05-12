import { IPost } from './../../ts/interfaces/IBlog/IPost/IPost';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { postsAPI } from "../API/postsAPI";

interface InitialState {
    posts: IPost[]
};

const initialState: InitialState = {
    posts: []
}

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(postsAPI.endpoints.getAllPosts.matchFulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = [...action.payload].reverse();
        })
    }
})