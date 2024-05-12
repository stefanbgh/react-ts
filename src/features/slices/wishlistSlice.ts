import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWishlist } from "../../ts/interfaces/IWishlist/IWishlist";
import { wishlistAPI } from "../API/wishlistAPI";

interface InitialState {
    wishlist: IWishlist[],
}

const initialState: InitialState = {
    wishlist: [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(wishlistAPI.endpoints.getAllFromWishlist.matchFulfilled, (state, action: PayloadAction<IWishlist[]>) => {
            state.wishlist = action.payload;
        });
    }
})
