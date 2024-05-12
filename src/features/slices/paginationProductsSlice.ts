import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
    activePage: number;
}

// pagination is set to the first page by default, but it starts counting from 0
const initialState: InitialState = {
    activePage: 0
};  

export const paginationProductsSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        PAGINATION_CHANGE_PAGE: (state, action: PayloadAction<{ pageNumber: number }>) => {
            const { pageNumber } = action.payload;

            state.activePage = pageNumber;
        },
        PAGINATION_RESET_TO_FIRST_PAGE: (state) => {
            state.activePage = 0;
        }
    }
});

export const { PAGINATION_CHANGE_PAGE, PAGINATION_RESET_TO_FIRST_PAGE } = paginationProductsSlice.actions;