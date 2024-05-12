import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    pictureURL: string | null;
}

const initialState: InitialState = {
    pictureURL: null
}

export const profilePictureSlice = createSlice({
    name: "profile-picture",
    initialState,
    reducers: {
        CHANGE_PROFILE_PICTURE: (state, action: PayloadAction<string>) => {
            state.pictureURL = action.payload;
        }
    }
});

export const { CHANGE_PROFILE_PICTURE } = profilePictureSlice.actions;