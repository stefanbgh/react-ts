import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
    view: "grid" | "list";
}

const initialState: InitialState = {
    view: "grid"
}

export const viewSlice = createSlice({
    name: "views",
    initialState,
    reducers: {
        VIEW_CHANGE: (state, action: PayloadAction<"grid" | "list">) => {
            state.view = action.payload;
        },
        RESET_VIEW_TO_GRID: (state) => {
            state.view = "grid";
        }
    }
})

export const { VIEW_CHANGE, RESET_VIEW_TO_GRID } = viewSlice.actions;